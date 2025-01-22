import React from 'react';
import Image from 'next/image';

function Hero3() {
  return (
    <div>
      <div>
        <h1 className="text-[48px] font-bold text-center mt-28 sm:text-[36px] sm:mt-16">NEW ARRIVALS</h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-10 mx-auto max-w-[1400px] px-4 sm:px-0">
        <div className="flex flex-col items-start max-w-[295px] sm:max-w-[220px]">
          <Image
            src="/images/Frame 01.png"
            alt="Frame-01"
            width={295}
            height={298}
            className="w-full h-auto"
          />
          <p className="text-[20px] font-bold mt-4 sm:text-[16px]">T-shirt with Tape Details</p>
          <Image
            src="/images/Star Image-01.png"
            alt="Star-01"
            width={150}
            height={19}
            className="mt-4"
          />
          <Image
            src="/images/Dollar-01.png"
            alt="Dollar-01"
            width={55}
            height={32}
            className="mt-4"
          />
        </div>

        <div className="flex flex-col items-start max-w-[295px] sm:max-w-[220px]">
          <Image
            src="/images/Frame 02.png"
            alt="Frame-02"
            width={295}
            height={298}
            className="w-full h-auto"
          />
          <p className="text-[20px] font-bold mt-4 sm:text-[16px]">Skinny Fit Jeans</p>
          <Image
            src="/images/Star Image-02.png"
            alt="Star-02"
            width={150}
            height={19}
            className="mt-4"
          />
          <Image
            src="/images/Dollar-02.png"
            alt="Dollar-02"
            width={200}
            height={32}
            className="mt-4"
          />
        </div>

        <div className="flex flex-col items-start max-w-[295px] sm:max-w-[220px]">
          <Image
            src="/images/Frame 03.png"
            alt="Frame-03"
            width={295}
            height={298}
            className="w-full h-auto"
          />
          <p className="text-[20px] font-bold mt-4 sm:text-[16px]">Checkered Shirt</p>
          <Image
            src="/images/Star Image-01.png"
            alt="Star-03"
            width={150}
            height={19}
            className="mt-4"
          />
          <Image
            src="/images/Dollar-03.png"
            alt="Dollar-03"
            width={56}
            height={32}
            className="mt-4"
          />
        </div>

        <div className="flex flex-col items-start max-w-[295px] sm:max-w-[220px]">
          <Image
            src="/images/Frame 04.png"
            alt="Frame-04"
            width={295}
            height={298}
            className="w-full h-auto"
          />
          <p className="text-[20px] font-bold mt-4 sm:text-[16px]">Slim Fit Trousers</p>
          <Image
            src="/images/Star Image-01.png"
            alt="Star-04"
            width={150}
            height={19}
            className="mt-4"
          />
          <Image
            src="/images/Dollar-04.png"
            alt="Dollar-04"
            width={200}
            height={32}
            className="mt-4"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button className="bg-white border-2 border-slate-400 text-black p-3 px-16 rounded-full sm:px-12 sm:py-2 sm:text-[14px]">
          View All
        </button>
      </div>
    </div>
  );
}

export default Hero3;
