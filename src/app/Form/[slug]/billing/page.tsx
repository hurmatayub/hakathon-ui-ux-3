// // // "use client"
// // // import React, { useState } from "react";
// // // import Image from "next/image";
// // // // import CarSummary from "./carSummary";

// // // export default function BillingInfo() {

// // //   const [selectedPayment, setSelectedPayment] = useState("");

  
// // //   const handlePaymentMethodSelect = (method: React.SetStateAction<string>) => {
// // //     setSelectedPayment(method === selectedPayment ? "" : method); 
// // //   };

// // //   return (
// // //     <div className="w-full min-h-screen pt-8 bg-[#F6F7F9]">
// // //       {/* Billing Info */}
// // //       <div className="max-w-3xl mx-auto lg:mx-0 bg-white rounded-lg shadow-md p-6 lg:ml-6">
// // //         <div className="flex justify-between items-center mb-4">
// // //           <div>
// // //             <p className="text-xl font-bold text-[#1A202C]">Billing Info</p>
// // //             <p className="text-sm font-medium text-[#90A3BF] mt-1">
// // //               Please enter your billing info
// // //             </p>
// // //           </div>
// // //           <p className="text-sm font-medium text-[#90A3BF]">Step 1 of 4</p>
// // //         </div>
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
// // //           {["Name", "Phone Number", "Address", "Town / City"].map((label) => (
// // //             <div key={label}>
// // //               <p className="text-base font-semibold text-[#1A202C]">{label}</p>
// // //               <input
// // //                 type="text"
// // //                 placeholder={`Your ${label.toLowerCase()}`}
// // //                 className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
// // //               />
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Rental Info */}
// // //       <div className="max-w-3xl mx-auto lg:mx-0 bg-white rounded-lg shadow-md mt-6 p-6 lg:ml-6">
// // //         <div className="flex justify-between items-center mb-4">
// // //           <div>
// // //             <p className="text-xl font-bold text-[#1A202C]">Rental Info</p>
// // //             <p className="text-sm font-medium text-[#90A3BF] mt-1">
// // //               Please select your rental date
// // //             </p>
// // //           </div>
// // //           <p className="text-sm font-medium text-[#90A3BF]">Step 2 of 4</p>
// // //         </div>

// // //         {/* Pick-Up and Drop-Off */}
// // //         <div className="space-y-8">
// // //           {["Pick-Up", "Drop-Off"].map((type) => (
// // //             <div key={type}>
// // //               <div className="flex items-center gap-2">
// // //                 <div className="w-4 h-4 rounded-full bg-[#3563E94D] flex justify-center items-center">
// // //                   <div className="w-2 h-2 bg-[#3563E9] rounded-full"></div>
// // //                 </div>
// // //                 <p className="text-lg font-semibold text-[#1A202C]">{type}</p>
// // //               </div>

// // //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
// // //                 {["Locations", "Date", "Time"].map((label) => (
// // //                   <div key={label}>
// // //                     <p className="text-base font-semibold text-[#1A202C]">{label}</p>
// // //                     <div className="relative mt-2">
// // //                       <input
// // //                         type="text"
// // //                         placeholder={`Select your ${label.toLowerCase()}`}
// // //                         className="w-full h-14 border rounded-lg px-4 text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
// // //                       />
// // //                       <Image
// // //                         src="/icons/Arrow-down.png"
// // //                         alt="Arrow"
// // //                         width={14}
// // //                         height={14}
// // //                         className="absolute w-4 h-4 top-1/2 right-4 transform -translate-y-1/2"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Payment Method */}
// // //       <div className="max-w-3xl mx-auto lg:mx-0 bg-white rounded-lg shadow-md mt-6 p-6 lg:ml-6">
// // //         <div className="flex justify-between items-center mb-6">
// // //           <div>
// // //             <p className="text-lg font-bold text-[#1A202C]">Payment Method</p>
// // //             <p className="text-sm font-medium text-[#90A3BF]">
// // //               Please enter your payment method
// // //             </p>
// // //           </div>
// // //           <p className="text-sm font-medium text-[#90A3BF]">Step 3 of 4</p>
// // //         </div>

// // //         <div className="bg-[#F6F7F9] rounded-lg p-6">
         
