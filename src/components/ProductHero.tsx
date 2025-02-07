import React from 'react';
import Image from 'next/image';

const ProductHero = () => {
  return (
    <div>
      {/* Main Product Image */}
      <div className="flex justify-center items-center mt-5">
        <Image
          src="/images/Large T-Shirt.png"
          alt="T-Shirt"
          width={358}
          height={290}
        />
      </div>

      {/* Small Product Images */}
      <div className="flex justify-center items-center mt-3 gap-3">
        <Image
          src="/images/T-Shirt-01.png"
          alt="T-Shirt-01"
          width={111}
          height={106}
        />
        <Image
          src="/images/T-Shirt-02.png"
          alt="T-Shirt-02"
          width={112}
          height={106}
        />
        <Image
          src="/images/T-Shirt-03.png"
          alt="T-Shirt-03"
          width={112}
          height={106}
        />
      </div>

      {/* Product Title and Star Rating */}
      <h1 className="ml-5 mt-3 text-[24px] font-bold font-integral">
        One Life Graphic T-shirt
      </h1>
      <Image
        src="/images/Star Image-01.png"
        alt="Stars"
        width={154}
        height={19}
        className="mt-2 ml-5"
      />
      <Image
        src="/images/Price.png"
        alt="Price"
        width={205}
        height={32}
        className="mt-2 ml-5"
      />

      {/* Product Description */}
      <p className="ml-5 mt-2 text-[14px]">
        This graphic t-shirt which is perfect for any occasion.
        Crafted from a soft and breathable fabric, it offers superior comfort and style.
      </p>

      {/* Colors, Size, Quantity, and Cart */}
      <div className="flex gap-4">
        <Image
          src="/images/Colors.png"
          alt="Colors"
          width={142}
          height={65.14}
          className="mt-5 ml-5 mb-2"
        />
        <Image
          src="/images/Size.png"
          alt="Size"
          width={353}
          height={65}
          className="mt-5 ml-5 mb-2"
        />
        <Image
          src="/images/Quantity.png"
          alt="Quantity"
          width={110}
          height={44}
          className="mt-5 ml-5 mb-2"
        />
        <Image
          src="/images/Cart-02.png"
          alt="Plus"
          width={236}
          height={44}
          className="mt-5 ml-5 mb-2"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 ml-5 mt-3">
        <h1 className="text-[#00000099] text-[16px]">Product Details</h1>
        <h1 className="text-[16px]">Rating & Reviews</h1>
        <h1 className="text-[16px]">FAQs</h1>
      </div>

      {/* Reviews Section */}
      <div className="flex ml-5 mt-3">
        <h1 className="text-[20px] font-bold">All Reviews</h1>
        <p className="ml-2 mt-4 text-[16px]">(451)</p>
        <Image
          src="/images/Review.png"
          alt="Review"
          width={40}
          height={40}
          className="mt-3 ml-7"
        />
        <button className="ml-6 mt-4 text-[12px] bg-black text-white rounded-full px-4 py-2 font-medium">
          Write a Review
        </button>
      </div>

      {/* Review Cards */}
      <div className="mt-3">
        {/* Review 1 */}
        <div className="w-[358px] h-[224.19px] ml-5 mt-3 border-2 rounded-2xl">
          <Image
            src="/images/Stars-4.5.png"
            alt="Review"
            width={107.94}
            height={19.19}
            className="object-contain mt-5 ml-5"
          />
          <Image
            src="/images/Samantha.png"
            alt="Profile"
            width={118}
            height={19}
            className="object-contain mt-2 ml-5"
          />
          <p className="mx-5 mt-2 text-[14px] text-[#00000099]">
            "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. It's become my favorite go-to shirt."
          </p>
          <p className="mx-5 mt-4 text-[14px] font-medium text-[#00000099]">
            Posted on August 14, 2023
          </p>
        </div>

        {/* Review 2 */}
        <div className="w-[358px] h-[244.19px] ml-5 mt-3 border-2 rounded-2xl">
          <Image
            src="/images/Stars-4.png"
            alt="Review"
            width={107.94}
            height={19.19}
            className="object-contain mt-5 ml-5"
          />
          <Image
            src="/images/Alex.png"
            alt="Alex Profile"
            width={78}
            height={19}
            className="object-contain mt-2 ml-5"
          />
          <p className="mx-5 mt-2 text-[14px] text-[#00000099]">
            "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch."
          </p>
          <p className="mx-5 mt-3 text-[14px] font-medium text-[#00000099]">
            Posted on August 15, 2023
          </p>
        </div>

        {/* Review 3 */}
        <div className="w-[358px] h-[244.19px] ml-5 mt-3 border-2 rounded-2xl">
          <Image
            src="/images/Stars-3.5.png"
            alt="Review"
            width={107.94}
            height={19.19}
            className="object-contain mt-5 ml-5"
          />
          <Image
            src="/images/Ethan.png"
            alt="Ethan Profile"
            width={86}
            height={19}
            className="object-contain mt-2 ml-5"
          />
          <p className="mx-5 mt-2 text-[14px] text-[#00000099]">
            "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye."
          </p>
          <p className="mx-5 mt-3 text-[14px] font-medium text-[#00000099]">
            Posted on August 16, 2023
          </p>
        </div>
      </div>

      {/* Load More Reviews Button */}
      <div className="flex justify-center items-center h-full mt-3">
        <button className="text-[12px] bg-white text-black rounded-full px-4 py-2 font-medium border-2 border-gray">
          Load More Reviews
        </button>
      </div>

      {/* Product Suggestion Section */}
      <div className="mt-8">
        <h1 className="text-[32px] font-bold flex justify-center items-center flex-col">
          <span>YOU MIGHT</span>
          <span>ALSO LIKE</span>
        </h1>
      </div>

      <div className="ml-5 mt-12 flex gap-4">
        {/* Suggested Product 1 */}
        <div>
          <Image
            src="/images/Polo-Shirt.png"
            alt="Polo-Shirt"
            width={200.01}
            height={198}
          />
          <p className="text-[15px] font-bold mt-2">Polo with Contrast Trims</p>
          <Image
            src="/images/Star Image-01.png"
            alt="Graphic-Shirt"
            width={117.2}
            height={16}
          />
        </div>

        {/* Suggested Product 2 */}
        <div>
          <Image
            src="/images/Gradient-Shirt.png"
            alt="Gradient-Shirt"
            width={150.01}
            height={158}
          />
          <p className="text-[15px] font-bold mt-1 truncate overflow-hidden text-ellipsis whitespace-nowrap">
            Gradient Graphic T-shirt
          </p>
          <Image
            src="/images/Star Image-02.png"
            alt="Graphic-Shirt"
            width={106.09}
            height={16}
          />
          <p className="text-[20px] font-bold mt-0">$145</p>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="w-[358px] h-[293px] ml-5 mt-5 border-2 rounded-2xl bg-black flex flex-col justify-center items-center">
        <p className="mx-5 text-[24px] text-[#FFFFFF] font-bold text-center">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </p>
        <div className="mt-5 flex flex-col items-center w-full px-5">
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-12 pr-3 py-3 text-black text-[14px] rounded-full mb-3 focus:outline-none"
            />
            <span className="absolute inset-y-0 left-4 flex items-center mb-3">
              <Image
                src="/images/Email-Icon.png"
                alt="Email Icon"
                width={20}
                height={20}
              />
            </span>
          </div>
          <button className="w-full py-3 bg-white text-black text-[14px] font-medium rounded-full hover:bg-gray-200">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="ml-5 mt-5 bg-[#F0F0F0]">
        <Image
          src="/images/SHOP.png"
          alt="SHOP.CO"
          width={144}
          height={20}
        />
        <p className="text-[14px] mt-3 w-full md:w-[268px]">
          We have clothes that suit your style and which you’re proud to wear. From women to men.
        </p>
      </div>
    </div>
  );
};

export default ProductHero;
