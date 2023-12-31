const Close = ({ handleClose }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={handleClose}
      className="cursor-pointer"
    >
      <rect
        width="20"
        height="20"
        transform="translate(0 0.390015)"
        fill="url(#close)"
      />
      <defs>
        <pattern
          id="close"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_1923" transform="scale(0.0208333)" />
        </pattern>
        <image
          id="image0_1_1923"
          width="48"
          height="48"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export { Close };