// // //           <div className="flex justify-between items-center mb-8">
// // //             <div className="flex items-center gap-2">
// // //               <Image
// // //                 src="/icons/mark.png"
// // //                 alt=""
// // //                 width={4}
// // //                 height={4}
// // //                 className="w-4 h-4 rounded-full bg-[#3563E94D]"
// // //               />
// // //               <p
// // //                 className="text-base font-semibold text-[#1A202C]"
// // //                 onClick={() => handlePaymentMethodSelect("Credit Card")}
// // //               >
// // //                 Credit Card
// // //               </p>
// // //             </div>
// // //             <Image
// // //               src="/icons/Visa.png"
// // //               alt="Visa Logo"
// // //               width={92}
// // //               height={24}
// // //               className="w-[92px]"
// // //             />
// // //           </div>

// // //           {selectedPayment === "Credit Card" && (
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //               <div>
// // //                 <p className="text-sm font-semibold text-[#1A202C]">Card Number</p>
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Enter your card number"
// // //                   className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-semibold text-[#1A202C]">Card Holder</p>
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Enter cardholder name"
// // //                   className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-semibold text-[#1A202C]">Expiration Date</p>
// // //                 <input
// // //                   type="text"
// // //                   placeholder="MM / YY"
// // //                   className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-semibold text-[#1A202C]">CVC</p>
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Enter CVC"
// // //                   className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
// // //                 />
// // //               </div>
// // //             </div>
// // //           )}

      
// // //           <div className="flex justify-between items-center mb-8 mt-4">
// // //             <div className="flex items-center gap-2">
// // //               <Image
// // //                 src="/icons/mark.png"
// // //                 alt=""
// // //                 width={4}
// // //                 height={4}
// // //                 className="w-4 h-4 rounded-full bg-[#3563E94D]"
// // //               />
// // //               <p
// // //                 className="text-base font-semibold text-[#1A202C]"
// // //                 onClick={() => handlePaymentMethodSelect("PayPal")}
// // //               >
// // //                 PayPal
// // //               </p>
// // //             </div>
// // //             <Image
// // //               src="/icons/PayPal.png"
// // //               alt="PayPal Icon"
// // //               width={100}
// // //               height={24}
// // //               className="ml-auto"
// // //             />
// // //           </div>

// // //           {selectedPayment === "PayPal" && (
// // //             <div className="mt-4">
// // //               <p className="text-sm font-semibold text-[#1A202C]">PayPal Email</p>
// // //               <input
// // //                 type="email"
// // //                 placeholder="Enter your PayPal email"
// // //                 className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
// // //               />
// // //             </div>
// // //           )}

// // //           <div className="flex justify-between items-center mb-8 mt-4">
// // //             <div className="flex items-center gap-2">
// // //               <Image
// // //                 src="/icons/mark.png"
// // //                 alt=""
// // //                 width={4}
// // //                 height={4}
// // //                 className="w-4 h-4 rounded-full bg-[#3563E94D]"
// // //               />
// // //               <p
// // //                 className="text-base font-semibold text-[#1A202C]"
// // //                 onClick={() => handlePaymentMethodSelect("Bitcoin")}
// // //               >
// // //                 Bitcoin
// // //               </p>
// // //             </div>
// // //             <Image
// // //               src="/icons/Bitcoin (1).png"
// // //               alt="Bitcoin Icon"
// // //               width={100}
// // //               height={24}
// // //               className="ml-auto"
// // //             />
// // //           </div>

// // //           {selectedPayment === "Bitcoin" && (
// // //             <div className="mt-4">
// // //               <p className="text-sm font-semibold text-[#1A202C]">Bitcoin Address</p>
// // //               <input
// // //                 type="text"
// // //                 placeholder="Enter your Bitcoin address"
// // //                 className="w-full h-14 mt-2 px-4 border rounded-lg text-sm font-medium text-[#90A3BF] bg-[#F6F7F9]"
// // //               />
// // //             </div>
// // //           )}
// // //         </div>
// // //         </div>
        
