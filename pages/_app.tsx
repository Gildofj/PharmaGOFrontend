import "../styles/globals.css";
import "swiper/css";
import "swiper/css/bundle";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

import SWR from "../config/swr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ ...SWR }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
