const Delete = ({ handleDelete }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={handleDelete}
    >
      <rect
        width="25"
        height="25"
        transform="translate(0.5 0.790039)"
        fill="url(#delete)"
      />
      <defs>
        <pattern
          id="delete"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_1037"
            transform="scale(0.0172414 0.015625)"
          />
        </pattern>
        <image
          id="image0_1_1037"
          width="58"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export { Delete };
