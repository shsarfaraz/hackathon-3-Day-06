import React from 'react';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full flex items-center justify-center mt-5 overflow-x-hidden">
      <div className="w-full max-w-[1240px] flex items-center px-4 sm:px-6">
        
        <div className="sm:hidden flex flex-col items-center justify-between mr-4">
          <div className="h-1 w-6 bg-black mb-1"></div>
          <div className="h-1 w-6 bg-black mb-1"></div>
          <div className="h-1 w-6 bg-black"></div>
        </div>

        <h1 className="text-[32px] font-bold sm:text-[24px]">SHOP.CO</h1>

        <div className="flex-row gap-6 ml-6 px-4 items-center text-[16px] sm:text-[14px] sm:ml-4 hidden sm:flex whitespace-nowrap">
          <div className="flex items-center">
            <p>Shop</p>
            <Image
              src="/images/Vector.png"
              alt="List Arrow"
              width={16}
              height={16}
            />
          </div>
          <p className='text-red-700'><a href="../practice">On Sale</a></p>
          <p>New Arrivals</p>
          <p>Brands</p>
        </div>

        <div className="flex items-center ml-10 gap-4 sm:gap-6">

          <div
            className="items-center border rounded-lg shadow-sm bg-white hidden sm:flex"
            style={{ width: '577px', height: '48px' }}
          >
            <Search className="w-5 h-5 text-gray-500 mx-2" />
            <Input
              type="text"
              placeholder="Search for products..."
              className="border-none outline-none flex-grow text-gray-700 bg-transparent"
            />
          </div>

          <div className="sm:hidden">
            <Search className="w-6 h-6 text-gray-500" />
          </div>

          <div className="relative">
            <Image
              src="/images/Cart-01.png"
              alt="Cart Icon"
              width={24}
              height={24}
              className="w-[24px] h-[24px] sm:w-[24px] sm:h-[24px]"
            />
          </div>

          <div className="relative">
            <Image
              src="/images/Round.png"
              alt="Round Icon"
              width={24}
              height={24}
              className="w-[24px] h-[24px] sm:w-[24px] sm:h-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
