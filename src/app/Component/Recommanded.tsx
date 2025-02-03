import Image from "next/image";
import { client } from "../lib/sanity";
import simplifiedProduct from "./interface";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'recommand'] [0...8] | order(_createdAt asc) {
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

export default async function Recommanded() {
  const data: simplifiedProduct[] = await getData();
  return (
    <div className="relative flex flex-col bg-[#F6F7F9] w-full h-auto gap-8 overflow-hidden lg:top-[-377px] top-[-690px] ">
      <div className="flex justify-between items-center px-6 mt-8">
      <h2 className="text-[16px] font-semibold text-[#90A3BF] lg:ml-72 ">
          Recommendation Cars
        </h2>
      </div>
  
      
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8">
          {data.map((product) => (
            <div
              key={product._id}
              className="w-[304px] h-[388px] bg-white rounded-lg shadow-sm p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="w-[160px] h-[24px] font-['Plus Jakarta Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                    {product.name}
                  </h3>
                  <p className="w-[128px] h-[20px] font-['Plus Jakarta Sans'] text-[14px] font-bold leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF]">
                    {product.type}
                  </p>
                </div>
                <Image
                  src={product.likedImageUrl}
                  alt="Liked Icon"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </div>
  
              <div className="flex justify-center items-center mt-6">
                <Image
                  src={product.firstImageUrl}
                  alt={product.name}
                  className="object-contain"
                  width={232}
                  height={72}
                />
              </div>
  
              <div className="flex gap-4 mt-16 text-[#90A3BF] text-sm ">
                <div className="flex items-center gap-2">
                  <Image
                    src={product.feulImageUrl}
                    alt="Fuel"
                    width={24}
                    height={24}
                  />
                  <span>{product.feulCapacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={product.transmissionImageUrl}
                    alt="Transmission"
                    width={24}
                    height={24}
                  />
                  <span>{product.transmissionn}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={product.capacityImageUrl}
                    alt="Capacity"
                    width={24}
                    height={24}
                  />
                  <span>{product.peopleCapacity}</span>
                </div>
              </div>
  
              <div className="flex justify-between items-center mt-5">
                <div>
                  <p className="text-[20px] font-bold">
                    ${product.price}.00/{" "}
                    <span className="text-[14px] text-[#90A3BF]">day</span>
                  </p>
                  <p className="text-[14px] text-[#90A3BF] line-through">
                    ${product.originalPrice}.00
                  </p>
                </div>
                <button className="w-[116px] h-[44px] bg-[#3563E9] text-white font-semibold rounded-[10px]">
                  <Link href={`/product/${product.slug}`}>{product.buttonText}</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center px-6">
  <div className="flex-1 flex justify-center">
    <div className="w-[156px] h-[44px] px-[20px] bg-[#3563E9] rounded-[4px] flex items-center justify-center gap-[8px] lg:ml-80 mx-auto sm:mx-0">
      <Link href="/Catogory">
        <p className="font-['Plus Jakarta Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-white text-center">
          Show more car
        </p>
      </Link>
    </div>
  </div>
  <div className="text-[#90A3BF]">
    <p className="text-[16px] font-semibold text-[#3563E9] sm:mr-0 lg:mr-72">
      120 Car
    </p>
  </div>
</div>



    </div>
  );
}  

