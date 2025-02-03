"use client";
import Image from "next/image";
import { client } from "../lib/sanity";
import { useState, useEffect } from "react";
import simplifiedProduct from "./interface";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'product'] [0...4] | order(_createdAt desc) {
    _id,
    name,
    "likedImageUrl": liked.asset->url,
    type,
    price,
    originalPrice,
    feulCapacity,
    transmissionn,
    peopleCapacity,
    "feulImageUrl": feul.asset->url,
    "transmissionImageUrl": transmission.asset->url,
    "capacityImageUrl": capacity.asset->url,
    buttonText,
    "slug": slug.current,
    "categoryName": category->name,
    "firstImageUrl": images[0].asset->url
  }`;

  const data = await client.fetch(query);
  return data;
}

export default function Popular() {
  const [data, setData] = useState<simplifiedProduct[]>([]);
  const [likedCars, setLikedCars] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const fetchData = async () => {
      const products = await getData();
      setData(products);

  
      const storedLikedCars = JSON.parse(localStorage.getItem('likedCars') || '{}');
      setLikedCars(storedLikedCars);
    };

    fetchData();
  }, []);


  const toggleLike = (productId: string) => {
    const updatedLikedCars = { ...likedCars };

    
    if (updatedLikedCars[productId]) {
   
      delete updatedLikedCars[productId];
    } else {
      
      updatedLikedCars[productId] = true;
    }

    setLikedCars(updatedLikedCars);
   
    localStorage.setItem('likedCars', JSON.stringify(updatedLikedCars));
  };

  return (
    <div className="relative flex flex-col bg-[#F6F7F9] w-full h-auto gap-8 overflow-x-hidden lg:top-[-377px] top-[-690px]">
      <div className="flex justify-between items-center px-6">
        <h2 className="text-[16px] font-semibold text-[#90A3BF] lg:ml-72">Popular Cars</h2>
        <a href="#" className="text-[16px] font-semibold text-[#3563E9] lg:mr-72">View All</a>
      </div>

      <div className="flex overflow-x-auto gap-8 px-6 sm:justify-center sm:items-center">
        {data.map((product) => (
          <div key={product._id} className="flex-shrink-0 w-[304px] h-[388px] bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-[20px] font-bold text-[#1A202C]">{product.name}</h3>
                <p className="text-[14px] font-bold text-[#90A3BF]">{product.type}</p>
              </div>
              <button onClick={() => toggleLike(product._id)}>
                <Image
                  src={likedCars[product._id] ? "/icons/liked.png" : product.likedImageUrl}
                  alt="Like Icon"
                  className="w-6 h-6 mb-4"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <Image
              src={product.firstImageUrl}
              alt={product.name}
              className="mt-14 w-full object-contain"
              width={232}
              height={72}
            />

            <div className="flex gap-4 mt-16 text-[#90A3BF] text-sm">
              <div className="flex items-center gap-2">
                <Image src={product.feulImageUrl} alt="Fuel" width={24} height={24} />
                <span>{product.feulCapacity}</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={product.transmissionImageUrl} alt="Transmission" width={24} height={24} />
                <span>{product.transmissionn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={product.capacityImageUrl} alt="Capacity" width={24} height={24} />
                <span>{product.peopleCapacity}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mt-5">
              <div>
                <p className="text-[20px] font-bold">${product.price}.00/ <span className="text-[14px] text-[#90A3BF]">day</span></p>
                <p className="text-[14px] text-[#90A3BF] line-through">${product.originalPrice}.00</p>
              </div>
              <button className="w-[116px] h-[44px] bg-[#3563E9] text-white font-semibold rounded-[10px]">
                <Link href={`/product/${product.slug}`}>{product.buttonText}</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