// // //         {/* Confirmation */}
// // //         <div className="max-w-3xl mx-auto lg:mx-0 bg-white rounded-lg shadow-md mt-6 mb-9 p-6 lg:ml-6">
// // //           <div className="flex justify-between items-start gap-4 mb-6">
// // //             <div className="w-3/4">
// // //               <p className="text-xl font-bold text-[#1A202C]">Confirmation</p>
// // //               <p className="text-sm font-medium text-[#90A3BF] mt-2">
// // //                 We are getting to the end. Just a few clicks and your rental is ready!
// // //               </p>
// // //             </div>
// // //             <p className="text-sm font-medium text-[#90A3BF]">Step 4 of 4</p>
// // //           </div>

// // //           <div className="flex flex-col gap-4 mb-6">
// // //             <div className="flex items-center h-14 bg-[#F6F7F9] rounded-lg p-4">
// // //               <input type="checkbox" className="w-6 h-6 mr-4" />
// // //               <p className="text-base font-semibold text-[#1F2544]">
// // //                 I agree with sending Marketing and newsletter emails. No spam, promised!
// // //               </p>
// // //             </div>

// // //             <div className="flex items-center h-14 bg-[#F6F7F9] rounded-lg p-4">
// // //               <input type="checkbox" className="w-6 h-6 mr-4" />
// // //               <p className="text-base font-semibold text-[#1F2544]">
// // //                 I agree with our terms and conditions and privacy policy.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <div className="flex items-center mb-6">
// // //             <button className="w-36 h-14 bg-[#3563E9] rounded-lg flex justify-center items-center gap-2 text-white">
// // //               <p className="text-base font-bold">Rent Now</p>
// // //             </button>
// // //           </div>

// // //           <div className="flex flex-col gap-2">
// // //             <div className="flex items-center">
// // //               <Image src="/icons/Layer.png" width={32} height={32} alt="Security Icon" />
// // //               <p className="text-base font-semibold text-[#1A202C] ml-2">All your data are safe</p>
// // //             </div>
// // //             <p className="text-sm font-medium text-[#90A3BF]">
// // //               We are using the most advanced security to provide you the best experience ever.
// // //             </p>
// // //           </div>
// // //         </div>
// // //         {/* <CarSummary /> */}
// // //         {/* <Footer /> */}
// // //       </div>
 
// // //   );
// // // }

 

// // "use client";

// // import { Elements } from "@stripe/react-stripe-js";
// // import { loadStripe } from "@stripe/stripe-js";
// // import CheckoutPage from "@/app/Component/CheakoutPayment";
// // import convertToSubcurrency from "@/lib/convertToSubcurrency";
// // import { useEffect, useState, use } from "react";
// // import Image from "next/image";
// // import { AiFillStar } from "react-icons/ai";
// // import { urlFor } from "@/sanity/lib/image";
// // import { client } from "@/sanity/lib/client";
// // import Link from "next/link";

// // interface PageProps {
// //   params: Promise<{ slug: string }>; 
// // }

// // if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
// //   throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
// // }

// // const stripePromise = loadStripe("pk_test_51QoMp3DORAhVYIgxBKnAqsjFy0V49D5sGwu0ShX4C26ZOuOHkqnbBBsvKGfHQMVH4CoQhx0MpgL7kWhv3VuQvs5l00zsmGxxlw");


// // const cleanPrice = (price: string) => {
// //   const cleanedPrice = price.replace(/[^\d.-]/g, "");
// //   return parseFloat(cleanedPrice);
// // };

// // const Payment = ({ params }: PageProps) => {
// //   const { slug } = use(params);

// //   const [car, setCar] = useState<any>(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchCar = async () => {
// //       try {
// //         const query = `*[_type == "car" && slug.current == $slug][0]`;
// //         const data = await client.fetch(query, { slug });
// //         setCar(data);
// //       } catch (error) {
// //         console.error("Error fetching car data:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchCar();
// //   }, [slug]);

// //   if (loading) return <p>Loading...</p>;
// //   if (!car) return <p>Car not found!</p>;

  
// //   const pricePerDay = cleanPrice(car?.pricePerDay || "0");

  
// //   const amount = convertToSubcurrency(pricePerDay);

// //   return (
// //     <div className="mt-32 w-full h-auto max-w-[1440px] flex flex-col-reverse lg:flex-row gap-5 space-y-8">
   
