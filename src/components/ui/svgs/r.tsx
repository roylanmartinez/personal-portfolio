import type { SVGProps } from "react";

const RLang = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" aria-label="R logo">
    <ellipse cx="30" cy="32" rx="22" ry="14" fill="#D9DEE3" />
    <ellipse cx="30" cy="32" rx="18.5" ry="11.5" fill="#2C3E50" opacity="0.85" />
    <path
      d="M35.5 22h10.8c6.9 0 11.7 4.3 11.7 10.4 0 4.3-2.4 7.6-6.4 9.2L58 52h-7.4l-5.7-9.2h-4v9.2h-5.4V22Zm5.4 4.8V38h5.5c3.7 0 6-2.2 6-5.6 0-3.4-2.3-5.6-6-5.6h-5.5Z"
      fill="#276DC3"
    />
  </svg>
);

export { RLang };
