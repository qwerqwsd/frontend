"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";

export const NavComponent = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const toggleSearchBar = () => {
    setSearchVisible(!isSearchVisible);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full fixed">
        <div className="flex flex-nowrap items-center justify-between mx-auto px-4 py-2 max-w-screen-xl">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse hover:text-green-700"
          >
            {/* <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-10"
                alt="Flowbite Logo"
                fill='white'
              /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
              className="h-10"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
            <span className="self-center text-2xl hover:text-inherit font-semibold whitespace-nowrap dark:text-white md:text-slate-800 md:dark:text-slate-500">
              LinkedBook
            </span>
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="relative inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-10"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only flex-0">Open main menu</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            {isMenuOpen && (
              <div className="z-10">
                <ul className="flex flex-col flex-nowrap mt-24 mr-10 w-full h-10 px-10 bg-red-500 pt-1 border opacity-1">
                  <li className="py-4 px-4 max-w-60 bg-white text-right mr-10">
                    이용 방법
                  </li>
                  <li className="py-4 px-4 max-w-60 bg-white text-right mr-10">
                    책방 찾기
                  </li>
                  <li className="py-4 px-4 max-w-60 bg-white text-right mr-10">
                    로그인
                  </li>
                </ul>
              </div>
            )}
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="flex flex-row">
                {/* Search Bar - Hidden by Default */}
                {isSearchVisible && (
                  <div className="relative mx-4 flex-grow mr-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="block w-full p-2 pl-10 text-sm text-gray-900 border border-green-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    />
                  </div>
                )}
                {/* Search Icon */}
                <button
                  onClick={toggleSearchBar}
                  className="flex relative pl-1 pr-2 pt-2 pb-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-green-100 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-green-600"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m2-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="flex items-center justify-center block py-2 px-3 text-white bg-green-600 rounded md:bg-transparent md:text-slate-700 hover:md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500 hover:md:underline hover:md:underline-offset-3"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="flex items-center justify-center block py-2 px-3 text-white bg-green-600 rounded md:bg-transparent md:text-slate-700 hover:md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500 hover:md:underline hover:md:underline-offset-3"
                >
                  About
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="flex items-center justify-center block py-2 px-3 text-white bg-green-600 rounded md:bg-transparent md:text-slate-700 hover:md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500 hover:md:underline hover:md:underline-offset-3"
                >
                  이용 방법
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="flex items-center justify-center block py-2 px-3 text-white bg-green-600 rounded md:bg-transparent md:text-slate-700 hover:md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500 hover:md:underline hover:md:underline-offset-3"
                >
                  {/* <button
                    onClick={toggleSearchBar}
                    className="flex relative pl-1 pr-2 pt-2 pb-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-green-100 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-green-600"
                  >
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m2-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button> */}
                  <p>책방 찾기</p>
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="flex items-center justify-center block py-2 px-3 text-white bg-green-600 rounded md:bg-transparent md:text-slate-700 hover:md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500 hover:md:underline hover:md:underline-offset-3"
                >
                  로그인
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavComponent;