// //       <Elements
// //         stripe={stripePromise}
// //         options={{
// //           mode: "payment",
// //           amount: amount, 
// //           currency: "usd",
// //         }}
// //       >
// //         <CheckoutPage amount={pricePerDay} />
// //       </Elements>

    
// //       <div className="mx-10 max-w-[700px] lg:h-[560px] rounded-lg bg-white space-y-8 p-10 xl:mr-10">
// //         <div className="mb-4 lg:mb-6">
// //           <h2 className="text-[18px] sm:text-[20px] font-bold text-[#1A202C]">
// //             Rental Summary
// //           </h2>
// //           <p className="text-[12px] sm:text-[14px] text-[#90A3BF] font-medium">
// //             Prices may change depending on the length of the rental and the
// //             price of your rental car.
// //           </p>
// //         </div>
// //         <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
// //           <div className="w-[96px] h-[72px] bg-[#abb1c4] rounded-lg flex justify-center items-center">
// //             {car?.image ? (
// //               <Image
// //                 src={urlFor(car.image).url()}
// //                 alt={car?.name || "Car"}
// //                 width={116}
// //                 height={36}
// //                 className="rounded-md object-cover"
// //               />
// //             ) : (
// //               <p>No Image Available</p>
// //             )}
// //           </div>
// //           <div className="text-center sm:text-left">
// //             <h3 className="text-[20px] sm:text-[28px] font-bold text-[#1A202C]">
// //               {car?.name || "Unknown Car"}
// //             </h3>
// //             <div className="flex items-center justify-center sm:justify-start text-[#FFCC00] text-[14px] sm:text-[16px]">
// //               <AiFillStar />
// //               <AiFillStar />
// //               <AiFillStar />
// //               <AiFillStar />
// //               <span className="text-[#90A3BF] text-[12px] sm:text-[14px] ml-2">
// //                 440+ Reviews
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="mb-4 lg:mb-6">
// //           <div className="flex justify-between items-center mb-2">
// //             <span className="text-[14px] sm:text-[16px] font-medium text-[#90A3BF]">
// //               Subtotal
// //             </span>
// //             <span className="text-[14px] sm:text-[16px] font-semibold text-[#1A202C] mr-10">
// //               ${pricePerDay}
// //             </span>
// //           </div>
// //           <div className="flex justify-between items-center">
// //             <span className="text-[14px] sm:text-[16px] font-medium text-[#90A3BF]">
// //               Tax
// //             </span>
// //             <span className="text-[14px] sm:text-[16px] font-semibold text-[#1A202C] mr-10">
// //               $0
// //             </span>
// //           </div>
// //         </div>

 
// //         <div className="mb-4 lg:mb-6 flex flex-col sm:flex-row items-center gap-4 lg:gap-2">
// //           <input
// //             type="text"
// //             placeholder="Apply promo code"
// //             className="flex-grow h-[40px] sm:h-[48px] bg-[#F6F7F9] rounded-lg px-4 text-[12px] sm:text-[14px] placeholder-[#90A3BF] focus:outline-none"
// //           />
// //           <Link href="/Dashboard">
// //             <button className="w-full sm:w-[92px] h-[40px] sm:h-[48px] text-black text-[14px] sm:text-[16px] font-semibold rounded-lg">
// //               Apply now
// //             </button>
// //           </Link>
// //         </div>

       
// //         <div className="border-t border-[#EDEDED] pt-4">
// //           <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
// //             <span className="text-[16px] sm:text-[20px] font-bold text-[#1A202C]">
// //               Total Rental Price
// //             </span>
// //             <span className="text-[20px] sm:text-[24px] font-bold text-[#3563E9]">
// //               ${pricePerDay}
// //             </span>
// //           </div>
// //           <p className="text-[12px] sm:text-[14px] text-[#90A3BF] text-center sm:text-left">
// //             Overall price and includes rental discount
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Payment;






// "use client";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutPage from "@/app/Component/CheakoutPayment";
// import convertToSubcurrency from "@/lib/convertToSubcurrency";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { AiFillStar } from "react-icons/ai";
// import { urlFor } from "@/sanity/lib/image";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";

// interface PageProps {
//   params: { slug: string }; 
// }

// interface Car {
//   name: string;
//   pricePerDay: string;
//   image?: any;
// }

