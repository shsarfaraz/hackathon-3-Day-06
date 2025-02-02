import React from 'react';
import Link from 'next/link'; // Import Link from Next.js for navigation

function Header() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full max-w-full bg-black text-white px-4 py-2 xs:px-2 xs:py-1">
        <h1 className="text-center text-[14px] xs:text-[12px]">
          Sign up and get 20% off your first order.
          <Link href="/signup"> {/* Link to the signup page */}
            <button className="underline pl-5 xs:pl-2 xs:text-[10px]">Sign Up Now</button>
          </Link>
          <span className="px-2 text-[12px] xs:text-[10px]">|</span> {/* Separator */}
          <Link href="/login"> {/* Link to the login page */}
            <button className="underline pl-2 xs:pl-1 xs:text-[10px]">Login</button>
          </Link>
        </h1>
        <div className="absolute right-4 xs:right-2 cursor-pointer">X</div>
      </div>
    </div>
  );
}

export default Header;
