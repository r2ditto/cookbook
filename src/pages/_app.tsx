import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";

Amplify.configure(awsExports);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
