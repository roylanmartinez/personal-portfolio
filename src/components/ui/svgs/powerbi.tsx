import type { SVGProps } from "react";

const PowerBi = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" aria-label="Power BI logo">
    <image
      href="/icons/powerbi.webp"
      x="0"
      y="0"
      width="64"
      height="64"
      preserveAspectRatio="xMidYMid slice"
    />
  </svg>
);

export { PowerBi };
