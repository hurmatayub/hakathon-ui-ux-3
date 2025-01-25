"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type LikedCar = {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string;
  tag: string[];
  imageUrl: string;
};

export default function Wishlist() {
  const [likedCars, setLikedCars] = useState<LikedCar[]>([]);

  useEffect(() => {
    
    const storedLikedCars = JSON.parse(localStorage.getItem("likedCars") || "{}");
    const likedCarsArray = Object.keys(storedLikedCars).map((id) => storedLikedCars[id]);
    setLikedCars(likedCarsArray);
  }, []);


  const removeCarFromWishlist = (_id: string) => {
    const updatedLikedCars = likedCars.filter((car) => car._id !== _id);
    setLikedCars(updatedLikedCars);

    const currentLikedCars = JSON.parse(localStorage.getItem("likedCars") || "{}");
    delete currentLikedCars[_id];
    localStorage.setItem("likedCars", JSON.stringify(currentLikedCars));

    alert(`Car with ID ${_id} removed from wishlist`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {likedCars.length === 0 ? (
        <p>No cars in your wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {likedCars.map((car) => (
            <div key={car._id} className="w-[304px] h-[388px] bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-['Plus Jakarta Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                    {car.name}
                  </h3>
                  <p className="font-['Plus Jakarta Sans'] text-[14px] font-bold leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF]">
                    {car.type}
                  </p>
                </div>
                <button
                  className="w-6 h-6 text-red-500"
                  onClick={() => removeCarFromWishlist(car._id)}
                >
                  Remove
                </button>
              </div>

              <div className="flex justify-center items-center my-4">
                <Image
                  src={car.imageUrl}
                  alt={car.name}
                  className="object-contain"
                  width={232}
                  height={72}
                />
              </div>

              <div className="flex justify-between text-[#90A3BF] text-sm mt-4">
                <div className="flex items-center gap-2">
                  <Image src="/icons/feul.png" alt="Fuel" width={24} height={24} />
                  <span>{car.fuelCapacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/icons/manual.png" alt="Transmission" width={24} height={24} />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/icons/people.png" alt="Capacity" width={24} height={24} />
                  <span>{car.seatingCapacity}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-5">
                <div>
                  <p className="text-[20px] font-bold text-[#1A202C]">{car.pricePerDay}</p>
                  <p className="text-[14px] text-[#90A3BF] line-through">{car.originalPrice}</p>
                </div>
                <button className="w-[116px] h-[44px] bg-[#3563E9] text-white font-semibold rounded-[10px]">
                  <Link href={`/product/${car._id}`}>Rent Now</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
