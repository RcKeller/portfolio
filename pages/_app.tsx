import "prismjs/themes/prism-okaidia.css"
import '../styles/globals.css'
import "../styles/index.scss";
import "../styles/template.scss";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
