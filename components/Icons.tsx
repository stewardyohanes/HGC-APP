import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function BaseIcon({ size = 28, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconUsher: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* person + hand */}
    <path d="M12 12a4 4 0 1 0-0.01-8.01A4 4 0 0 0 12 12z" />
    <path d="M3 21c1.5-3.5 5-5 9-5s7.5 1.5 9 5" />
    <path d="M16 14l3 2 2-2" />
  </BaseIcon>
);

export const IconMultimedia: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* screen + play */}
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M8 20h8" />
    <path d="M11 9l4 3-4 3V9z" />
  </BaseIcon>
);

export const IconKids: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* smiley */}
    <circle cx="12" cy="12" r="8" />
    <path d="M9 10h.01M15 10h.01" />
    <path d="M8 14c1.2 1 2.6 1.5 4 1.5s2.8-.5 4-1.5" />
  </BaseIcon>
);

export const IconCreative: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* pen + camera */}
    <path d="M12 2l3 3-7 7-3 1 1-3 6-6z" />
    <rect x="13" y="13" width="8" height="6" rx="2" />
    <circle cx="17" cy="16" r="1.5" />
  </BaseIcon>
);

export const IconWorship: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* music note + spark */}
    <path d="M14 3v10a3 3 0 1 1-2-2.83V6l6-2v6a3 3 0 1 1-2-2.83" />
    <path d="M6 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
  </BaseIcon>
);

export const IconEvent: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* calendar */}
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 11h18" />
    <path d="M8 15h4M8 19h8" />
  </BaseIcon>
);


export const IconAngel: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    {/* halo */}
    <ellipse cx="12" cy="5" rx="5.5" ry="2" />
    {/* head */}
    <circle cx="12" cy="10" r="2.5" />
    {/* body/robe */}
    <path d="M8 21c0-3.5 1.8-6 4-6s4 2.5 4 6" />
    {/* wings */}
    <path d="M3.5 12c2-.5 3.7-1.7 5-3.5C9 10.5 8.2 12.7 6 14c-1 .6-1.9.9-2.5 1" />
    <path d="M20.5 12c-2-.5-3.7-1.7-5-3.5 0 2 .8 4.2 3 5.5 1 .6 1.9.9 2.5 1" />
  </BaseIcon>
);


