const Restart = ({handleRestart}) => {
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={handleRestart}
      className="cursor-pointer"
    >
      <rect
        width="17"
        height="17"
        transform="translate(0 0.890015)"
        fill="url(#restart)"
      />
      <defs>
        <pattern
          id="restart"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_1922" transform="scale(0.0208333)" />
        </pattern>
        <image
          id="image0_1_1922"
          width="48"
          height="48"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export { Restart };
