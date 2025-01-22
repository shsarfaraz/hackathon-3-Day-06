import React from 'react'
import Image from 'next/image'

function Selling() {
  return (
    <div>
      <div>
        <h1 className="text-[32px] sm:text-[48px] font-bold text-center mt-28">TOP SELLING</h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-10 mx-auto max-w-[1400px] px-4">
        
        {/* First Image with Text */}
        <div className="flex flex-col items-start w-full sm:w-[295px]">
          <Image
            src="/images/Frame 05.png"
            alt="Frame-05"
            width={295}
            height={298}
          />
          <p className="text-[18px] sm:text-[20px] font-bold mt-4">Vertical Striped Shirt</p>
          <Image
            src="/images/Star Image-05.png"
            alt="Star-05"
            width={150}
            height={19}
            className="mt-4"
          />
          <Image
            src="/images/Dollar-05.png"
            alt="Dollar-05"
            width={200}
            height={32}
            className="mt-4"
          />
        </div>

        {/* Second Image with Text */}
        <div className="flex flex-col items-start w-full sm:w-[295px]">
          <Image
            src="/images/Frame 06.png"
            alt="Frame-06"
            width={295}
            height={298}
          />
          <p className="text-[18px] sm:text-[20px] font-bold mt-4">Courage Graphic T-shirt</p>
          <Image
            src="/images/Star Image-06.png"
            alt="Star-06"
            width={160.7}
            height={19}
            className="mt-4"
          />
          <Image
            src="/images/Dollar-06.png"
            alt="Dollar-06"
            width={54}
            height={32}
            className="mt-4"
          />
        </div>

        {/* Third Image with Text */}
        <div className="flex flex-col items-start w-full sm:w-[295px]">
          <Image
            src="/images/Frame 07.png"
            alt="Frame-07"
            width={295}
            height={298}
          />
          <p className="text-[18px] sm:text-[20px] font-bold mt-4">Loose Fit Bermuda Shorts</p>
          <Image
            src="/images/Star Image-07.png"
            alt="Star-07"
            width={113.09}
            height={19}
            className="mt-4"
          />
          <Image
            src="/images/Dollar-07.png"
            alt="Dollar-07"
            width={47}
            height={32}
            className="mt-4"
          />
        </div>

        {/* Fourth Image with Text */}
        <div className="flex flex-col items-start w-full sm:w-[295px]">
          <Image
            src="/images/Frame 08.png"
            alt="Frame-08"
            width={295}
            height={298}
          />
          <p className="text-[18px] sm:text-[20px] font-bold mt-4">Faded Skinny Jeans</p>
          <Image
            src="/images/Star Image-01.png"
            alt="Star-04"
            width={130}
            height={19}
            className="mt-4"
          />
          <Image
            src="/images/Dollar-08.png"
            alt="Dollar-08"
            width={55}
            height={32}
            className="mt-4"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button className="bg-white border-2 border-slate-400 text-black p-3 px-16 rounded-full">View All</button>
      </div>

      <Image
        src="/images/Browse.png"
        alt="Browse"
        width={1239}
        height={866}
        className="mt-20 flex justify-center items-center mx-auto"
      />
    </div>
  );
}

export default Selling;
