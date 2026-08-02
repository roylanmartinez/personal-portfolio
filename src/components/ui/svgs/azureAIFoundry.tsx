import type { SVGProps } from "react";

const AzureAIFoundry = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" aria-label="Azure AI Foundry logo">
    <defs>
      <linearGradient id="azure-foundry-bg" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00A3FF" />
        <stop offset="1" stopColor="#0057D8" />
      </linearGradient>
      <linearGradient id="azure-foundry-ring" x1="16" y1="20" x2="48" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BEE8FF" />
        <stop offset="1" stopColor="#E8F7FF" />
      </linearGradient>
    </defs>
    <rect x="8" y="8" width="48" height="48" rx="12" fill="url(#azure-foundry-bg)" />
    <path
      d="M22 44 32.2 20h6.2L49 44h-7.1l-1.9-4.8H30.8L29 44H22Zm10.8-10.3h5.2l-2.6-6.7-2.6 6.7Z"
      fill="white"
    />
    <circle cx="46" cy="18" r="4" fill="url(#azure-foundry-ring)" />
    <circle cx="46" cy="18" r="1.6" fill="#0A3FAF" />
  </svg>
);

export { AzureAIFoundry };
