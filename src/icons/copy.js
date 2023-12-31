const Copy = ({ handleCopy }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={handleCopy}
    >
      <rect
        width="25"
        height="25"
        transform="translate(0.5 0.790039)"
        fill="url(#copy)"
      />
      <defs>
        <pattern
          id="copy"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_1039"
            transform="scale(0.0175439 0.015625)"
          />
        </pattern>
        <image
          id="image0_1_1039"
          width="57"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export { Copy };
