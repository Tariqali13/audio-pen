import React from "react";
import { reviewsData } from "../data";
import { ReviewCard } from "./index";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ReviewsSection = () => {
  return (
    <div className="mt-[630px] pb-[112px] px-5">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4 }}>
        <Masonry gutter={"18px"}>
          {reviewsData.map((rev, i) => (
            <ReviewCard rev={rev} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-[230px] pl-[34.82px] pr-[34.18px] py-3 bg-stone-100 rounded-[60px] shadow justify-center items-start flex">
          <div className="text-center text-gray-700 text-sm font-semibold leading-[21px] font-fraunces">
            read more Testimonials
          </div>
        </div>
      </div>
    </div>
  );
};

export { ReviewsSection };
