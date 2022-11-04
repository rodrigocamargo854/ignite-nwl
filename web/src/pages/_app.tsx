import type { AppProps } from "next/app";
import "../pages/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
