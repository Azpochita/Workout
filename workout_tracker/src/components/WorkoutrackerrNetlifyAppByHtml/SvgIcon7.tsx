import { memo, SVGProps } from 'react';

const SvgIcon7 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M5.01083 9.6775L7.6825 7L5.01083 4.3225L5.83333 3.5L9.33333 7L5.83333 10.5L5.01083 9.6775Z' fill='black' />
  </svg>
);

const Memo = memo(SvgIcon7);
export { Memo as SvgIcon7 };
