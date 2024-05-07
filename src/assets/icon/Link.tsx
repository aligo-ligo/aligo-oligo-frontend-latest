const LinkIcon = ({ width, height, color }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        d="M8.79335 5.79202C9.22657 5.99886 9.60382 6.30664 9.89342 6.68951C10.183 7.07238 10.3765 7.51916 10.4576 7.99232C10.5388 8.46548 10.5052 8.9512 10.3596 9.40867C10.2141 9.86615 9.96093 10.282 9.62135 10.6214L6.62135 13.6214C6.05874 14.184 5.29567 14.5 4.50002 14.5C3.70436 14.5 2.9413 14.184 2.37869 13.6214C1.81607 13.0587 1.5 12.2957 1.5 11.5C1.5 10.7044 1.81607 9.9413 2.37869 9.37869L3.55002 8.20735M12.45 7.79269L13.6214 6.62135C14.184 6.05874 14.5 5.29567 14.5 4.50002C14.5 3.70436 14.184 2.9413 13.6214 2.37869C13.0587 1.81607 12.2957 1.5 11.5 1.5C10.7044 1.5 9.9413 1.81607 9.37869 2.37869L6.37869 5.37869C6.03911 5.71802 5.78593 6.13389 5.64041 6.59137C5.49489 7.04884 5.46128 7.53456 5.5424 8.00772C5.62352 8.48087 5.81701 8.92765 6.10661 9.31053C6.39621 9.6934 6.77347 10.0012 7.20669 10.208"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LinkIcon;
