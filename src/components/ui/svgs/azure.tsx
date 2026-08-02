import type { SVGProps } from "react";

const Azure = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" aria-label="Azure logo">
    <image
      href="/icons/azure.jpg"
      x="0"
      y="0"
      width="64"
      height="64"
      preserveAspectRatio="xMidYMid slice"
    />
  </svg>
);

export { Azure };
