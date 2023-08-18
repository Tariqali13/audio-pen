import React, { useState, useEffect } from "react";

const ReviewMessage = ({ rev }) => {
  const [parsedReview, setParseReview] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      let parse = require("html-react-parser");
      setParseReview(parse(rev?.review));
    }
  }, []);
  return <div className="w-full font-dmsans">{parsedReview}</div>;
};

export { ReviewMessage };
