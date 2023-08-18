import React from "react";
import { MicroPhone, YoutubeImage } from "@/src/icons";
import Link from "next/link";
const Demo = () => {
  return (
    <div
      id="demo-div"
      className="w-full h-full px-[243.94px] flex-col justify-center items-center inline-flex"
    >
      <div className="w-full flex justify-center flex-col items-center pt-[27px] ">
        <Link href="/">
          <MicroPhone style={{ width: "45px", height: "45px" }} />
        </Link>
        <div className="mt-2 w-[813.12px] pl-[343.11px] pr-[342.62px] pb-[0.45px] justify-center items-start inline-flex">
          <div className="text-center text-gray-700 text-[27.10px] font-semibold leading-[37.95px]">
            AudioPen
          </div>
        </div>
        <div className="mb-7 w-[704.71px] pl-[198.90px] pr-[199.53px] justify-center items-start inline-flex">
          <div className="text-center text-gray-700 text-[17.17px] font-normal leading-relaxed">
            Watch a demo of how AudioPen works.
          </div>
        </div>
        <YoutubeImage />
        <div className="mt-7 pl-[20.78px] pr-[21.99px] py-[10.84px] bg-orange-600 rounded-[54.21px] shadow justify-center items-start inline-flex">
          <div className="text-center text-stone-100 text-xs font-semibold leading-[18.97px]">
            sign up / log in
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
