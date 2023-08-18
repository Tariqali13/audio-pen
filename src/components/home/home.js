import React, { useState, useRef } from "react";
import { CurveArrow } from "@/src/icons";
import TemplateLayout from "@/src/layout";
import { ReviewsSection, RecorderBox } from "./components";
import { FixedFooter, LoginSignUpModel } from "@/src/components/common";
import { useOutsideAlerter } from "@/src/utils";
import Link from "next/link";
const Home = () => {
  const wrapperRef = useRef(null);
  const [isRecorderClicked, setIsRecorderClicked] = useState(false);
  const [showLoginSignupModel, setShowLoginSignUpModel] = useState(false);
  useOutsideAlerter(wrapperRef, setShowLoginSignUpModel);
  const handleOpenLoginSignUpModel = () => {
    setShowLoginSignUpModel(true);
  };
  return (
    <TemplateLayout handleOpenLoginSignUpModel={handleOpenLoginSignUpModel}>
      <div
        class={`w-full ${
          isRecorderClicked ? "mt-[55.8px]" : "mt-[136px]"
        }  mb-10 flex justify-center flex-col items-center`}
      >
        <div class="w-full justify-center flex">
          <div class="text-center text-gray-700 text-5xl font-fraunces font-semibold leading-[67.20px]">
            AudioPen
          </div>
        </div>
        <div class="w-[25px] h-[5px] mt-[11.2px] mb-[14px] bg-orange-600 rounded-sm"></div>
        <div class="w-full justify-center mb-[14.69px] flex gap-[11.93px]">
          <div class="text-center text-gray-700 text-[28px] font-bold font-dmsans leading-10">
            Go from fuzzy thought to clear text.
          </div>
          <div class="text-center text-gray-700 text-[27px] font-light italic font-dmsans leading-10">
            Fast.
          </div>
        </div>
        {!isRecorderClicked && (
          <div class="w-full justify-center flex">
            <div class="font-dmsans text-center text-gray-700 text-[17px] font-light leading-relaxed">
              Just hit record. Then start talking. <br />
              AudioPen will clean things up when you're done.
            </div>
          </div>
        )}
      </div>
      {!isRecorderClicked && (
        <div class="w-full justify-center items-start gap-5 flex">
          <div class="pl-[23px] pr-[24.34px] py-3 bg-orange-600 rounded-[60px] shadow justify-center items-start flex">
            <div
              onClick={handleOpenLoginSignUpModel}
              class="font-fraunces cursor-pointer text-center text-stone-100 text-sm leading-[21px]"
            >
              sign up / log in
            </div>
          </div>
          <Link
            href={"/demo"}
            class="pl-[23px] pr-[24.71px] py-3 bg-stone-100 rounded-[60px] shadow justify-center items-start flex"
          >
            <div class="font-fraunces text-center text-gray-700 text-sm font-semibold leading-[21px]">
              see how it works
            </div>
          </Link>
        </div>
      )}
      {!isRecorderClicked && (
        <div class="w-full pr-5 justify-center items-center flex">
          <CurveArrow />
        </div>
      )}
      <RecorderBox
        isRecorderClicked={isRecorderClicked}
        setIsRecorderClicked={setIsRecorderClicked}
        handleOpenLoginSignUpModel={handleOpenLoginSignUpModel}
      />
      <ReviewsSection />
      {!isRecorderClicked && (
        <FixedFooter
          handleOpenLoginSignUpModel={handleOpenLoginSignUpModel}
          setIsRecorderClicked={setIsRecorderClicked}
        />
      )}
      <LoginSignUpModel
        wrapperRef={wrapperRef}
        showLoginSignupModel={showLoginSignupModel}
      />
    </TemplateLayout>
  );
};

export default Home;
