// // "use client";
// // import React, { useEffect, useState } from "react";
// // import {
// //   useStripe,
// //   useElements,
// //   PaymentElement,
// // } from "@stripe/react-stripe-js";
// // import convertToSubcurrency from "../../lib/convertToSubcurrency";
// // import { StripeError } from "@stripe/stripe-js";

// // const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
// // const times = ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"];

// // const CheckoutPage = ({ amount }: { amount: number }) => {
// //   const [rentalType, setRentalType] = useState("pick-up");
// //   const [pickUp, setPickUp] = useState({ location: "", date: "", time: "" });
// //   const [dropOff, setDropOff] = useState({ location: "", date: "", time: "" });

// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const [errorMessage, setErrorMessage] = useState<string>();
// //   const [clientSecret, setClientSecret] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [agreeToMarketing, setAgreeToMarketing] = useState(false);
// //   const [agreeToTerms, setAgreeToTerms] = useState(false);

// //   useEffect(() => {
// //     fetch("/api/create-payment-intent", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
// //     })
// //       .then((res) => {
// //         if (!res.ok) {
// //           throw new Error("Failed to create payment intent");
// //         }
// //         return res.json();
// //       })
// //       .then((data) => setClientSecret(data.clientSecret))
// //       .catch((error) => setErrorMessage(error.message));
// //   }, [amount]);

// //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
// //     event.preventDefault();

// //     if (loading || !stripe || !elements) return;

// //     setLoading(true);

// //     // Ensure the payment form is submitted before confirming the payment
// //     const { error: submitError } = await elements.submit();

// //     if (submitError) {
// //       setErrorMessage(submitError.message);
// //       setLoading(false);
// //       return;
// //     }

// //     const { error, paymentIntent } = await stripe.confirmPayment({
// //       elements,
// //       clientSecret,
// //       confirmParams: {
// //         return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
// //       },
// //     }) as { error: StripeError; paymentIntent: { status: string } };

// //     if (error) {
// //       setErrorMessage(error.message);
// //     } else if (paymentIntent && paymentIntent.status === "succeeded") {
// //       // Redirect to success page or show success message
// //       window.location.href = "/payment-success";
// //     }

// //     setLoading(false);
// //   };

// //   if (!clientSecret || !stripe || !elements) {
// //     return (
// //       <div className="flex items-center justify-center">
// //         <div
// //           className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent text-surface dark:text-white"
// //           role="status"
// //         >
// //           <span className="sr-only">Loading...</span>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="mt-32 w-full h-auto mx-w-[1440px] mx-h-[2240px] flex flex-col-reverse lg:flex-row gap-5 space-y-8 ">
// //       <form onSubmit={handleSubmit}>
// //         {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
// //         <div className="mx-w-[327px] md:w-[852px] lg:max-w-[600px] xl:max-w-[700px] lg:h-auto rounded-lg space-y-8 p-10 ">
// //           {/* Billing section */}
// //           <div className="flex flex-col gap-10">
// //             <div className="w-full bg-white rounded-xl shadow-md p-6 lg:p-8">
// //               <div className="flex justify-between items-center mb-6">
// //                 <div>
// //                   <h2 className="text-xl font-bold text-gray-800">Billing Info</h2>
// //                   <p className="text-sm font-medium text-gray-500">Please enter your billing info</p>
// //                 </div>
// //                 <p className="text-sm text-gray-500">Step 1 of 4</p>
// //               </div>

// //               {/* Input Fields */}
// //               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
// //                   <input
// //                     type="text"
// //                     placeholder="Your name"
// //                     className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
// //                   <input
// //                     type="text"
// //                     placeholder="Phone number"
// //                     className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
// //                   <input
// //                     type="text"
// //                     placeholder="Address"
// //                     className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Town / City</label>
// //                   <input
// //                     type="text"
// //                     placeholder="Town or city"
// //                     className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Rental info */}
// //             <div className="w-full bg-white rounded-xl shadow-md p-6 lg:p-8">
// //               <div className="flex justify-between items-center mb-6">
// //                 <div>
// //                   <h2 className="text-xl font-bold text-gray-800">Rental Info</h2>
// //                   <p className="text-sm font-medium text-gray-500">Please select your rental date</p>
// //                 </div>
// //                 <p className="text-sm text-gray-500">Step 2 of 4</p>
// //               </div>

