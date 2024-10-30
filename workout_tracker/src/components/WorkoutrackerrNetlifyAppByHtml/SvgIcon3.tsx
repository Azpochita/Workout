import { memo, SVGProps } from 'react';

const SvgIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.83333 10.5H8.16667V9.33333H5.83333V10.5ZM1.75 3.5V4.66667H12.25V3.5H1.75ZM3.5 7.58333H10.5V6.41667H3.5V7.58333Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(SvgIcon3);
export { Memo as SvgIcon3 };
