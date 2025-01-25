import Images from "@/app/Component/Images";
import { fullProduct } from "@/app/Component/interface";
import { client } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"] [0] {
  _id,
    name,
    "likedImageUrl": liked.asset->url,
    images,
    type,
    description,
    price,
    originalPrice,
    feulCapacity,
    transmissionn,
    peopleCapacity,
    buttonText,
    "slug": slug.current,
    "categoryName": category->name,
  
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function productPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="bg-[#F6F7F9]">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Images images={data.images} />

          <div className="bg-white p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
            <div className="w-full h-48 mb-4 relative">
              <Image
                src={data.likedImageUrl}
                alt="Car Image"
                height={24}
                width={24}
                className="w-6 h-6"
              />
            </div>
            <p className="text-sm text-[#90A3BF] mb-4">440+ Reviewer</p>
            <p className="text-[#596780] mb-4">{data.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-[#90A3BF] text-sm">Type Car</p>
                <p className="font-medium">{data.type}</p>
              </div>
              <div>
                <p className="text-[#90A3BF] text-sm">Transmission</p>
                <p className="font-medium">{data.transmissionn}</p>
              </div>
              <div>
                <p className="text-[#90A3BF] text-sm">Capacity</p>
                <p className="font-medium">{data.peopleCapacity} Person</p>
              </div>
              <div>
                <p className="text-[#90A3BF] text-sm">Fuel</p>
                <p className="font-medium">{data.feulCapacity}</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-[20px] font-bold">
                  ${data.price}.00/ <span className="text-sm text-[#90A3BF]">day</span>
                </p>
                <p className="text-sm text-[#90A3BF] line-through">
                  ${data.originalPrice}.00
                </p>
              </div>
              <button className="px-4 py-2 bg-[#3563E9] text-white font-semibold rounded-lg">
                <Link href="/Form">{data.buttonText}</Link>
              </button>
            </div>
          </div>
        </div>

     
        <div className="bg-white p-6 mt-10 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Reviews</h2>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <p className="text-sm font-medium">Alex Stanton</p>
              <p className="text-xs text-[#90A3BF]">CEO at Bukalapak - 23 July 2022</p>
              <p className="text-sm text-[#596780]">
                We are very happy with the service from the MCRNT App. MCRNT has
a wide range of variety of cars with good and comfortable
facilities. In addition, the service provided by the officers is also very friendly and very polite.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="text-sm font-medium">Skylar Dias</p>
              <p className="text-xs text-[#90A3BF]">CEO at Amazon - 23 July 2022</p>
              <p className="text-sm text-[#596780]">
                We are grateful for the service of the MCRNT Application. MCRNT
has low prices and a wide variety of cars with good and
comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




