import { memo, SVGProps } from 'react';

const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.77 6.875L10.52 13.125L4.27 6.875'
      stroke='black'
      strokeWidth={1.25}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(SvgIcon);
export { Memo as SvgIcon };
