"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Adjusted for App Router
import { auth, firestore } from '../lib/firebase/config'; // Adjust the import according to your Firebase setup
import { onAuthStateChanged } from 'firebase/auth';
import { getDocs, collection, query, where } from 'firebase/firestore';

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (!user) {
          // User is not logged in, redirect to /login
          router.push('/login');
        } else {
          const userEmail = user.email;

          // Check if the user is in the "Admins" collection
          const adminsRef = collection(firestore, 'Admins');
          const q = query(adminsRef, where('Email', '==', userEmail));
          const querySnapshot = await getDocs(q);

          if (querySnapshot.empty) {
            // User is not an admin, redirect to /admin/unauthorized
            router.push('/admin/unauthorized');
          } else {
            // User is an admin, continue rendering children
            setLoading(false);
          }
        }
      });

      // Clean up the listener
      return () => unsubscribe();
    };

    checkUser();
  }, [router]);

  // Show loading state while checking auth
  if (loading) {
    return <div>Loading...</div>; // You can customize this as needed
  }

  return (
    <div>
      {/* Admin Panel Layout */}
      <header>
        <h1>Admin Panel</h1>
        {/* Add your admin navigation here */}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
