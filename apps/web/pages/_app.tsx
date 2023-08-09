import "@/styles/modern-css-reset.css";
import "@/styles/globals.css";

import { initFirebase } from "@/utils/init-firebase";
import type { AppProps } from "next/app";

if (typeof window !== "undefined") {
  initFirebase();
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
