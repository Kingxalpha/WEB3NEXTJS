'use client'
import React, { useState } from 'react'
import {Transition} from '@headlessui/react';
import { MdMenu, MdChevronLeft, MdOutlineShoppingBag } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="isolate">
      <nav className=" mt-[30px] w-full">
        <div className="w-full flex items-center justify-center">
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center  mx-9  justify-around w-[80%] bg-[#0E1939] p-4 border border-[#FFFFFF] rounded-xl">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Image height={100} width={100} src={"/web.png"}/>
              </div>
              <div className="flex md:hidden sm:hidden">
                <div className="ml-10 flex items-baseline space-x-4 text-xl text-white">
                  <Link
                    activeclass="Home"
                    href="/"
                    className="cursor-pointer hover:text-[#48CAE4] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    activeclass="about"
                    href="/about"
                    className="cursor-pointer hover:text-[#48CAE4] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                  <Link
                    activeclass="work"
                    href="/projects"
                    className="cursor-pointer hover:text-[#48CAE4] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Events
                  </Link>
                </div>
              </div>
              <button className='bg-Button pt-2 pb-2 pl-3 pr-3 rounded-xl md:hidden sm:hidden text-white'>Join Us</button>
            </div>
            <div className="mr-10 hidden sm:block ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                refs={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 sm:mx-3"
              >
                <Link
                  href="/home"
                  activeclass="home"
                  className="cursor-pointer text-gray-700 hover:text-gray-900 hover:bg-gray-400/10  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  activeclass="about"
                  className="cursor-pointer text-gray-700 hover:text-gray-900 hover:bg-gray-400/10 block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>

                <Link
                  href="/work"
                  activeclass="work"
                  className="cursor-pointer text-gray-700 hover:text-gray-900 hover:bg-gray-400/10 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Events
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC"></stop>
              <stop offset="1" stopColor="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Navigation