// if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
//   throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
// }

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// const cleanPrice = (price: string) => {
//   return parseFloat(price.replace(/[^\d.-]/g, ""));
// };

// const Payment = ({ params }: PageProps) => {
//   const { slug } = params;

//   const [car, setCar] = useState<Car | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCar = async () => {
//       try {
//         const query = `*[_type == "car" && slug.current == $slug][0]`;
//         const data = await client.fetch<Car>(query, { slug });
//         setCar(data);
//       } catch (error) {
//         console.error("Error fetching car data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCar();
//   }, [slug]);

//   if (loading) return <p>Loading...</p>;
//   if (!car) return <p>Car not found!</p>;

//   const pricePerDay = cleanPrice(car.pricePerDay || "0");
//   const amount = convertToSubcurrency(pricePerDay);

//   return (
//     <div className="mt-32 w-full h-auto max-w-[1440px] flex flex-col-reverse lg:flex-row gap-5 space-y-8">
//       <Elements
//         stripe={stripePromise}
//         options={{
//           mode: "payment",
//           amount: amount, 
//           currency: "usd",
//         }}
//       >
//         <CheckoutPage amount={pricePerDay} />
//       </Elements>

//       <div className="mx-10 max-w-[700px] lg:h-[560px] rounded-lg bg-white space-y-8 p-10 xl:mr-10">
//         <div className="mb-4 lg:mb-6">
//           <h2 className="text-[18px] sm:text-[20px] font-bold text-[#1A202C]">
//             Rental Summary
//           </h2>
//           <p className="text-[12px] sm:text-[14px] text-[#90A3BF] font-medium">
//             Prices may change depending on the length of the rental and the price of your rental car.
//           </p>
//         </div>
//         <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
//           <div className="w-[96px] h-[72px] bg-[#abb1c4] rounded-lg flex justify-center items-center">
//             {car.image ? (
//               <Image
//                 src={urlFor(car.image).url()}
//                 alt={car.name || "Car"}
//                 width={116}
//                 height={36}
//                 className="rounded-md object-cover"
//               />
//             ) : (
//               <p>No Image Available</p>
//             )}
//           </div>
//           <div className="text-center sm:text-left">
//             <h3 className="text-[20px] sm:text-[28px] font-bold text-[#1A202C]">
//               {car.name || "Unknown Car"}
//             </h3>
//             <div className="flex items-center justify-center sm:justify-start text-[#FFCC00] text-[14px] sm:text-[16px]">
//               <AiFillStar />
//               <AiFillStar />
//               <AiFillStar />
//               <AiFillStar />
//               <span className="text-[#90A3BF] text-[12px] sm:text-[14px] ml-2">
//                 440+ Reviews
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="mb-4 lg:mb-6">
//           <div className="flex justify-between items-center mb-2">
//             <span className="text-[14px] sm:text-[16px] font-medium text-[#90A3BF]">
//               Subtotal
//             </span>
//             <span className="text-[14px] sm:text-[16px] font-semibold text-[#1A202C] mr-10">
//               ${pricePerDay}
//             </span>
//           </div>
//         </div>

//         <div className="mb-4 lg:mb-6 flex flex-col sm:flex-row items-center gap-4 lg:gap-2">
//           <input
//             type="text"
//             placeholder="Apply promo code"
//             className="flex-grow h-[40px] sm:h-[48px] bg-[#F6F7F9] rounded-lg px-4 text-[12px] sm:text-[14px] placeholder-[#90A3BF] focus:outline-none"
//           />
//           <Link href="/Dashboard">
//             <button className="w-full sm:w-[92px] h-[40px] sm:h-[48px] text-black text-[14px] sm:text-[16px] font-semibold rounded-lg">
//               Apply now
//             </button>
//           </Link>
//         </div>

//         <div className="border-t border-[#EDEDED] pt-4">
//           <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
//             <span className="text-[16px] sm:text-[20px] font-bold text-[#1A202C]">
//               Total Rental Price
//             </span>
//             <span className="text-[20px] sm:text-[24px] font-bold text-[#3563E9]">
//               ${pricePerDay}
//             </span>
//           </div>
//           <p className="text-[12px] sm:text-[14px] text-[#90A3BF] text-center sm:text-left">
//             Overall price and includes rental discount
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;