// //               {/* Rental Type Selection */}
// //               <div className="flex space-x-6 mb-6">
// //                 <label className="flex items-center cursor-pointer">
// //                   <input
// //                     type="radio"
// //                     name="rental-type"
// //                     className="w-4 h-4 text-blue-500 focus:ring-0"
// //                     checked={rentalType === "pick-up"}
// //                     onChange={() => setRentalType("pick-up")}
// //                   />
// //                   <span className="ml-3 text-sm font-medium text-gray-800">Pick-Up</span>
// //                 </label>
// //                 <label className="flex items-center cursor-pointer">
// //                   <input
// //                     type="radio"
// //                     name="rental-type"
// //                     className="w-4 h-4 text-blue-500 focus:ring-0"
// //                     checked={rentalType === "drop-off"}
// //                     onChange={() => setRentalType("drop-off")}
// //                   />
// //                   <span className="ml-3 text-sm font-medium text-gray-800">Drop-Off</span>
// //                 </label>
// //               </div>

// //               {/* Rental Details */}
// //               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //                 {/* Location Selection */}
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
// //                   <select
// //                     className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                     value={rentalType === "pick-up" ? pickUp.location : dropOff.location}
// //                     onChange={(e) => {
// //                       rentalType === "pick-up"
// //                         ? setPickUp({ ...pickUp, location: e.target.value })
// //                         : setDropOff({ ...dropOff, location: e.target.value });
// //                     }}
// //                   >
// //                     <option value="">Select your city</option>
// //                     {locations.map((city, index) => (
// //                       <option key={index} value={city}>
// //                         {city}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>

// //                 {/* Date Selection */}
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
// //                   <input
// //                     type="date"
// //                     className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                     value={rentalType === "pick-up" ? pickUp.date : dropOff.date}
// //                     onChange={(e) =>
// //                       rentalType === "pick-up"
// //                         ? setPickUp({ ...pickUp, date: e.target.value })
// //                         : setDropOff({ ...dropOff, date: e.target.value })
// //                     }
// //                   />
// //                 </div>

// //                 {/* Time Selection */}
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
// //                   <select
// //                     className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                     value={rentalType === "pick-up" ? pickUp.time : dropOff.time}
// //                     onChange={(e) =>
// //                       rentalType === "pick-up"
// //                         ? setPickUp({ ...pickUp, time: e.target.value })
// //                         : setDropOff({ ...dropOff, time: e.target.value })
// //                     }
// //                   >
// //                     <option value="">Select time</option>
// //                     {times.map((time, index) => (
// //                       <option key={index} value={time}>
// //                         {time}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Payment section */}
// //             <div className="w-full bg-white rounded-xl shadow-md p-6 lg:p-8">
// //               <div className="flex justify-between items-center mb-6">
// //                 <div>
// //                   <h2 className="text-xl font-bold text-gray-800">Payment Method</h2>
// //                   <p className="text-sm font-medium text-gray-500">Please enter your payment method</p>
// //                 </div>
// //                 <p className="text-sm text-gray-500">Step 3 of 4</p>
// //               </div>
// //               {clientSecret && <PaymentElement />}
// //             </div>

// //             {/* Confirmation Section */}
// //             <div className="w-full bg-white rounded-lg shadow-lg p-8 mt-4">
// //               <div className="flex justify-between items-center mb-6">
// //                 <div>
// //                   <h2 className="text-2xl font-bold text-gray-800">Confirmation</h2>
// //                   <p className="text-sm text-gray-500">
// //                     We are getting to the end. Just a few clicks and your rental is ready!
// //                   </p>
// //                 </div>
// //                 <span className="text-sm text-gray-500">Step 4 of 4</span>
// //               </div>

// //               {/* Terms and Conditions */}
// //               <div className="space-y-4 mb-8">
// //                 <label className="flex items-center bg-gray-100 p-4 rounded-lg cursor-pointer">
// //                   <input
// //                     type="checkbox"
// //                     checked={agreeToMarketing}
// //                     onChange={(e) => setAgreeToMarketing(e.target.checked)}
// //                     className="form-checkbox w-5 h-5 mr-4"
// //                   />
// //                   <span className="text-gray-800 text-sm">
// //                     I agree with sending marketing and newsletter emails. No spam, promised!
// //                   </span>
// //                 </label>
// //                 <label className="flex items-center bg-gray-100 p-4 rounded-lg cursor-pointer">
// //                   <input
// //                     type="checkbox"
// //                     checked={agreeToTerms}
// //                     onChange={(e) => setAgreeToTerms(e.target.checked)}
// //                     className="form-checkbox w-5 h-5 mr-4"
// //                   />
// //                   <span className="text-gray-800 text-sm">
// //                     I agree to the{" "}
// //                     <a href="/terms" className="text-blue-600 hover:text-blue-800">
// //                       terms and conditions
// //                     </a>
// //                   </span>
// //                 </label>
// //               </div>

// //               <button
// //                 type="submit"
// //                 disabled={loading || !agreeToTerms || !agreeToMarketing}
// //                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
// //               >
// //                 {loading ? "Processing..." : `Pay $${amount} USD`}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default CheckoutPage;




// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   useStripe,
//   useElements,
//   PaymentElement,
// } from "@stripe/react-stripe-js";
// import convertToSubcurrency from "../../lib/convertToSubcurrency";
// import { StripeError } from "@stripe/stripe-js";

// const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
// const times = ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"];

// const CheckoutPage = ({ amount }: { amount: number }) => {
//   const [rentalType, setRentalType] = useState("pick-up");
//   const [pickUp, setPickUp] = useState({ location: "", date: "", time: "" });
//   const [dropOff, setDropOff] = useState({ location: "", date: "", time: "" });

//   const stripe = useStripe();
//   const elements = useElements();
//   const [errorMessage, setErrorMessage] = useState<string>();
//   const [clientSecret, setClientSecret] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [agreeToMarketing, setAgreeToMarketing] = useState(false);
//   const [agreeToTerms, setAgreeToTerms] = useState(false);

//   useEffect(() => {
//     fetch("/api/create-payment-intent", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to create payment intent");
//         }
//         return res.json();
//       })
//       .then((data) => setClientSecret(data.clientSecret))
//       .catch((error) => setErrorMessage(error.message));
//   }, [amount]);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (loading || !stripe || !elements) return;

//     setLoading(true);

//     // Confirm the payment
//     const { error, paymentIntent } = await stripe.confirmPayment({
//       elements,
//       clientSecret,
//       confirmParams: {
//         return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
//       },
//     }) as { error: StripeError; paymentIntent: { status: string } };

//     if (error) {
//       setErrorMessage(error.message);
//     } else if (paymentIntent && paymentIntent.status === "succeeded") {
//       // Redirect to success page or show success message
//       window.location.href = "/payment-success";
//     }

//     setLoading(false);
//   };

//   if (!clientSecret || !stripe || !elements) {
//     return (
//       <div className="flex items-center justify-center">
//         <div
//           className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent text-surface dark:text-white"
//           role="status"
//         >
//           <span className="sr-only">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-32 w-full h-auto mx-w-[1440px] mx-h-[2240px] flex flex-col-reverse lg:flex-row gap-5 space-y-8 ">
//       <form onSubmit={handleSubmit}>
//         {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
//         <div className="mx-w-[327px] md:w-[852px] lg:max-w-[600px] xl:max-w-[700px] lg:h-auto rounded-lg space-y-8 p-10 ">
//           {/* Billing section */}
//           <div className="flex flex-col gap-10">
//             <div className="w-full bg-white rounded-xl shadow-md p-6 lg:p-8">
//               <div className="flex justify-between items-center mb-6">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-800">Billing Info</h2>
//                   <p className="text-sm font-medium text-gray-500">Please enter your billing info</p>
//                 </div>
//                 <p className="text-sm text-gray-500">Step 1 of 4</p>
//               </div>

