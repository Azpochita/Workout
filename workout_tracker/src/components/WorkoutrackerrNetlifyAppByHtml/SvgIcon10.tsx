import { memo, SVGProps } from 'react';

const SvgIcon10 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.5 6C9.01664 6 7.56659 6.43987 6.33322 7.26398C5.09985 8.08809 4.13856 9.25943 3.5709 10.6299C3.00325 12.0003 2.85472 13.5083 3.14411 14.9632C3.4335 16.418 4.1478 17.7544 5.1967 18.8033C6.24559 19.8522 7.58196 20.5665 9.03682 20.8559C10.4917 21.1453 11.9997 20.9968 13.3701 20.4291C14.7406 19.8614 15.9119 18.9001 16.736 17.6668C17.5601 16.4334 18 14.9834 18 13.5H10.5V6Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.5 10.5H21C21 8.51088 20.2098 6.60322 18.8033 5.1967C17.3968 3.79018 15.4891 3 13.5 3V10.5Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(SvgIcon10);
export { Memo as SvgIcon10 };
