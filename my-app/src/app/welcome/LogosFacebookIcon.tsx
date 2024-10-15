import { memo, SVGProps } from 'react';

const LogosFacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_784_770)'>
      <path
        d='M45 22.5C45 10.0737 34.9263 0 22.5 0C10.0737 0 0 10.0737 0 22.5C0 33.7303 8.22797 43.0388 18.9844 44.7267V29.0039H13.2715V22.5H18.9844V17.543C18.9844 11.9039 22.3436 8.78906 27.483 8.78906C29.9447 8.78906 32.5195 9.22852 32.5195 9.22852V14.7656H29.6824C26.8873 14.7656 26.0156 16.5001 26.0156 18.2795V22.5H32.2559L31.2583 29.0039H26.0156V44.7267C36.772 43.0388 45 33.7305 45 22.5Z'
        fill='#1877F2'
      />
      <path
        d='M31.2583 29.0039L32.2559 22.5H26.0156V18.2795C26.0156 16.4999 26.8873 14.7656 29.6824 14.7656H32.5195V9.22852C32.5195 9.22852 29.9447 8.78906 27.4829 8.78906C22.3436 8.78906 18.9844 11.9039 18.9844 17.543V22.5H13.2715V29.0039H18.9844V44.7267C20.1474 44.9089 21.3228 45.0003 22.5 45C23.6772 45.0003 24.8526 44.9089 26.0156 44.7267V29.0039H31.2583Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_784_770'>
        <rect width={45} height={45} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(LogosFacebookIcon);
export { Memo as LogosFacebookIcon };