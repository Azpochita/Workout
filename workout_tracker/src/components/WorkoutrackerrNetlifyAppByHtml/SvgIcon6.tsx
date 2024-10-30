import { memo, SVGProps } from 'react';

const SvgIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M8.98917 9.6775L6.3175 7L8.98917 4.3225L8.16667 3.5L4.66667 7L8.16667 10.5L8.98917 9.6775Z' fill='black' />
  </svg>
);

const Memo = memo(SvgIcon6);
export { Memo as SvgIcon6 };
