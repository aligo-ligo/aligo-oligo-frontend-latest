const SeedStage = ({ width, height }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect x="0.5" width="199" height="184" fill="url(#pattern0_581_741)" />
      <defs>
        <pattern
          id="pattern0_581_741"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_581_741"
            transform="scale(0.00502513 0.00543478)"
          />
        </pattern>
        <image
          id="image0_581_741"
          width="199"
          height="184"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
export default SeedStage;
