import React from "react";

const ProcessingBox = (props) => {
  const {
    isLoadingUploading,
    isLoadingSpeachToText,
    isLoadingSummarizeText,
    handleCancel,
  } = props;
  return (
    <div className="w-full relative flex flex-col justify-center items-center pt-[58.63px] pb-[32.39px]">
      <div class="chase-spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
      <div className="font-dmsans flex flex-col justify-center items-center text-stone-100 mt-[29px] mb-2 text-[22px] w-full font-normal leading-[33px]">
        {isLoadingUploading && "(1/3) uploading..."}
        {isLoadingSpeachToText && "(2/3) transcribing..."}
        {isLoadingSummarizeText && "(3/3) rewriting..."}
      </div>
      <div
        onClick={handleCancel}
        className="font-dmsans opacity-60 text-stone-100 text-base font-normal underline leading-[33px]"
      >
        cancel
      </div>
    </div>
  );
};

export { ProcessingBox };
