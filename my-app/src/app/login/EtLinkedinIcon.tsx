import { memo, SVGProps } from 'react';

const EtLinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 43 43' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_790_778)'>
      <path
        d='M26.2233 16.0605C25.3122 16.0605 24.6377 16.2903 24.1096 16.5805C24.0249 16.2795 23.7468 16.0592 23.4189 16.125H19.4091C19.0127 16.0592 18.6916 16.3803 18.8138 16.7969V31.5781C18.6916 31.9544 19.0127 32.2769 19.4091 32.25H23.4189C23.8153 32.2769 24.1364 31.9544 24.1364 31.558L24.1351 22.6247C24.1338 22.6207 24.119 22.1934 24.3891 21.8991C24.6054 21.6653 24.9776 21.5457 25.4923 21.5457C26.3496 21.5457 26.7312 21.8964 26.8737 22.6812V31.558C26.7326 31.9544 27.0537 32.2769 27.4501 32.25H31.6762C32.0726 32.2769 32.3938 31.9544 32.2513 31.558V22.3828C32.3924 17.7173 29.0693 16.0605 26.2233 16.0605ZM30.9573 30.9063H28.1677V22.6812C28.1677 21.0942 27.1424 20.1106 25.4936 20.1106C24.5611 20.1106 23.8354 20.3847 23.3356 20.9249C22.6408 21.6774 22.6946 22.6314 22.8438 22.8438V30.9063H20.1267V17.4956H22.7013V17.9471C22.7003 18.0816 22.7372 18.2137 22.8078 18.3282C22.8785 18.4426 22.98 18.5348 23.1007 18.5942C23.2213 18.6536 23.3563 18.6777 23.4901 18.6638C23.6239 18.6498 23.751 18.5985 23.8569 18.5155L24.0451 18.3704C24.5893 17.9417 25.1523 17.497 26.2246 17.497C27.3346 17.497 30.9587 17.8504 30.9587 22.3842L30.9573 30.9063ZM14.7813 9.36056C13.2736 9.36056 12.0481 10.5861 12.0481 12.0937C12.0481 13.6014 13.2736 14.8269 14.7813 14.8269C16.2889 14.8269 17.5144 13.6014 17.5144 12.0937C17.5144 10.5861 16.2889 9.36056 14.7813 9.36056ZM14.7813 13.3918C14.0664 13.3918 13.4832 12.8086 13.4832 12.0937C13.4832 11.3789 14.0664 10.7957 14.7813 10.7957C15.4961 10.7957 16.0793 11.3789 16.0793 12.0937C16.0793 12.8086 15.4961 13.3918 14.7813 13.3918ZM16.7001 16.0592H12.7119C12.3155 16.0592 11.9943 16.3803 12.0938 16.7969V31.5781C11.9943 31.9544 12.3155 32.2769 12.7119 32.25H16.7001C17.0965 32.2769 17.4177 31.9544 17.4177 31.558V16.7767C17.4177 16.5864 17.3421 16.4039 17.2075 16.2693C17.073 16.1348 16.8904 16.0592 16.7001 16.0592ZM16.125 30.9063H13.4294V17.4956H16.125V30.9063Z'
        fill='#034EF7'
      />
      <path
        d='M21.5 -0.0456874C9.61857 -0.0456874 -0.0456848 9.61856 -0.0456848 21.5C-0.0456848 33.3814 9.61857 43.0457 21.5 43.0457C33.3814 43.0457 43.0457 33.3814 43.0457 21.5C43.0457 9.61856 33.3814 -0.0456874 21.5 -0.0456874ZM21.5 41.6106C10.4114 41.6106 1.38944 32.5886 1.38944 21.5C1.38944 10.4114 10.4114 1.38944 21.5 1.38944C32.5886 1.38944 41.6106 10.4114 41.6106 21.5C41.6106 32.5886 32.5886 41.6106 21.5 41.6106Z'
        fill='#034EF7'
        stroke='#034EF7'
        strokeWidth={287}
      />
    </g>
    <defs>
      <clipPath id='clip0_790_778'>
        <rect width={43} height={43} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(EtLinkedinIcon);
export { Memo as EtLinkedinIcon };