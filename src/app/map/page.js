"use client";
import { KakaoMap } from "../../components/map";
import { NavComponent } from "../../components/nav"; // Note the curly braces and capitalized name

import { useEffect, useRef, useState } from "react";
import { Map, CustomOverlayMap } from "react-kakao-maps-sdk";

export default function Start() {
  const [level, setLevel] = useState(3);

  return (
    <>
      <NavComponent className="z-50	" />
      <KakaoMap className=" w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] z-10	" />
      <main className="w-full flex flex-col items-center justify-center pt-16"></main>
    </>
  );
}
