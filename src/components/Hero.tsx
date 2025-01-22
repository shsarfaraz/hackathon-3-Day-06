import Image from 'next/image';

function Hero() {
  return (
    <div className="w-full h-auto bg-[#F2F0F1] mt-8 relative">
      <Image
        src="/images/Rectangle.png"
        alt="Rectangle"
        width={1440}
        height={663}
        className="w-full h-auto object-cover"
      />

      <Image
        src="/images/Star.png"
        alt="Top-right Star"
        width={104}
        height={104}
        className="absolute top-10 right-10 sm:top-20 sm:right-20 hidden sm:block"
      />

      <div className="absolute top-[-40px] left-0 w-full sm:w-1/2 h-full flex flex-col justify-center items-start text-black px-4 sm:px-10">
        <div className="text-[32px] sm:text-[64px] font-bold font-integral leading-[1.1]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </div>

        <div className="flex items-center mt-4 w-full sm:w-[550px] relative">
          <div className="text-[14px] sm:text-[16px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </div>
        </div>

        <div className="mt-4 sm:mt-8 flex items-center justify-center sm:justify-start w-full order-2 sm:order-1">
          <button className="bg-black text-white p-3 px-8 sm:px-16 rounded-full">Shop Now</button>
        </div>

        <Image
          src="/images/Star.png"
          alt="Star"
          width={56}
          height={56}
          className="absolute top-[calc(100%-80px)] left-[calc(100%-100px)] sm:top-[calc(100%-150px)] sm:left-[calc(100%-150px)] hidden sm:block"
        />
      </div>
    </div>
  );
}

export default Hero;
