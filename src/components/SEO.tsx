// src/components/seo.js

import Head from 'next/head'
import config from '../lib/config'

export interface ISEO {
  title?: string
  description: string
}

export default function SEO({ description, title }: ISEO) {
  return (
    <Head>
      <title>{`${title} | ${config.siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={config.siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  )
}
