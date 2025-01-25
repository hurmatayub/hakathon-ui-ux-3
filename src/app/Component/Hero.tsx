import Image from "next/image";
import { client, urlFor } from "../lib/sanity";

async function getData() {
  const query = "*[_type == 'heroimage'] [0]"

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData()
  return (
    <>
      <div className="w-full min-h-screen bg-[#F6F7F9] py-10 mt-40 lg:mt-0 flex justify-center gap-8">
        <div className="w-[327px] h-[232px] sm:w-[640px] sm:h-[360px] bg-[#54A6FF] rounded-[10px] flex flex-col p-6  mt-[-160px] lg:mt-0">
          <div className="w-[240px] h-[70px] sm:w-[284px] sm:h-[160px] sm:gap-4 gap-[12px] flex flex-col">
            <p className="w-[240px] h-[20px] sm:w-[284px] sm:h-[160px] text-[16px] font-semibold sm:text-[32px] text-[#FFFFFF] leading-[24px] sm:leading-[48px] tracking-[-0.02em] sm:tracking-[-0.03em] text-left">
              The Best Platform for Car Rental
            </p>
            <p className="w-[216px] h-[38px] text-[12px] font-medium sm:text-[16px] sm:font-medium text-[#FFFFFF] leading-[19.2px] sm:leading-[24px] tracking-[-0.02em] text-left">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
          </div>

          <div className="w-[120px] sm:w-[128px] h-[44px] sm:h-[44px] px-5 sm:px-5 py-5 bg-[#3563E9] rounded-[4px] sm:rounded-[4px] gap-2 flex justify-center items-center text-center mt-4 sm:mt-4">
            <p className="w-[72px] h-[16px] text-[12px] font-semibold text-[#FFFFFF] leading-[15.12px] tracking-[-0.02em] text-center sm:text-[12px] sm:font-semibold sm:leading-[15.12px] sm:tracking-[-0.02em]">
              Rental Car
            </p>
          </div>

          <div className=" w-[196px] h-[56px] sm:w-[406px] sm:h-[116px] top-[172px] left-[53px]">
            <Image
              src={urlFor(data.image1).url()}
              alt="Car Image"
              width={406}
              height={116}
              className="lg:ml-32"
            />
          </div>
        </div>

        <div className="w-[640px] h-[360px] bg-[#3563E9] rounded-[10px] lg:flex lg:flex-col p-6 hidden">
          <div className="w-[284px] h-[160px] flex flex-col gap-4 ">
            <p className="text-[32px] font-semibold text-[#FFFFFF] leading-[48px] tracking-[-0.03em]">
              Easy way to rent a car at a low price
            </p>
            <p className="text-[16px] font-medium text-[#FFFFFF] leading-[24px] tracking-[-0.02em]">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
          </div>

          <div className="w-[120px] h-[44px] px-3 py-5 bg-[#54A6FF] rounded-[4px] gap-2 flex justify-center items-center mt-4">
            <p className="text-[16px] font-semibold text-[#FFFFFF]">
              Rental Car
            </p>
          </div>

          <div className="w-[340px] h-[108]">
            <Image
              src={urlFor(data.image2).url()}
              alt="Car Image"
              width={340}
              height={108}
              className="ml-32 mt-175"
            />
          </div>
        </div>
      </div>
    </>
  );
}
