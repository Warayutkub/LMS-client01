"use client"
import Link from 'next/link';
import React from 'react';
// import ErrorNotFoundImage from "@/image/404.svg"
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="h-screen w-12/12 flex justify-center">
      <div className="container flex flex-col-reverse md:flex-row  items-center justify-center px-5 ">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.
          </p>
          <p className="mb-8">
            But don't worry, you can find plenty of other things on our homepage.
          </p>
          <Link href={"/"} className="px-4 inline py-2 text-sm font-medium  leading-5 shadow text-secondary transition-colors duration-150 border border-transparent rounded-lg focus:outline-none bg-secondary-foreground hover:bg-primary/85">
            Back to homepage
          </Link>
        </div>
        <div className="max-w-lg">
          {/* <Image alt='Error 404' src={ErrorNotFoundImage} /> */}
        </div>

      </div>
    </div>
  );
};

export default NotFound;