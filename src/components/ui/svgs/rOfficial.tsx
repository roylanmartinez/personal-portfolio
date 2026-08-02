import type { SVGProps } from "react";

const ROfficial = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" aria-label="R logo">
    <image
      href="/icons/r.jpg"
      x="0"
      y="0"
      width="64"
      height="64"
      preserveAspectRatio="xMidYMid slice"
    />
  </svg>
);

export { ROfficial };
