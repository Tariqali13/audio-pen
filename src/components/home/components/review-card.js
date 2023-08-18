import React from "react";
import { ReviewMessage } from "./index";
import { ProfileLight, Star, ProductLink } from "@/src/icons";

const ReviewCard = ({ rev }) => {
  return (
    <div className="w-full h-fit px-4 pt-[15.50px] pb-4 bg-white rounded-2xl justify-start items-start inline-flex">
      <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
        <div className="w-full justify-start items-center gap-4 inline-flex">
          <div className="h-[42px] bg-black bg-opacity-5 rounded-full justify-start items-start flex">
            {rev?.avatar ? (
              <img
                className="w-[42px] h-[42px] relative rounded-full"
                src={rev.avatar}
              />
            ) : (
              <ProfileLight />
            )}
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <div className="text-gray-600 text-base font-medium leading-normal font-dmsans">
              {rev.name}
            </div>
            <div className="w-full pr-[25.75px] pb-[0.50px] justify-start items-start inline-flex">
              <div className="text-gray-500 text-sm font-normal leading-tight font-dmsans">
                {rev.subDesc}
              </div>
            </div>
          </div>
          <div className="h-[20px] ml-auto bg-black bg-opacity-5 rounded-full justify-start items-start flex self-start">
            <ProductLink />
          </div>
        </div>
        <div className="w-full pr-[155.37px] justify-start items-start gap-[3.59px] inline-flex">
          {Array.apply(null, { length: rev.rating }).map((v, i) => (
            <Star />
          ))}
        </div>
        <ReviewMessage rev={rev} />
      </div>
    </div>
  );
};

export { ReviewCard };
