import React from "react";
import { AppProps } from "next/app"; // for typescript
import GlobalStyles from "../styles/GlobalStyles";

// interface MyAppProps {
//   Component: React.FC;
//   pageProps: any;
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
