import { memo, SVGProps } from 'react';

const SvgIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.3333 11L17.0408 9.7075L11.9167 14.8225V3.66667H10.0833V14.8225L4.96833 9.69833L3.66667 11L11 18.3333L18.3333 11Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(SvgIcon4);
export { Memo as SvgIcon4 };
