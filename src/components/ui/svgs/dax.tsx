import type { SVGProps } from "react";

const Dax = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" aria-label="DAX logo">
    <image
      href="/icons/dax.png"
      x="0"
      y="0"
      width="64"
      height="64"
      preserveAspectRatio="xMidYMid slice"
    />
  </svg>
);

export { Dax };
