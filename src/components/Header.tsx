import React from 'react';

function Header() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full max-w-full bg-black text-white px-4 py-2 xs:px-2 xs:py-1">
        <h1 className="text-center text-[14px] xs:text-[12px]">
          Sign up and get 20% off to your first order.
          <button className="underline pl-5 xs:pl-2 xs:text-[10px]">Sign Up Now</button>
        </h1>
        <div className="absolute right-4 xs:right-2 cursor-pointer">X</div>
      </div>
    </div>
  );
}

export default Header;
