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

interface PaymentProps {
  slug: string;
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

export default function PaymentClient({ slug }: PaymentProps) {
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
            Prices may change depending on the length of the rental and the price
            of your rental car.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <div className="w-[96px] h-[72px] bg-[#abb1c4] rounded-lg flex justify-center items-center">
            {car.image ? (
              <Image
                src={urlFor(car.image.url).url()} // Assuming the image object has a 'url' property
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
}