// "use client";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutPage from "@/app/Component/CheakoutPayment";
// import convertToSubcurrency from "@/lib/convertToSubcurrency";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { AiFillStar } from "react-icons/ai";
// import { urlFor } from "@/sanity/lib/image";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";

// interface PageProps {
//   params: { slug: string };
// }

// interface Car {
//   name: string;
//   pricePerDay: string;
//   image?: { url: string }; // Specify the structure for the image object
// }

// if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
//   throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
// }

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// const cleanPrice = (price: string) => {
//   return parseFloat(price.replace(/[^\d.-]/g, ""));
// };

// const Payment = ({ params }: PageProps) => {
//   const { slug } = params;

//   const [car, setCar] = useState<Car | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCar = async () => {
//       try {
//         const query = `*[_type == "car" && slug.current == $slug][0]`;
//         const data = await client.fetch<Car>(query, { slug });
//         setCar(data);
//       } catch (error) {
//         console.error("Error fetching car data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCar();
//   }, [slug]);

//   if (loading) return <p>Loading...</p>;
//   if (!car) return <p>Car not found!</p>;

//   const pricePerDay = cleanPrice(car.pricePerDay || "0");
//   const amount = convertToSubcurrency(pricePerDay);

//   return (
//     <div className="mt-32 w-full h-auto max-w-[1440px] flex flex-col-reverse lg:flex-row gap-5 space-y-8">
//       <Elements
//         stripe={stripePromise}
//         options={{
//           mode: "payment",
//           amount: amount,
//           currency: "usd",
//         }}
//       >
//         <CheckoutPage amount={pricePerDay} />
//       </Elements>

//       <div className="mx-10 max-w-[700px] lg:h-[560px] rounded-lg bg-white space-y-8 p-10 xl:mr-10">
//         <div className="mb-4 lg:mb-6">
//           <h2 className="text-[18px] sm:text-[20px] font-bold text-[#1A202C]">
//             Rental Summary
//           </h2>
//           <p className="text-[12px] sm:text-[14px] text-[#90A3BF] font-medium">
//             Prices may change depending on the length of the rental and the price of your rental car.
//           </p>
//         </div>
//         <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
//           <div className="w-[96px] h-[72px] bg-[#abb1c4] rounded-lg flex justify-center items-center">
//             {car.image ? (
//               <Image
//                 src={urlFor(car.image.url).url()} // Assuming the image object has a 'url' property
//                 alt={car.name || "Car"}
//                 width={116}
//                 height={36}
//                 className="rounded-md object-cover"
//               />
//             ) : (
//               <p>No Image Available</p>
//             )}
//           </div>
//           <div className="text-center sm:text-left">
//             <h3 className="text-[20px] sm:text-[28px] font-bold text-[#1A202C]">
//               {car.name || "Unknown Car"}
//             </h3>
//             <div className="flex items-center justify-center sm:justify-start text-[#FFCC00] text-[14px] sm:text-[16px]">
//               <AiFillStar />
//               <AiFillStar />
//               <AiFillStar />
//               <AiFillStar />
//               <span className="text-[#90A3BF] text-[12px] sm:text-[14px] ml-2">
//                 440+ Reviews
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="mb-4 lg:mb-6">
//           <div className="flex justify-between items-center mb-2">
//             <span className="text-[14px] sm:text-[16px] font-medium text-[#90A3BF]">
//               Subtotal
//             </span>
//             <span className="text-[14px] sm:text-[16px] font-semibold text-[#1A202C] mr-10">
//               ${pricePerDay}
//             </span>
//           </div>
//         </div>

//         <div className="mb-4 lg:mb-6 flex flex-col sm:flex-row items-center gap-4 lg:gap-2">
//           <input
//             type="text"
//             placeholder="Apply promo code"
//             className="flex-grow h-[40px] sm:h-[48px] bg-[#F6F7F9] rounded-lg px-4 text-[12px] sm:text-[14px] placeholder-[#90A3BF] focus:outline-none"
//           />
//           <Link href="/Dashboard">
//             <button className="w-full sm:w-[92px] h-[40px] sm:h-[48px] text-black text-[14px] sm:text-[16px] font-semibold rounded-lg">
//               Apply now
//             </button>
//           </Link>
//         </div>

