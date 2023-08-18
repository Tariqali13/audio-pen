import React, { useRef, useState, useEffect } from "react";
import { Delete, Copy, Save } from "@/src/icons";
import moment from "moment";
import copy from "copy-to-clipboard";

const ResultBox = (props) => {
  const {
    speachToTextData,
    summarizeTextData,
    handleDelete,
    handleOpenLoginSignUpModel,
  } = props;
  const textHeight = useRef(null);
  const [heightValue, setHeightValue] = useState("0px");
  const [showOriginalTranscrib, setShowOriginalTranscrib] = useState(false);
  const [copyDone, setCopyDone] = useState(false);
  const [copyTopDone, setCopyTopDone] = useState(false);
  const handleShowOriginalTranscrib = () => {
    setShowOriginalTranscrib(!showOriginalTranscrib);
  };
  useEffect(() => {
    if (textHeight?.current) {
      const height = textHeight?.current?.clientHeight;
      const heighVal = `${height}px`;
      setHeightValue(heighVal);
    }
  }, [textHeight]);
  const originalTranscrib = speachToTextData?.data?.data;
  const summarizeText = summarizeTextData?.data?.text?.result;
  const topic = summarizeTextData?.data?.topic?.items[0]?.category;
  const handleCopy = () => {
    copy(summarizeText);
    setCopyTopDone(true);
    setTimeout(() => {
      setCopyTopDone(false);
    }, 2000);
  };
  const handleDownload = () => {
    // fileDownload(summarizeText, "summarize.txt");
    const element = document.createElement("a");
    const file = new Blob([summarizeText], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "summarize.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  const copyFunction = () => {
    setCopyDone(true);
    setTimeout(() => {
      setCopyDone(false);
    }, 2000);
  };
  const handleOriginalCopy = () => {
    copy(originalTranscrib);
    copyFunction();
  };
  const handleOriginalSummarizeCopy = () => {
    copy(`${summarizeText} -------- Original Transcript: ${originalTranscrib}`);
    copyFunction();
  };
  return (
    <>
      <div className="w-[700px] px-[40px] py-[30px] mx-auto flex items-center flex-col relative bg-gradient-to-tr from-gray-700 to-gray-700 rounded-[30px]">
        <div className="w-full pl-[11px] pr-2.5 py-0.5 justify-center items-center inline-flex">
          <div className="font-fraunces pt-[35px] pb-1 text-center text-stone-100 text-4xl font-semibold leading-[54px]">
            {topic}
          </div>
        </div>
        <div className="w-full mb-[50.4px] justify-center items-center inline-flex">
          <div className="font-fraunces text-center text-stone-100 text-base font-light leading-snug">
            {moment().format("MMM DD, YYYY")}
          </div>
        </div>
        <div className="w-full pb-[75px] justify-center items-center inline-flex">
          <div className="font-dmsans w-[618px] text-stone-100 text-[22px] font-normal leading-[33px]">
            {summarizeText}
          </div>
        </div>
        <div className="w-[25px] h-[5px] bg-orange-600 rounded-sm" />
        <div className="mb-[40px] self-start pt-[5px] px-[18px] pb-[7px] rounded-[60px] border border-stone-100 border-opacity-60 justify-center items-center inline-flex">
          <div
            onClick={handleOpenLoginSignUpModel}
            className="font-dmsans cursor-pointer text-center text-stone-100 text-[11px] font-bold leading-[18px]"
          >
            + add tag
          </div>
        </div>
        <div className="w-[620px] h-max  justify-between items-center gap-[235px] inline-flex">
          <div className="w-[50px] h-max group/delete gap-2  justify-center flex-col items-center flex cursor-pointer">
            <Delete handleDelete={handleDelete} />
            <div className="font-dmsans text-white h-2 italic text-xs invisible group-hover/delete:visible">
              Delete
            </div>
          </div>
          <div className="w-[50px] h-max group/copy gap-2  flex-col justify-center items-center flex cursor-pointer	">
            <Copy handleCopy={handleCopy} />
            <div className="font-dmsans text-white  h-2 italic text-xs invisible group-hover/copy:visible">
              copy
            </div>
          </div>
          <div className=" w-[50px]  h-max group/save gap-2 flex-col justify-center items-center flex cursor-pointer	">
            <Save handleDownload={handleOpenLoginSignUpModel} />
            <div className="font-dmsans text-white  h-2 italic text-xs invisible group-hover/save:visible">
              save
            </div>
          </div>
        </div>
        <div
          className={`transition-all duration-3000 ease-in-out w-full mx-auto pl-[15px] pr-[15.17px] pt-[9px] pb-[11px] justify-center items-start inline-flex`}
          style={{
            visibility: copyTopDone ? "unset" : "hidden",
            height: copyTopDone ? "38px" : "0px",
            marginTop: copyTopDone ? "20px" : "0px",
          }}
        >
          <div className="font-dmsans text-center text-stone-100 text-l font-normal leading-[18px]">
            copied to your clipboard
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col ">
        <div
          className={`overflow-hidden transition-all duration-3000 ease-in-out`}
          style={{
            height: showOriginalTranscrib ? heightValue : "0px",
            visibility: showOriginalTranscrib ? "unset" : "hidden",
          }}
        >
          <div
            className="w-[600px] bg-white rounded-b-[30px] px-[25px] py-[20px]"
            ref={textHeight}
          >
            <div class="text-sm leading-normal text-blue-gray-500/80">
              {originalTranscrib}
            </div>
            <div
              className={`transition-all duration-3000 ease-in-out w-full mx-auto pl-[15px] pr-[15.17px] pt-[9px] pb-[11px] bg-orange-600 rounded-[10px] shadow justify-center items-start inline-flex`}
              style={{
                visibility: copyDone ? "unset" : "hidden",
                height: copyDone ? "38px" : "0px",
              }}
            >
              <div className="font-dmsans text-center text-stone-100 text-xs font-normal leading-[18px]">
                copied to your clipboard
              </div>
            </div>
            <div className="flex justify-between items-center mt-[30px]">
              <p
                className="font-dmsans text-center cursor-pointer  text-xs font-normal leading-[18px]"
                onClick={handleOriginalCopy}
              >
                copy transcript
              </p>
              <p
                className="font-dmsans text-center  cursor-pointer text-xs font-normal leading-[18px]"
                onClick={handleOriginalSummarizeCopy}
              >
                copy node + transcript
              </p>
            </div>
          </div>
        </div>
        <div className="w-auto mx-auto pl-[15px] pr-[15.17px] pt-[9px] pb-[11px] bg-orange-600 rounded-bl-[15px] rounded-br-[15px] shadow justify-center items-start inline-flex">
          <button
            onClick={handleShowOriginalTranscrib}
            className="font-dmsans text-center text-stone-100 text-xs font-normal leading-[18px]"
          >
            view original transcript
          </button>
        </div>
      </div>
    </>
  );
};

export { ResultBox };
