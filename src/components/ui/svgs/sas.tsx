import type { SVGProps } from "react";

const Sas = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" aria-label="SAS logo">
    <image
      href="/icons/sas.svg"
      x="0"
      y="0"
      width="64"
      height="64"
      preserveAspectRatio="xMidYMid slice"
    />
  </svg>
);

export { Sas };
