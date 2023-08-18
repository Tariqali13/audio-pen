import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-[400px] mb-[120px] px-5 pt-5 border-t border-gray-700 border-opacity-20 flex justify-between">
      <div className="flex">
        <div className="pl-[13px] pr-[13.84px] py-[3px] border-r border-gray-700 border-opacity-50 justify-center items-center flex">
          <div className="text-center text-gray-700 text-sm font-normal leading-[21px] font-dmsans">
            © Nicheless Inc.
          </div>
        </div>
        <div className="pl-[13px] pr-[12.84px] py-[3px] rounded-[20px] justify-center items-center flex">
          <div className="text-center text-gray-700 text-sm font-normal leading-[21px] font-dmsans">
            built by @louispereira
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="pl-3 pr-[13.10px] py-2.5 rounded-[20px] justify-center items-center flex">
          <div className="text-center text-gray-700 text-sm font-normal leading-[21px] font-dmsans">
            FAQs
          </div>
        </div>
        <div className="pl-[13px] pr-[12.80px] py-2.5 rounded-[20px] justify-center items-center flex">
          <div className="text-center text-gray-700 text-sm font-normal leading-[21px] font-dmsans">
            privacy policy
          </div>
        </div>
        <div className="pl-3 pr-[13.45px] py-2.5 rounded-[20px] justify-center items-start flex">
          <div className="text-center text-gray-700 text-sm font-normal leading-[21px] font-dmsans">
            terms of use
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
