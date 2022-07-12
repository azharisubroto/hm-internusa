import { AppProps } from 'next/app';
// import { AppProps, NextWebVitalsMetric } from 'next/app';
// import '@/styles/global.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/400-italic.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/700-italic.css';
import '@fontsource/poppins/900.css';
import '@fontsource/poppins/900-italic.css';

import { setup } from 'twind';
import twindConfig from '../twind.config';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
// console.log(metric);
// }

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <style global jsx>{`
        html,
        body {
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
        }
      `}</style>
    </>
  );
}
