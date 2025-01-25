import Image from "next/image";
import React from "react";

const DashboardRental = () => {
  return (
    <div className="absolute w-[534px] h-[836px] top-[32px] left-[300px] rounded-[10px] bg-white">
      <div className="absolute w-[192px] h-[24px] top-[24px] left-[24px]">
        <p className="font-bold text-[20px] leading-[30px] text-[#1A202C]">
          Details Rental
        </p>
      </div>

      <div className="absolute w-[486px] h-[272px] top-[72px] left-[24px] rounded-[10px]">
        <Image 
          src="/images/Maps.png" 
          alt="Map" 
          width={486} 
          height={272}
        />
      </div>

      <div className="absolute w-[132px] h-[72px] top-[376px] left-[24px] rounded-tl-[8px]">
        <Image 
          src="/images/Look.png" 
          alt="Car" 
          width={132}
          height={72} 
        />
      </div>

      <div className="absolute top-[382px] left-[172px] gap-2">
        <div className="w-[160px] h-[32px]">
          <p className="font-bold text-[24px] leading-[36px] text-[#1A202C]">
            Nissan GT - R
          </p>
        </div>
        <div className="w-[104px] h-[20px]">
          <p className="font-medium text-[14px] leading-[21px] text-[#3D5278]">
            Sport Car
          </p>
        </div>
      </div>

      <div className="absolute w-[60px] h-[32px] top-[382px] left-[450px]">
        <p className="font-medium text-[14px] leading-[21px] text-right text-[#3D5278]">
          #9761
        </p>
      </div>

      <div className="absolute top-[500px] left-[24px] gap-2 flex items-center">
        <div className="w-[16px] h-[16px] p-1 rounded-full bg-[#3563E94D]">
          <Image 
            src="/icons/mark.png" 
            alt="Pick-Up Icon" 
            width={16}
            height={16} 
          />
        </div>
        <p className="font-semibold text-[16px] leading-[24px] text-[#1A202C]">
          Pick - Up
        </p>
      </div>

      <div className="absolute top-[540px] left-[24px] w-[486px] flex gap-6">
        <div className="flex flex-col items-start gap-2">
          <p className="font-bold text-[16px] text-[#1A202C]">Locations</p>
          <div className="flex items-center gap-1">
            <p className="font-medium text-[12px] text-[#90A3BF]">
              Kota Semarang
            </p>
            <Image 
              src="/icons/Arrow-Down.png" 
              alt="Arrow Down" 
              width={16}
              height={16} 
              className="w-4 h-4 ml-2" 
            />
          </div>
        </div>

        <div className="w-[48px] h-0 border-[1px] border-solid border-[#C3D4E966] mt-4 rotate-[270deg]"></div>

        <div className="flex flex-col items-start gap-2">
          <p className="font-bold text-[16px] text-[#1A202C]">Date</p>
          <div className="flex items-center gap-1">
            <p className="font-medium text-[12px ] text-[#90A3BF]">
              20 July 2022
            </p>
            <Image 
              src="/icons/Arrow-Down.png" 
              alt="Arrow Down" 
              width={16}
              height={16} 
              className="w-4 h-4 ml-2" 
            />
          </div>
        </div>

        <div className="w-[48px] h-0 border-[1px] border-solid border-[#C3D4E966] mt-4 rotate-[270deg]"></div>

        <div className="flex flex-col items-start gap-2">
          <p className="font-bold text-[16px] text-[#1A202C]">Time</p>
          <div className="flex items-center gap-1">
            <p className="font-medium text-[12px] text-[#90A3BF]">07:00</p>
            <Image 
              src="/icons/Arrow-Down.png" 
              alt="Arrow Down" 
              width={16}
              height={16} 
              className="w-4 h-4 ml-2" 
            />
          </div>
        </div>
      </div>

      <div className="absolute top-[600px] left-[24px] mt-5 gap-2 flex items-center">
        <div className="w-[16px] h-[16px] p-1 rounded-full bg-[#3563E94D]">
          <Image 
            src="/icons/mark.png" 
            alt="Drop-Off Icon" 
            width={16}
            height={16} 
          />
        </div>
        <p className="font-semibold text-[16px] leading-[24px] text-[#1A202C]">
          Drop - Off
        </p>
      </div>

      <div className="absolute top-[640px] left-[24px] mt-5 w-[486px] flex gap-6">
        <div className="flex flex-col items-start gap-2">
          <p className="font-bold text-[16px] text-[#1A202C]">Locations</p>
          <div className="flex items-center gap-1">
            <p className="font-medium text-[12px] text-[#90A3BF]">
              Kota Jakarta
            </p>
            <Image 
              src="/icons/Arrow-Down.png" 
              alt="Arrow Down" 
              width={16}
              height={16} 
              className="w-4 h-4 ml-2" 
            />
          </div>
        </div>

        <div className="w-[48px] h-0 border-[1px] border-solid border-[#C3D4E966] mt-4 ml-4 rotate-[270deg]"></div>

        <div className="flex flex-col items-start gap-2">
          <p className="font-bold text-[16px] text-[#1A202C]">Date</p>
          <div className="flex items-center gap-1">
            <p className="font-medium text-[12px] text-[#90A3BF]">
              21 July 2022
            </p>
            <Image 
              src="/icons/Arrow-Down.png" 
              alt="Arrow Down" 
              width={16}
              height={16} 
              className="w-4 h-4 ml-2" 
            />
          </div>
        </div>

        <div className="w-[48px] h-0 border-[1px] border-solid border-[#C3D4E966] mt-4 ml-2 rotate-[270deg]"></div>

        <div className="flex flex-col items-start gap-2">
          <p className="font-bold text-[16px] text-[#1A202C]">Time</p>
          <div className="flex items-center gap-1">
            <p className="font-medium text-[12px] text-[#90A3BF]">01.00</p>
            <Image 
              src="/icons/Arrow-Down.png" 
              alt="Arrow Down" 
              width={16}
              height={16} 
              className="w-4 h-4 ml-2" 
            />
          </div>
        </div>
      </div>

      <div className="absolute top-[728px] left-[24px] w-[486px] mt-4 border-b border-[#C3D4E966]"></div>

      <div className="absolute top-[764px] left-[24px] flex justify-between w-[486px]">
        <div>
          <p className="font-bold text-[20px] leading-[30px] text-[#1A202C]">
            Total Rental Price
          </p>
          <p className="font-medium text-[14px] leading-[21px] text-[#90A3BF]">
            Overall price and includes rental discount
          </p>
        </div>
        <div className="w-[128px] h-[48px]">
          <p className="font-bold text-[32px] leading-[40px] text-right text-[#1A202C]">
            $80.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardRental


