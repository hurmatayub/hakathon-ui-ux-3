"use client";
import { useState } from "react";
import Image from "next/image";

export default function Booking() {
  const [pickUp, setPickUp] = useState({
    location: "",
    date: "",
    time: "",
  });

  const [dropOff, setDropOff] = useState({
    location: "",
    date: "",
    time: "",
  });

  const handleInputChange = (field: string, value: string, type: string) => {
    if (type === "pickup") {
      setPickUp((prev) => ({ ...prev, [field]: value }));
    } else {
      setDropOff((prev) => ({ ...prev, [field]: value }));
    }
  };

  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-center lg:gap-6 gap-11 bg-[#F6F7F9] lg:top-[-436px] top-[-710px]">
      <div className="flex flex-col sm:flex-row items-center justify-center lg:gap-4 gap-0">

        <div className="lg:w-[582px] w-[400px] lg:h-[136px] h-[130px] bg-white rounded-[10px] flex flex-col gap-4 p-6 lg:mb-12 mb-[-19px]">
          <div className="flex items-center gap-2">
            <div className="w-[16px] h-[16px]">
              <Image src="/icons/mark.png" width={16} height={16} alt="" />
            </div>
            <p className="text-[16px] font-semibold text-[#1A202C]">
              Pick-Up
            </p>
          </div>
          <div className="flex justify-between">
      
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-bold">Location</p>
              <select
                className="text-[12px] text-[#90A3BF] p-1 border rounded"
                value={pickUp.location}
                onChange={(e) =>
                  handleInputChange("location", e.target.value, "pickup")
                }
              >
                <option value="">Select your city</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
              </select>
            </div>
       
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-bold">Date</p>
              <input
                type="date"
                className="text-[12px] text-[#90A3BF] p-1 border rounded"
                value={pickUp.date}
                onChange={(e) =>
                  handleInputChange("date", e.target.value, "pickup")
                }
              />
            </div>
          
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-bold">Time</p>
              <input
                type="time"
                className="text-[12px] text-[#90A3BF] p-1 border rounded"
                value={pickUp.time}
                onChange={(e) =>
                  handleInputChange("time", e.target.value, "pickup")
                }
              />
            </div>
          </div>
        </div>

   
        <div className="sm:absolute sm:top-[calc(50%-45px)] sm:left-[calc(50%-45px)] sm:z-10 lg:static flex items-center justify-center text-white">
          <Image
            src="/icons/Switch.png"
            width={90}
            height={90}
            alt="refresh"
            className="w-[90px] h-[90px] cursor-pointer"
          />
        </div>

      
        <div className="lg:w-[582px] w-[400px] lg:h-[136px] h-[130px] bg-white rounded-[10px] flex flex-col gap-4 p-6 lg:mb-17 mb-4 mt-[-30px]">
          <div className="flex items-center gap-2">
            <div className="w-[16px] h-[16px] bg-gray-300 rounded-full">
              <Image src="/icons/mark.png" width={16} height={16} alt="" />
            </div>
            <p className="text-[16px] font-semibold text-[#1A202C]">
              Drop-Off
            </p>
          </div>
          <div className="flex justify-between">
            {/* Location */}
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-bold">Location</p>
              <select
                className="text-[12px] text-[#90A3BF] p-1 border rounded"
                value={dropOff.location}
                onChange={(e) =>
                  handleInputChange("location", e.target.value, "dropoff")
                }
              >
                <option value="">Select your city</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
              </select>
            </div>
     
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-bold">Date</p>
              <input
                type="date"
                className="text-[12px] text-[#90A3BF] p-1 border rounded"
                value={dropOff.date}
                onChange={(e) =>
                  handleInputChange("date", e.target.value, "dropoff")
                }
              />
            </div>
       
            <div className="flex flex-col gap-2">
              <p className="text-[16px] font-bold">Time</p>
              <input
                type="time"
                className="text-[12px] text-[#90A3BF] p-1 border rounded"
                value={dropOff.time}
                onChange={(e) =>
                  handleInputChange("time", e.target.value, "dropoff")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
