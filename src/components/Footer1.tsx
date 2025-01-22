import React from 'react';
import Image from 'next/image';

function Footer1() {
  return (
    <div className="w-full bg-[#F0F0F0] flex flex-col md:flex-row md:flex-wrap">

      
      <div className="flex flex-wrap justify-between px-5 md:px-10 py-10">
        
       
        <div className="w-full md:w-[248px] h-auto mb-8 md:mb-0">
          <h1 className="text-[33.45px] font-bold mt-12 ml-24">SHOP.CO</h1>
          <p className="text-[14px] mt-3 ml-24 w-full md:w-[268px]">
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>
          <div className="flex items-center mt-12 ml-24">
            <Image 
              src="/images/Social.png" 
              alt="Social Links" 
              width={148} 
              height={28} 
            />
          </div>
        </div>

        
        <div className="w-full md:w-[248px] h-auto mb-8 md:mb-0">
          <h1 className="text-[16px] font-medium mt-12 ml-48">COMPANY</h1>
          <div className="flex flex-col ml-48 mt-2 space-y-2">
            <p className="text-[16px] whitespace-nowrap">About</p>
            <p className="text-[16px] whitespace-nowrap">Features</p>
            <p className="text-[16px] whitespace-nowrap">Works</p>
            <p className="text-[16px] whitespace-nowrap">Career</p>
          </div>
        </div>

        
        <div className="w-full md:w-[248px] h-auto mb-8 md:mb-0">
          <h1 className="text-[16px] font-medium mt-12 ml-48">HELP</h1>
          <div className="flex flex-col ml-48 mt-2 space-y-2">
            <p className="text-[16px] whitespace-nowrap">Customer Support</p>
            <p className="text-[16px] whitespace-nowrap">Delivery Details</p>
            <p className="text-[16px] whitespace-nowrap">Terms & Conditions</p>
            <p className="text-[16px] whitespace-nowrap">Privacy Policy</p>
          </div>
        </div>

        
        <div className="w-full md:w-[248px] h-auto mb-8 md:mb-0">
          <h1 className="text-[16px] font-medium mt-12 ml-48">FAQ</h1>
          <div className="flex flex-col ml-48 mt-2 space-y-2">
            <p className="text-[16px] whitespace-nowrap">Account</p>
            <p className="text-[16px] whitespace-nowrap">Manage Deliveries</p>
            <p className="text-[16px] whitespace-nowrap">Orders</p>
            <p className="text-[16px] whitespace-nowrap">Payments</p>
          </div>
        </div>

        
        <div className="w-full md:w-[248px] h-auto mb-8 md:mb-0">
          <h1 className="text-[16px] font-medium mt-12 ml-48">RESOURCES</h1>
          <div className="flex flex-col ml-48 mt-2 space-y-2">
            <p className="text-[16px] whitespace-nowrap">Free eBooks</p>
            <p className="text-[16px] whitespace-nowrap">Development Tutorial</p>
            <p className="text-[16px] whitespace-nowrap">How to - Blog</p>
            <p className="text-[16px] whitespace-nowrap">Youtube Playlist</p>
          </div>
        </div>
      </div>

      
      <div className="w-full flex flex-col sm:flex-row justify-between items-center px-5 sm:px-10 py-5 mt-auto">
        <div className="text-[14px] text-gray-600 text-center sm:text-left mb-4 sm:mb-0">
          Shop.co © 2000-2023, All Rights Reserved
        </div>

        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <Image 
            src="/images/Card.png" 
            alt="Card Image" 
            width={281.07} 
            height={30.03} 
          />
        </div>
      </div>

    </div>
  );
}

export default Footer1;
