import * as React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from 'next/document'

export default function MyDocument({}: DocumentProps) {
  return (
    <Html lang="en">
      <Head>
        {/* <title>Next.js Starter</title> */}
        <meta name="description" content="Next.js Starter - Forty" />
        {/* PWA primary color */}
        {/* <meta
          name="theme-color"
          content={theme.palette.primary.main}
        /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link href="/static/css/skel.css" rel="stylesheet" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
