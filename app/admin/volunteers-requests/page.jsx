"use client";
import { useState, useRef, useEffect } from "react";
import { orderBy, startAfter, collection, query, limit, getDocs } from 'firebase/firestore';
import { db } from "../../lib/firebase/config";
import AdminRequestsCard from "../../components/AdminRequestsCard.jsx";

const AdminRequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [sortRequests, setSortRequests] = useState("createdAt"); 
  const [toDate, setToDate] = useState(null); 
  const [fromDate, setFromDate] = useState(null); 
  const loader = useRef(null);

  useEffect(() => {
    console.table(requests[0]);
  }, [requests]);

  useEffect(() => {
    const refreshRequests = async () => {
      if (fromDate || toDate) { // Only refresh if there's a valid change
        setLastVisible(null);
        setInitialLoading(true);
        await loadMoreRequests();
      }
    };
    refreshRequests();
  }, [fromDate, toDate]);

  useEffect(() => {
    loadMoreRequests();
  }, [sortRequests]);

  useEffect(() => {
    let cooldown = false;

    const handleObserver = (entries) => {
      if (entries[0].isIntersecting && hasMore && !loading && !cooldown) {
        cooldown = true;
        loadMoreRequests();
        setTimeout(() => (cooldown = false), 1000); // 1-second cooldown
      }
    };

    const observer = new IntersectionObserver(handleObserver, { threshold: 1.0 });
    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loading, hasMore]);

  const paginateDocs = async (collectionName, numDocs, lastVisibleDoc = null) => {
    try {
      const q = lastVisibleDoc
        ? query(
            collection(db, collectionName),
            orderBy(sortRequests, "desc"),
            startAfter(lastVisibleDoc),
            limit(numDocs)
          )
        : query(
            collection(db, collectionName),
            orderBy(sortRequests, "desc"),
            limit(numDocs)
          );

      console.log("Query:", q);

      const querySnapshot = await getDocs(q);
      console.log("Query Snapshot:", querySnapshot);

      const documents = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        doc,
      }));

      console.log("Documents:", documents);
      return documents;
    } catch (error) {
      console.error("Error loading documents: ", error);
      return [];
    }
  };
  
  const loadMoreRequests = async () => {
    if (loading) return;  // Guard to prevent re-triggering
    setLoading(true);
    const PAGE_SIZE = 15;
    try {
      const requestsData = await paginateDocs("volunteer-requests", PAGE_SIZE, lastVisible);
      
      if (requestsData.length === 0) {
        setHasMore(false);
      } else {
        // Update lastVisible with the last item of filtered requests
        const filteredRequests = requestsData.filter((request) => {
          const createdAtDate = request.createdAt.toDate();
          return (!fromDate || createdAtDate >= new Date(fromDate)) &&
                 (!toDate || createdAtDate <= new Date(toDate));
        });

        if (filteredRequests.length > 0) {
          setLastVisible(filteredRequests[filteredRequests.length - 1].doc);
        }

        setRequests((prevRequests) => {
          const newRequests = filteredRequests.map((doc) => ({
            id: doc.id,
            ...doc,
          }));
          const uniqueRequests = newRequests.filter(
            (newRequest) =>
              !prevRequests.some(
                (prevRequest) => prevRequest.id === newRequest.id
              )
          );
          return [...prevRequests, ...uniqueRequests];
        });
      }
    } catch (error) {
      console.error("Error loading requests:", error);
    }

    setLoading(false);
    setInitialLoading(false);
  };

  return (
    <main className="my-8">
      <h1 className="text-5xl text-left px-6">Requests</h1>

      <section className="my-8 md:w-[80vw]">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">Name</th>
                <th scope="col" className="px-4 py-3">City</th>
                <th scope="col" className="px-4 py-3">Phone</th>
                <th scope="col" className="px-4 py-3">Dated</th>
              </tr>
            </thead>
            <tbody>
              {initialLoading ? (
                Array(7).fill().map((_, i) => <AdminRequestsCard key={i} loading={true} />)
              ) : (
                requests.map((request) => {
                  const timeStamp = request.createdAt.toDate();
                  const formattedDate = timeStamp.toLocaleDateString();

                  return (
                    <AdminRequestsCard
                      key={request.id}
                      isLoading={false}
                      volunteerName={request.volunteerDetails.firstName}
                      volunteerPhone={request.volunteerDetails.phoneNumber}
                      requestsDate={request.date}
                      volunteerCity={request.volunteerDetails.city}
                      requestDetailsObj={request}
                    />
                  );
                })
              )}
            </tbody>
          </table>
          <div ref={loader} />
          {loading && (
            Array(7).fill().map((_, i) => <AdminRequestsCard key={`loading-${i}`} loading={true} />)
          )}
        </div>
      </section>
    </main>
  );
};

export default AdminRequestsPage;
