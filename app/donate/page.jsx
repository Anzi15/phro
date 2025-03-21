"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { loadStripe } from "@stripe/stripe-js"

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "")

export default function DonationPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("national")
  const [copied, setCopied] = useState(false)
  const [customAmount, setCustomAmount] = useState("")
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const iban = "PK66NAYA1234503360398419"
  const donationAmounts = [100, 500, 1000, 5000]
  const payoneerDetails = {
    accountNumber: 70589630001301816,
    BankName: "Citibank",
    BeneficiaryName: "PHRO LTD",
    SortCode: "CITIUS33" ,
    Routing: "031100209 " 
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(iban)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  const handleDonationClick = async (amount) => {
    const finalAmount = typeof amount === "string" ? Number.parseInt(amount, 10) : amount

    if (isNaN(finalAmount) || finalAmount <= 0) {
      alert("Please enter a valid donation amount.")
      return
    }

    setIsProcessing(true)

    // In a real implementation, you would call your API to create a Stripe checkout session
    // For this example, we'll simulate this with a timeout
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(amount) }),
      });
  
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        alert("Error: " + data.error);
      }
  
    } catch (error) {
      console.error("Error:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Make a Difference Today</h1>
          <p className="mt-3 text-xl text-white max-w-3xl">
            Your generosity can change lives. Support PHRO's mission to help those in need.
          </p>
        </div>
      </div>

      {/* Main Content */}

        {/* Impact Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl font-bold mb-2">1,000+</div>
              <p className="text-gray-600">Families supported</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl font-bold mb-2">24</div>
              <p className="text-gray-600">Countries reached</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl font-bold mb-2">100%</div>
              <p className="text-gray-600">Of donations go to programs</p>
            </div>
          </div>
        </div>

        {/* Donation Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Support Our Mission</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              "Every donation, no matter how small, brings hope to someone in need. Be the light in someone's darkness."
            </p>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8">
              <button
                className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === "national"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("national")}
              >
                National Donation
              </button>
              <button
                className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === "international"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("international")}
              >
                International Donation
              </button>
            </div>

            {/* National Tab Content */}
            {activeTab === "national" && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Bank Transfer Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">IBAN</p>
                      <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200">
                        <code className="font-mono text-sm md:text-base">{iban}</code>
                        <button
                          onClick={copyToClipboard}
                          className="ml-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          {copied ? (
                            <>
                              <svg
                                className="h-4 w-4 mr-1.5 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Copied
                            </>
                          ) : (
                            <>
                              <svg
                                className="h-4 w-4 mr-1.5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    {/* <div>
                      <p className="text-sm text-gray-500 mb-1">Bank</p>
                      <p className="font-medium">PHRO International Bank</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Beneficiary</p>
                      <p className="font-medium">PHRO Foundation</p>
                    </div> */}
                  </div>
                  <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
                    <p className="text-sm text-blue-800">
                      Please include your name and "Donation" in the payment reference.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* International Tab Content */}
            {activeTab === "international" && (
              // <div className="space-y-6">
              //   <h3 className="text-lg font-medium text-gray-900 mb-4">Choose Donation Amount</h3>

              //   <div className="grid grid-cols-2 gap-4">
              //     {donationAmounts.map((amount) => (
              //       <button
              //         key={amount}
              //         onClick={() => handleAmountSelect(amount)}
              //         className={`h-16 text-lg font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              //           selectedAmount === amount
              //             ? "bg-blue-600 text-white"
              //             : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              //         }`}
              //       >
              //         ${amount}
              //       </button>
              //     ))}
              //   </div>

              //   <div className="mt-6">
              //     <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2">
              //       Custom Amount
              //     </label>
              //     <div className="mt-1 relative rounded-md shadow-sm">
              //       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              //         <span className="text-gray-500 sm:text-sm">$</span>
              //       </div>
              //       <input
              //         type="number"
              //         name="custom-amount"
              //         id="custom-amount"
              //         className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              //         placeholder="0.00"
              //         value={customAmount}
              //         onChange={(e) => {
              //           setCustomAmount(e.target.value)
              //           setSelectedAmount(null)
              //         }}
              //       />
              //     </div>
              //   </div>

              //   <button
              //     onClick={() => handleDonationClick(customAmount || selectedAmount || 0)}
              //     disabled={isProcessing || (!customAmount && selectedAmount === null)}
              //     className={`w-full py-3 px-4 rounded-md shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              //       isProcessing || (!customAmount && selectedAmount === null)
              //         ? "bg-blue-300 cursor-not-allowed"
              //         : "bg-blue-600 hover:bg-blue-700"
              //     }`}
              //   >
              //     {isProcessing ? (
              //       <div className="flex items-center justify-center">
              //         <svg
              //           className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              //           xmlns="http://www.w3.org/2000/svg"
              //           fill="none"
              //           viewBox="0 0 24 24"
              //         >
              //           <circle
              //             className="opacity-25"
              //             cx="12"
              //             cy="12"
              //             r="10"
              //             stroke="currentColor"
              //             strokeWidth="4"
              //           ></circle>
              //           <path
              //             className="opacity-75"
              //             fill="currentColor"
              //             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              //           ></path>
              //         </svg>
              //         Processing...
              //       </div>
              //     ) : (
              //       `Donate ${selectedAmount ? `$${selectedAmount}` : customAmount ? `$${customAmount}` : ""}`
              //     )}
              //   </button>
              // </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Bank Transfer Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Account number:</p>
                      <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200">
                        <code className="font-mono text-sm md:text-base">{payoneerDetails.accountNumber}</code>
                        <button
                          onClick={copyToClipboard}
                          className="ml-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          {copied ? (
                            <>
                              <svg
                                className="h-4 w-4 mr-1.5 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Copied
                            </>
                          ) : (
                            <>
                              <svg
                                className="h-4 w-4 mr-1.5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Swift Code:</p>
                      <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200">
                        <code className="font-mono text-sm md:text-base">{payoneerDetails.SortCode}</code>
                        <button
                          onClick={copyToClipboard}
                          className="ml-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          {copied ? (
                            <>
                              <svg
                                className="h-4 w-4 mr-1.5 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Copied
                            </>
                          ) : (
                            <>
                              <svg
                                className="h-4 w-4 mr-1.5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Bank Name:</p>
                      <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200">
                        <code className="font-mono text-sm md:text-base">{payoneerDetails.BankName}</code>
                        <button
                          onClick={copyToClipboard}
                          className="ml-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          {copied ? (
                            <>
                              <svg
                                className="h-4 w-4 mr-1.5 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Copied
                            </>
                          ) : (
                            <>
                              <svg
                                className="h-4 w-4 mr-1.5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                      </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">Routing number:</p>
                      <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200">
                        <code className="font-mono text-sm md:text-base">{payoneerDetails.Routing}</code>
                        <button
                          onClick={copyToClipboard}
                          className="ml-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          {copied ? (
                            <>
                              <svg
                                className="h-4 w-4 mr-1.5 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Copied
                            </>
                          ) : (
                            <>
                              <svg
                                className="h-4 w-4 mr-1.5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Bank Name:</p>
                      <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200">
                        <code className="font-mono text-sm md:text-base">{payoneerDetails.BankName}</code>
                        <button
                          onClick={copyToClipboard}
                          className="ml-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          {copied ? (
                            <>
                              <svg
                                className="h-4 w-4 mr-1.5 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Copied
                            </>
                          ) : (
                            <>
                              <svg
                                className="h-4 w-4 mr-1.5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                      </div>

                                          <div>
                      <p className="text-sm text-gray-500 mb-1">Bank Country:</p>
                      <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200">
                        <code className="font-mono text-sm md:text-base">United States</code>
                        <button
                          onClick={copyToClipboard}
                          className="ml-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          {copied ? (
                            <>
                              <svg
                                className="h-4 w-4 mr-1.5 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Copied
                            </>
                          ) : (
                            <>
                              <svg
                                className="h-4 w-4 mr-1.5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    {/* <div>
                      <p className="text-sm text-gray-500 mb-1">Bank</p>
                      <p className="font-medium">PHRO International Bank</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Beneficiary</p>
                      <p className="font-medium">PHRO Foundation</p>
                    </div> */}
                  </div>
                  <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
                    <p className="text-sm text-blue-800">
                      Bank name:
Citibank

Bank address:
111 Wall Street New York, NY 10043 USA

Routing (ABA):
031100209

SWIFT code:
CITIUS33

Account number:
70589630001301816

Account type:
CHECKING

COUNTRY:
United States
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 bg-blue-100 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 -mb-8 -ml-8 bg-blue-100 rounded-full opacity-50"></div>

          <div className="relative">
            <svg className="h-12 w-12 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-xl text-gray-800 italic">
              "Thanks to PHRO's support, my family had food and shelter during the most difficult time of our lives.
              Your donations truly save lives."
            </p>
            <div className="mt-6">
              <div className="font-medium text-gray-900">Maria S.</div>
              <div className="text-gray-600">Recipient of PHRO aid</div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}

    </main>
  )
}

