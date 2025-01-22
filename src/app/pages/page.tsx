import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import ProductHero from '@/components/ProductHero';

const Page = () => {
  return (
    <div>
      <div>
        <Header />
        <Navbar />
        <nav
          style={{
            paddingBottom: '20px',
            marginRight: '5vw',
            marginLeft: '5vw',
            borderBottom: '1px solid gray',
          }}
        ></nav>
      </div>

      <div
        className="flex items-center space-x-2 text-[12px] sm:text-[16px]"
        style={{ marginLeft: '5vw', paddingTop: '10px' }}
      >
        <a href="/" className="hover:underline flex items-center">
          Home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="16"
            height="16"
            className="ml-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </a>

        <a href="/shop" className="hover:underline flex items-center">
          Shop
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="16"
            height="16"
            className="ml-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </a>

        <a href="/shop" className="hover:underline flex items-center">
          Men
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="16"
            height="16"
            className="ml-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </a>

        <a href="/shop" className="hover:underline">T-Shirts</a>
      </div>
      <ProductHero />
    </div>
    
  );
};

export default Page;
