import Image from "next/image";
import React from "react";

const Topcars = () => {
  return (
    <div className="w-full max-w-[524px] h-auto sm:left-[50%] sm:translate-x-[-50%] bg-white rounded-[10px] p-4 lg:absolute lg:top-[32px] lg:right-0 lg:translate-x-0">
      <div className="flex justify-between items-center">
        <div className="w-[192px] h-[24px]">
          <p className="font-bold text-[20px] leading-[30px] text-[#1A202C]">
            Top 5 Car Rental
          </p>
        </div>

        <div className="w-[24px] h-[24px]">
          <Image
            src="/icons/more.png"
            alt="Icon"
            width={24}
            height={24}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="w-[220px] h-[220px] mx-auto mt-6 mb-8 relative">
        <Image
          src="/icons/Chart.png"
          alt="Chart"
          width={220}
          height={220}
          className="w-full h-full"
        />
        
     
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center space-y-4 sm:hidden">
          {[
            { name: "Sport Car", color: "#0D3559", number: "17,439" },
            { name: "SUV", color: "#175D9C", number: "9,478" },
            { name: "Coupe", color: "#2185DE", number: "18,197" },
            { name: "Hatchback", color: "#63A9E8", number: "12,510" },
            { name: "MPV", color: "#A6CEF2", number: "14,406" },
          ].map((car, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div
                  className="w-[12px] h-[12px] rounded-full"
                  style={{ backgroundColor: car.color }}
                ></div>
                <p className="font-semibold text-[14px] leading-[21px] text-[#90A3BF]">
                  {car.name}
                </p>
              </div>

              <p className="font-semibold text-[14px] leading-[21px] text-[#1A202C]">
                {car.number}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-4">
        <p className="font-bold text-[24px] leading-[36px] text-[#1A202C]">
          72,030
        </p>
        <p className="font-medium text-[14px] leading-[21px] text-[#90A3BF]">
          Rental Car
        </p>
      </div>
    </div>
  );
};

export default Topcars;