//         <div className="border-t border-[#EDEDED] pt-4">
//           <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
//             <span className="text-[16px] sm:text-[20px] font-bold text-[#1A202C]">
//               Total Rental Price
//             </span>
//             <span className="text-[20px] sm:text-[24px] font-bold text-[#3563E9]">
//               ${pricePerDay}
//             </span>
//           </div>
//           <p className="text-[12px] sm:text-[14px] text-[#90A3BF] text-center sm:text-left">
//             Overall price and includes rental discount
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;




// File: src/app/Form/[slug]/page.tsx

// Removed unused 'Metadata' import to avoid ESLint warnings

"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "@/app/Component/CheakoutPayment";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface PageProps {
  params: { slug: string };
}

interface Car {
  name: string;
  pricePerDay: string;
  image?: { url: string };
}

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const cleanPrice = (price: string) => {
  return parseFloat(price.replace(/[^\d.-]/g, ""));
};

const Payment = ({ params }: PageProps) => {
  const { slug } = params;

  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const query = `*[_type == "car" && slug.current == $slug][0]`;
        const data = await client.fetch<Car>(query, { slug });
        setCar(data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!car) return <p>Car not found!</p>;

  const pricePerDay = cleanPrice(car.pricePerDay || "0");
  const amount = convertToSubcurrency(pricePerDay);

  return (
    <div className="mt-32 w-full h-auto max-w-[1440px] flex flex-col-reverse lg:flex-row gap-5 space-y-8">
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: amount,
          currency: "usd",
        }}
      >
        <CheckoutPage amount={pricePerDay} />
      </Elements>

      <div className="mx-10 max-w-[700px] lg:h-[560px] rounded-lg bg-white space-y-8 p-10 xl:mr-10">
        <div className="mb-4 lg:mb-6">
          <h2 className="text-[18px] sm:text-[20px] font-bold text-[#1A202C]">
            Rental Summary
          </h2>
          <p className="text-[12px] sm:text-[14px] text-[#90A3BF] font-medium">
            Prices may change depending on the length of the rental and the price of your rental car.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <div className="w-[96px] h-[72px] bg-[#abb1c4] rounded-lg flex justify-center items-center">
            {car.image ? (
              <Image
                src={urlFor(car.image.url).url()}
                alt={car.name || "Car"}
                width={116}
                height={36}
                className="rounded-md object-cover"
              />
            ) : (
              <p>No Image Available</p>
            )}
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-[20px] sm:text-[28px] font-bold text-[#1A202C]">
              {car.name || "Unknown Car"}
            </h3>
            <div className="flex items-center justify-center sm:justify-start text-[#FFCC00] text-[14px] sm:text-[16px]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="text-[#90A3BF] text-[12px] sm:text-[14px] ml-2">
                440+ Reviews
              </span>
            </div>
          </div>
        </div>
        <div className="mb-4 lg:mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[14px] sm:text-[16px] font-medium text-[#90A3BF]">
              Subtotal
            </span>
            <span className="text-[14px] sm:text-[16px] font-semibold text-[#1A202C] mr-10">
              ${pricePerDay}
            </span>
          </div>
        </div>

        <div className="mb-4 lg:mb-6 flex flex-col sm:flex-row items-center gap-4 lg:gap-2">
          <input
            type="text"
            placeholder="Apply promo code"
            className="flex-grow h-[40px] sm:h-[48px] bg-[#F6F7F9] rounded-lg px-4 text-[12px] sm:text-[14px] placeholder-[#90A3BF] focus:outline-none"
          />
          <Link href="/Dashboard">
            <button className="w-full sm:w-[92px] h-[40px] sm:h-[48px] text-black text-[14px] sm:text-[16px] font-semibold rounded-lg">
              Apply now
            </button>
          </Link>
        </div>

        <div className="border-t border-[#EDEDED] pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
            <span className="text-[16px] sm:text-[20px] font-bold text-[#1A202C]">
              Total Rental Price
            </span>
            <span className="text-[20px] sm:text-[24px] font-bold text-[#3563E9]">
              ${pricePerDay}
            </span>
          </div>
          <p className="text-[12px] sm:text-[14px] text-[#90A3BF] text-center sm:text-left">
            Overall price and includes rental discount
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