//               {/* Input Fields */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
//                   <input
//                     type="text"
//                     placeholder="Your name"
//                     className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//                   <input
//                     type="text"
//                     placeholder="Phone number"
//                     className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
//                   <input
//                     type="text"
//                     placeholder="Address"
//                     className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Town / City</label>
//                   <input
//                     type="text"
//                     placeholder="Town or city"
//                     className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Rental info */}
//             <div className="w-full bg-white rounded-xl shadow-md p-6 lg:p-8">
//               <div className="flex justify-between items-center mb-6">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-800">Rental Info</h2>
//                   <p className="text-sm font-medium text-gray-500">Please select your rental date</p>
//                 </div>
//                 <p className="text-sm text-gray-500">Step 2 of 4</p>
//               </div>

//               {/* Rental Type Selection */}
//               <div className="flex space-x-6 mb-6">
//                 <label className="flex items-center cursor-pointer">
//                   <input
//                     type="radio"
//                     name="rental-type"
//                     className="w-4 h-4 text-blue-500 focus:ring-0"
//                     checked={rentalType === "pick-up"}
//                     onChange={() => setRentalType("pick-up")}
//                   />
//                   <span className="ml-3 text-sm font-medium text-gray-800">Pick-Up</span>
//                 </label>
//                 <label className="flex items-center cursor-pointer">
//                   <input
//                     type="radio"
//                     name="rental-type"
//                     className="w-4 h-4 text-blue-500 focus:ring-0"
//                     checked={rentalType === "drop-off"}
//                     onChange={() => setRentalType("drop-off")}
//                   />
//                   <span className="ml-3 text-sm font-medium text-gray-800">Drop-Off</span>
//                 </label>
//               </div>

//               {/* Rental Details */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {/* Location Selection */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
//                   <select
//                     className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     value={rentalType === "pick-up" ? pickUp.location : dropOff.location}
//                     onChange={(e) => {
//                       rentalType === "pick-up"
//                         ? setPickUp({ ...pickUp, location: e.target.value })
//                         : setDropOff({ ...dropOff, location: e.target.value });
//                     }}
//                   >
//                     <option value="">Select your city</option>
//                     {locations.map((city, index) => (
//                       <option key={index} value={city}>
//                         {city}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Date Selection */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
//                   <input
//                     type="date"
//                     className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     value={rentalType === "pick-up" ? pickUp.date : dropOff.date}
//                     onChange={(e) =>
//                       rentalType === "pick-up"
//                         ? setPickUp({ ...pickUp, date: e.target.value })
//                         : setDropOff({ ...dropOff, date: e.target.value })
//                     }
//                   />
//                 </div>

//                 {/* Time Selection */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
//                   <select
//                     className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     value={rentalType === "pick-up" ? pickUp.time : dropOff.time}
//                     onChange={(e) =>
//                       rentalType === "pick-up"
//                         ? setPickUp({ ...pickUp, time: e.target.value })
//                         : setDropOff({ ...dropOff, time: e.target.value })
//                     }
//                   >
//                     <option value="">Select time</option>
//                     {times.map((time, index) => (
//                       <option key={index} value={time}>
//                         {time}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Payment section */}
//           <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//             <div className="mb-6">
//               <h2 className="text-xl font-bold text-gray-800">Payment</h2>
//               <p className="text-sm font-medium text-gray-500">Please enter your payment details</p>
//             </div>

//             <PaymentElement />

//             <button
//               type="submit"
//               className="w-full h-12 mt-6 text-white bg-blue-500 rounded-lg"
//               disabled={loading}
//             >
//               {loading ? "Processing..." : "Pay Now"}
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CheckoutPage;




// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   useStripe,
//   useElements,
//   PaymentElement,
// } from "@stripe/react-stripe-js";
// import convertToSubcurrency from "../../lib/convertToSubcurrency";
// import { StripeError } from "@stripe/stripe-js";

// const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
// const times = ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"];

// const CheckoutPage = ({ amount }: { amount: number }) => {
//   const [rentalType, setRentalType] = useState("pick-up");
//   const [pickUp, setPickUp] = useState({ location: "", date: "", time: "" });
//   const [dropOff, setDropOff] = useState({ location: "", date: "", time: "" });

//   const stripe = useStripe();
//   const elements = useElements();
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [clientSecret, setClientSecret] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetch("/api/create-payment-intent", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to create payment intent");
//         }
//         return res.json();
//       })
//       .then((data) => setClientSecret(data.clientSecret))
//       .catch((error) => setErrorMessage(error.message));
//   }, [amount]);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (loading || !stripe || !elements) return;

//     setLoading(true);

//     try {
//       const { error, paymentIntent } = (await stripe.confirmPayment({
//         elements,
//         clientSecret,
//         confirmParams: {
//           return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
//         },
//       })) as { error: StripeError | null; paymentIntent: { status: string } | null };

//       if (error) {
//         setErrorMessage(error.message ?? "An unknown error occurred");
//       } else if (paymentIntent?.status === "succeeded") {
//         window.location.href = "/payment-success";
//       }
//     } catch (err) {
//       setErrorMessage("Payment failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!clientSecret || !stripe || !elements) {
//     return (
//       <div className="flex items-center justify-center">
//         <div
//           className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent text-surface dark:text-white"
//           role="status"
//         >
//           <span className="sr-only">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-32 w-full h-auto mx-w-[1440px] mx-h-[2240px] flex flex-col-reverse lg:flex-row gap-5 space-y-8">
//       <form onSubmit={handleSubmit}>
//         {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
//         <div className="mx-w-[327px] md:w-[852px] lg:max-w-[600px] xl:max-w-[700px] lg:h-auto rounded-lg space-y-8 p-10">
//           {/* Billing Info */}
//           <div className="w-full bg-white rounded-xl shadow-md p-6 lg:p-8">
//             <div className="flex justify-between items-center mb-6">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-800">Billing Info</h2>
//                 <p className="text-sm font-medium text-gray-500">Please enter your billing info</p>
//               </div>
//               <p className="text-sm text-gray-500">Step 1 of 4</p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <input type="text" placeholder="Your name" className="input-field" />
//               <input type="text" placeholder="Phone number" className="input-field" />
//               <input type="text" placeholder="Address" className="input-field" />
//               <input type="text" placeholder="Town or city" className="input-field" />
//             </div>
//           </div>

//           {/* Rental Info */}
//           <div className="w-full bg-white rounded-xl shadow-md p-6 lg:p-8">
//             <div className="flex justify-between items-center mb-6">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-800">Rental Info</h2>
//                 <p className="text-sm font-medium text-gray-500">Please select your rental date</p>
//               </div>
//               <p className="text-sm text-gray-500">Step 2 of 4</p>
//             </div>

//             <div className="flex space-x-6 mb-6">
//               <label className="radio-label">
//                 <input type="radio" name="rental-type" checked={rentalType === "pick-up"} onChange={() => setRentalType("pick-up")} />
//                 Pick-Up
//               </label>
//               <label className="radio-label">
//                 <input type="radio" name="rental-type" checked={rentalType === "drop-off"} onChange={() => setRentalType("drop-off")} />
//                 Drop-Off
//               </label>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               <select className="input-field" value={rentalType === "pick-up" ? pickUp.location : dropOff.location} onChange={(e) =>
//                 rentalType === "pick-up"
//                   ? setPickUp({ ...pickUp, location: e.target.value })
//                   : setDropOff({ ...dropOff, location: e.target.value })}>
//                 <option value="">Select your city</option>
//                 {locations.map((city) => <option key={city} value={city}>{city}</option>)}
//               </select>

//               <input type="date" className="input-field" value={rentalType === "pick-up" ? pickUp.date : dropOff.date} onChange={(e) =>
//                 rentalType === "pick-up"
//                   ? setPickUp({ ...pickUp, date: e.target.value })
//                   : setDropOff({ ...dropOff, date: e.target.value })} />

//               <select className="input-field" value={rentalType === "pick-up" ? pickUp.time : dropOff.time} onChange={(e) =>
//                 rentalType === "pick-up"
//                   ? setPickUp({ ...pickUp, time: e.target.value })
//                   : setDropOff({ ...dropOff, time: e.target.value })}>
//                 <option value="">Select time</option>
//                 {times.map((time) => <option key={time} value={time}>{time}</option>)}
//               </select>
//             </div>
//           </div>

//           {/* Payment Section */}
//           <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold text-gray-800">Payment</h2>
//             <p className="text-sm font-medium text-gray-500">Please enter your payment details</p>

//             <PaymentElement />
//             <button type="submit" className="w-full h-12 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Pay Now</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CheckoutPage;




"use client";
import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "../../lib/convertToSubcurrency";
import { StripeError } from "@stripe/stripe-js";

const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
const times = ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"];

const CheckoutPage = ({ amount }: { amount: number }) => {
  const [pickUp, setPickUp] = useState({ location: "", date: "", time: "" });

  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState(" ");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to create payment intent");
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => setErrorMessage(error.message));
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading || !stripe || !elements) return;

    setLoading(true);

    try {
      const { error, paymentIntent } = (await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
        },
      })) as { error: StripeError | null; paymentIntent: { status: string } | null };

      if (error) {
        setErrorMessage(error.message ?? "An unknown error occurred");
      } else if (paymentIntent?.status === "succeeded") {
        window.location.href = "/payment-success";
      }
    } catch {
      setErrorMessage("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent text-surface dark:text-white"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-32 w-full h-auto max-w-[1440px] max-h-[2240px] flex flex-col-reverse lg:flex-row gap-5 space-y-8">
      <form onSubmit={handleSubmit}>
        {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
        <div className="max-w-[327px] md:w-[852px] lg:max-w-[600px] xl:max-w-[700px] lg:h-auto rounded-lg space-y-8 p-10">
          <div className="w-full bg-white rounded-xl shadow-md p-6 lg:p-8">
            <h2 className="text-xl font-bold text-gray-800">Billing Info</h2>
            <p className="text-sm font-medium text-gray-500">Please enter your billing info</p>
            <input type="text" placeholder="Your name" className="input-field" />
            <input type="text" placeholder="Phone number" className="input-field" />
            <input type="text" placeholder="Address" className="input-field" />
            <input type="text" placeholder="Town or city" className="input-field" />
          </div>
          <div className="w-full bg-white rounded-xl shadow-md p-6 lg:p-8">
            <h2 className="text-xl font-bold text-gray-800">Rental Info</h2>
            <p className="text-sm font-medium text-gray-500">Please select your rental date</p>
            <input type="date" className="input-field" value={pickUp.date} onChange={(e) => setPickUp({ ...pickUp, date: e.target.value })} />
            <select className="input-field" value={pickUp.location} onChange={(e) => setPickUp({ ...pickUp, location: e.target.value })}>
              <option value="">Select your city</option>
              {locations.map((city) => <option key={city} value={city}>{city}</option>)}
            </select>
            <select className="input-field" value={pickUp.time} onChange={(e) => setPickUp({ ...pickUp, time: e.target.value })}>
              <option value="">Select time</option>
              {times.map((time) => <option key={time} value={time}>{time}</option>)}
            </select>
          </div>
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800">Payment</h2>
            <p className="text-sm font-medium text-gray-500">Please enter your payment details</p>
            <PaymentElement />
            <button type="submit" className="w-full h-12 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Pay Now</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;


