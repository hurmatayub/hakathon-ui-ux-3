import Image from 'next/image';
import React from 'react';

const Recantcars = () => {
  return (
    <div className="w-full max-w-[524px] h-auto top-[388px] mt-4 lg:absolute lg:right-4 lg:translate-x-0 p-[24px] rounded-[10px] bg-white">
      <div className="w-full h-[24px] flex justify-between items-center">
        <p className="font-bold text-[20px] leading-[30px] text-[#1A202C]">
          Recent Transaction
        </p>
        <p className="font-medium text-[12px] leading-[24px] text-right text-[#3563E9]">
          View All
        </p>
      </div>

      <div className="flex flex-col gap-[16px] mt-[56px]">
        {[
          { carImage: '/images/GTR.png', carName: 'Nissan GT - R', carType: 'Sport Car', date: '20 July', amount: '$80.00' },
          { carImage: '/images/Kgg.png', carName: 'Koegnigsegg', carType: 'Sport Car', date: '19 July', amount: '$99.00' },
          { carImage: '/images/RR.png', carName: 'Rolls - Royce', carType: 'Sport Car', date: '18 July', amount: '$96.00' },
          { carImage: '/images/CR.png', carName: 'CR - V', carType: 'Sport Car', date: '17 July', amount: '$80.00' }
        ].map((transaction, index) => (
          <div key={index} className="flex w-full items-center">
            <div className="w-[132px] h-[70px] p-[17px_9px] rounded-[8px]">
              <Image src={transaction.carImage} width={132} height={70} alt={transaction.carName} />
            </div>
            <div className="flex flex-col justify-center gap-[8px] ml-[16px]">
              <p className="font-bold text-[16px] leading-[24px] text-[#1A202C]">
                {transaction.carName}
              </p>
              <p className="font-medium text-[12px] leading-[15.12px] text-[#90A3BF]">
                {transaction.carType}
              </p>
            </div>
            <div className="ml-auto flex flex-col items-end gap-[8px]">
              <p className="font-medium text-[12px] leading-[15.12px] text-[#90A3BF]">
                {transaction.date}
              </p>
              <p className="font-bold text-[16px] leading-[24px] text-[#1A202C]">
                {transaction.amount}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[#C3D4E966] mt-4"></div>
    </div>
  );
};

export default Recantcars;
