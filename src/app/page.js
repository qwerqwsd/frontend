"use client";

import { NavComponent } from "./components/nav";
import Image from "next/image";
import book from "./static/book.png";
import movie from "./static/movie.gif";
import { useSearchParams } from "next/navigation";
import Amplify from "aws-amplify";
// import awsconfig from './'

export default function Start({ Component, pageProps }) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  console.log("지민" + search);
  return (
    <>
      {/* <AmplifySignOut /> */}
      {/* <h2>My App Content</h2> */}
      <main>
        <NavComponent />
        <main
          className="flex min-h-screen flex-col wrap items-center"
          style={{ padding: "56px 0 0 0" }}
        >
          <div className="w-11/12 md:w-10/12 flex gap-x-4 mt-16">
            <div className="flex flex-col md:w-1/2 w-full">
              <h1 className="text-5xl pt-0.5">오늘의 책방</h1>
              <div className="pb-4 font-light text-base hidden md:block">
                <p className=" text-xl pb-1">
                  당신의 일상에 새로움을 더하는 문화의 장
                </p>

                <p className="text-xl pb-2">
                  Lorem ipsum `dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <button className="bookButton w-40 py-3 font-semibold text-xl">
                책방 찾기
              </button>
            </div>
            <div className="flex aspect-auto md:w-1/2 md:flex hidden">
              <Image
                src={book} // Using imported image variable
                alt="Book recommendation"
                width={500}
                height={400}
                className="aspect-auto rounded-2xl"
              />
            </div>
          </div>

          <div className="mt-16 w-full flex items-center bg-green-200 h-80 justify-center relative">
            <div className="relative overflow-hidden h-full">
              <h1 className="absolute object-center h-full top-0 left-0 right-0 bottom-0 text-center text-2xl font-bold text-white bg-black bg-opacity-50 p-2">
                최인아 책방
              </h1>
              <Image
                src={movie} // Using imported image variable
                alt="introduction"
                width={1920}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>
        </main>
      </main>
    </>
  );
}
