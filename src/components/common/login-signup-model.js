import React from "react";

const LoginSignUpModel = ({ showLoginSignupModel, wrapperRef }) => {
  return (
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      className={`fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] h-screen	 max-h-full ${
        showLoginSignupModel ? "flex" : "hidden"
      } `}
    >
      <div className="-z-10 absolute top-0 left-0 h-full w-full bg-orange-600 bg-opacity-40 blur-[2px] backdrop-blur-[2px]"></div>
      <div
        ref={wrapperRef}
        className="z-100 w-[400px] h-[285.59px] px-[30px] pt-[29.50px] pb-[30px] bg-stone-100 rounded-[30px] flex-col justify-start items-center gap-5 inline-flex"
      >
        <div className="w-[340px] pl-[49.41px] pr-[50.59px] pb-[0.50px] justify-center items-start inline-flex">
          <div className="font-fraunces text-center text-gray-700 text-3xl font-semibold leading-[42px]">
            Sign up or Log in
          </div>
        </div>
        <div className="w-[250px] pl-[60.55px] pr-[60.45px] py-3 bg-orange-600 rounded-[60px] shadow justify-center items-start inline-flex">
          <div className="font-fraunces text-center text-stone-100 text-sm font-semibold leading-[21px]">
            sign in with Google
          </div>
        </div>
        <div className="w-[250px] pl-[28.13px] pr-[29.87px] py-3 bg-stone-100 rounded-[60px] shadow justify-center items-start inline-flex">
          <div className="font-fraunces text-center text-gray-700 text-sm font-semibold leading-[21px]">
            or sign up / log in with email
          </div>
        </div>
        <div className="w-[238px] h-[33.59px] relative">
          <div className="font-dmsans left-[12.56px] top-[3px] absolute text-center text-gray-700 text-opacity-60 text-[10px] font-normal leading-3">
            by signing up, you agree to AudioPen's{" "}
          </div>
          <div className="w-[164.77px] h-[29.80px] left-[61.66px] top-[3px] absolute">
            <div className="left-[129.47px] top-0 absolute text-center text-gray-700 text-opacity-60 text-[10px] font-normal leading-3">
              Privacy{" "}
            </div>
            <div className="left-[-1px] top-[16.80px] absolute text-center text-gray-700 text-opacity-60 text-[10px] font-normal leading-3">
              Policy
            </div>
          </div>
          <div className="left-[90.01px] top-[19.80px] absolute text-center text-gray-700 text-opacity-60 text-[10px] font-normal leading-3">
            {" "}
            and Terms of Use.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoginSignUpModel };
