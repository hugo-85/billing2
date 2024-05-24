import * as React from "react";
import { SVGProps } from "react";

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={128}
    height={128}
    viewBox="0 0 400 400"
    {...props}
  >
    <path
      stroke="#000"
      d="M185 6.42c10.71-1.3 32.07.69 43 2.5C313.01 22.99 378.17 92.85 384.09 179l.91 10c.86 74.11-38.56 138.11-105 171.25-19.45 9.7-42.32 16.51-64 18.71h-8L191 380l-10-1.04h-8C103.03 372.14 40.98 324.7 16.06 259 7.58 236.63 3.72 212.88 4 189l.91-10c2.3-33.38 13.18-64.28 32.12-92 25.8-37.78 66.8-64.53 110.97-75.53l25-4.3 12-.75Zm-4 20.86c-16.13 2.32-28.34 3.84-44 9.41C93.16 52.29 57.73 84.32 38.86 127 27.67 152.31 24.68 173.64 25 201c.13 10.69 3.32 26.64 6.29 37C47.07 292.96 91.01 336.49 146 352.14c11.42 3.25 28.21 6.72 40 6.86 31.08.36 56.85-3.69 85-17.76 19.99-9.99 40.12-24.83 54.2-42.24 22.22-27.48 38.74-64.12 38.8-100v-14c-.14-11.41-3.43-26.97-6.58-38C335.89 71.54 258.89 20.04 181 27.28Z"
    />
    <path
      stroke="#000"
      d="M66 142c6.24-4.51 6.91-7.1 12.01-11.91l22.08-17.92L113 104c18.12-12.05 19.3-12.8 39-21.79 23.68-10.81 31.46-14.44 58-16.3l9-.88c5.96 0 24.07 2.58 30 4.12 4.45 1.16 10.13 2.03 13 5.85l2-1c4.76 4.86 14.74 9.7 18.82 15.21 8.97 12.12 5.71 37.37.74 50.79-1.55 4.19-6.24 14.03-8.88 17.42-1.72 2.2-5.88 6.39-5.15 9.4.71 2.94 9.85 7.7 14.05 12.23 13.53 14.61 23.4 26.04 23.42 46.95.04 35.63-19.9 57.19-52 69.8l-23.28 7.43c-1.74.47-2.16.13-3.72 0-1.98 1.87-2.25 1.39-5 .77-3.1 3.47-10.81 3.18-15 2-3.07 3.42-13.4 2-18 2h-28c-13.9-.07-18.1-3.4-23-4-5.69-5.69-12.42-5.82-16.45-14.09-4.15-8.5-1.59-14.31-1.55-22.91l1-20c.06-4.81 1.68-11.67.7-16-1.97-8.76-15.5-16.46-15.62-25-.12-9.25 8.21-14.6 12.27-22 1.91-3.48 1.64-6.19 1.65-10 .02-11.36.33-24.03-2.91-35-1.14-3.86-3.94-10.31-8.09-11.64-4.31-1.37-6.02 3.8-12 4.64-2.2 4.03-14.86 16-19 18-.57 3.48-1.18 4.08-3.12 7-4.42 6.65-5.33 6.35-12.88 5l-.57-12.91L66 142Zm195 1c.52-7.19 4.86-9.13 5-21 .04-4.01.23-8.16-1.11-12-4.68-13.44-26.92-20.47-39.89-20.12-5.65.16-9.4.48-15-.88-3.97 2.92-16.45 3.46-22 4.66-11.01 2.39-21.56 5.75-32 9.94-4.44 1.78-11.35 6.25-15 6.4-3.65 5.59-3.11 9.36 3 13l-1 2h2l3.2 12 3.8 28 21-4c4.34-3.33 12.52-3.44 18-4.06 14.56-1.62 25.34-2.42 40 0 4.89.78 10.05.9 14 4.06 7.67-3.8 8.92-10.69 15-16l1-2Zm-32 36-20-3.12-14-.88c-3.43 2.53-5.95 2-10 2.81l-20 4.94c-3.65 1.2-9.21 3.62-10.94 7.29-.88 2.05-.08 8.24 0 11.16H162c10.67-.2 33.6-7.44 44-11.39 4.67-1.78 13.26-3.74 16-7.81l2 1v-2l5-2Zm52 30c-6.5-6.48-6.19-11.82-19-19.4-1.65-.97-4.16-2.48-6-2.9-4.86-1.1-8.83 3.16-11.91 6.3-8.98 9.15-12.87 10.18-24.09 15.75-4.53 2.25-11.25 3.98-14 8.25l-2-1v2l-2 1-3-1c-3.91 3.14-8.21 3.36-13 4.26l-21 4.13c-4 .75-10.53 1.05-12.83 4.83-1.83 3.03-1.17 14.73-1.17 18.78l4-3 2 1 4-1c3.61-2.89 6.6-2.88 11-3.88 11.25-2.55 16.66-2.27 28-2.12 3.14.05 10.37.48 10.37 5 0 3.96-6.48 5.01-9.37 5.6l-23 3.82c-4.41.99-10.11 3.54-14 3.58-3.92 4.45-12.04 6.76-11.25 13.98.39 3.56 3.25 4.92 6.25 5.98 6.01 2.11 14.63 3.03 21 3.04 15.81.02 30.79-1.32 46-6.02 4.67-1.45 12.22-2.86 15-6.98l2-1 3 1c6.72-7.18 14.62-7.17 24.79-19 8.12-9.44 7.41-17.05 11.21-22-1.48-6.1-1.08-7.96 0-14l-1-5Z"
    />
  </svg>
);
export default SvgLogo;
