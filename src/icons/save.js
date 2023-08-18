const Save = ({ handleDownload }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={handleDownload}
    >
      <rect
        width="25"
        height="25"
        transform="translate(0.5 0.790039)"
        fill="url(#save)"
      />
      <defs>
        <pattern
          id="save"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_1041" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_1_1041"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export { Save };
