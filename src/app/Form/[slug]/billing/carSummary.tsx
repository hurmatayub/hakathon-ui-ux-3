"use client"
import { useState } from "react";
import Image from "next/image";

const CarSummary = () => {
 
  const [rentalDays, setRentalDays] = useState(1);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const dailyRate = 80;


  const subtotal = rentalDays * dailyRate;
  const total = subtotal - discount;


  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setDiscount(10); // Apply a $10 discount
    } else {
      alert("Invalid promo code");
    }
  };

  return (
    <div className="max-w-md mx-auto sm:max-w-lg lg:max-w-xl bg-white rounded-lg shadow-md p-6 relative lg:absolute lg:top-[140px] lg:right-16">
      <div className="space-y-4">
        <p className="text-xl font-bold text-[#1A202C]">Rental Summary</p>
        <p className="text-sm font-medium text-[#90A3BF]">
          Prices may change depending on the length of the rental and the price of your rental car.
        </p>
      </div>

      <div className="flex items-start mt-6">
        <div className="relative w-32 h-28 ml-4 rounded-lg overflow-hidden">
          <Image
            src="/images/Look.png"
            alt="Car"
            width={188}
            height={120}
            className="object-cover"
          />
        </div>

        <div className="flex-1 ml-4">
          <p className="text-2xl mt-2 font-bold text-[#1A202C]">Nissan GT - R</p>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/Review Star.png"
              alt="Star"
              width={24}
              height={24}
            />
            <p className="text-sm font-medium text-[#596780]">440+ Reviews</p>
          </div>
        </div>
      </div>

      <div className="border border-[#C3D4E966] opacity-50 my-4"></div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-[#90A3BF]">Subtotal</p>
          <p className="text-sm font-semibold text-[#1A202C]">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-medium text-[#90A3BF]">Tax</p>
          <p className="text-sm font-semibold text-[#1A202C]">$0.00</p>
        </div>
      </div>

      <div className="w-full h-14 rounded-lg bg-[#F6F7F9] mt-4 flex justify-between items-center px-4">
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Apply promo code"
          className="bg-transparent border-none outline-none text-sm text-[#90A3BF]"
        />
        <button
          onClick={applyPromoCode}
          className="text-sm font-semibold text-[#1A202C]"
        >
          Apply now
        </button>
      </div>

      <div className="flex flex-col mt-4">
        <label className="text-sm font-medium text-[#90A3BF] mb-2">
          Rental Duration (Days):
        </label>
        <input
          type="number"
          min="1"
          value={rentalDays}
          onChange={(e) => setRentalDays(parseInt(e.target.value, 10))}
          className="w-full border border-[#C3D4E966] rounded-lg px-4 py-2 text-sm text-[#1A202C] focus:outline-none"
        />
      </div>

      <div className="flex justify-between mt-6">
        <div>
          <p className="text-xl font-bold text-[#1A202C]">Total Rental Price</p>
          <p className="text-sm font-medium text-[#90A3BF]">
            Overall price and includes rental discount
          </p>
        </div>
        <p className="text-2xl font-bold text-[#1A202C]">${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

CarSummary.displayName = "CarSummary";

export default CarSummary;
