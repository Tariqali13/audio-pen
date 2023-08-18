import React, { useRef } from "react";
import axios from "axios";
// import _get from "lodash/get";
import { baseURL } from "@/src/constants/env";

export const SPEACH_TO_TEXT = async (params) => {
  params.abort.current = new AbortController();
  const res = await axios.post(
    baseURL + `/v1/speach/speach-to-text`,
    params.data,
    {
      signal: params.abort.current.signal,
    }
  );
  return res?.data;
};

export const UPLOAD_FILE = async (params, funct) => {
  params.abort.current = new AbortController();
  const res = await axios.post(
    baseURL + `/v1/speach/upload-file`,
    params.data,
    {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
      signal: params.abort.current.signal,
    }
  );
  return res?.data;
};

export const SUMMARIZE_TEXT = async (params) => {
  params.abort.current = new AbortController();
  const res = await axios.post(
    baseURL + `/v1/speach/summarize-text`,
    params.data,
    {
      signal: params.abort.current.signal,
    }
  );
  return res?.data;
};
