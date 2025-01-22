import React from 'react';
import Image from 'next/image';

function Hero2() {
  return (
    <div className="w-full h-auto bg-black flex justify-center items-center gap-12 sm:gap-6 px-4 sm:px-10 py-4">
      <Image
        src="/images/Group-01.png"
        alt="Group-01"
        width={166.48}
        height={33.16}
        className="w-auto h-auto sm:w-[120px] sm:h-[24px]"
      />
      <Image
        src="/images/Group-02.png"
        alt="Group-02"
        width={91}
        height={38}
        className="w-auto h-auto sm:w-[60px] sm:h-[25px]"
      />
      <Image
        src="/images/Group-03.png"
        alt="Group-03"
        width={156}
        height={36}
        className="w-auto h-auto sm:w-[110px] sm:h-[25px]"
      />
      <Image
        src="/images/Group-04.png"
        alt="Group-04"
        width={194}
        height={32}
        className="w-auto h-auto sm:w-[130px] sm:h-[22px]"
      />
      <Image
        src="/images/Group-05.png"
        alt="Group-05"
        width={206.79}
        height={33.35}
        className="w-auto h-auto sm:w-[140px] sm:h-[24px]"
      />
    </div>
  );
}

export default Hero2;
