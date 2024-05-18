import { motion } from 'framer-motion';

const RainDrop = ({ width, height }: React.SVGProps<SVGSVGElement>) => {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 295 578"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      animate={{
        x: 0,
        y: 100,
        height: '100%',
      }}
    >
      <rect width="295" height="577.508" fill="url(#pattern0_682_337)" />
      <defs>
        <pattern id="pattern0_682_337" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_682_337" transform="scale(0.00202866 0.00103627)" />
        </pattern>
        <image
          id="image0_682_337"
          width="493"
          height="965"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </motion.svg>
  );
};
export default RainDrop;
