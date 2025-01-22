import React from 'react';
import Image from 'next/image';

function Customers() {
  return (
    <div>
      
      <div className="flex items-center mt-28 px-5 md:px-10 lg:px-28">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold w-full">OUR HAPPY CUSTOMERS</h1>

        
        <div className="flex gap-7 ml-auto pr-5 sm:pr-10 md:pr-28">
          <button className="w-8 h-8 flex items-center justify-center border rounded-full">
            <Image
              src="/images/left arrow.png"
              alt="Left Arrow"
              width={24}
              height={24}
              className="w-full h-full object-contain"
            />
          </button>
          <button className="w-8 h-8 flex items-center justify-center border rounded-full">
            <Image
              src="/images/right arrow.png"
              alt="Right Arrow"
              width={24}
              height={24}
              className="w-full h-full object-contain"
            />
          </button>
        </div>
      </div>

     
      <div className="flex gap-10 justify-start mt-10 px-5 sm:px-10 md:px-28 flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <Image
            src="/images/C-01.png"
            alt="C-01"
            width={400}
            height={240}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <Image
            src="/images/C-02.png"
            alt="C-02"
            width={400}
            height={240}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <Image
            src="/images/C-03.png"
            alt="C-03"
            width={400}
            height={240}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Customers;
