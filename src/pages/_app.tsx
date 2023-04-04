import React, { useState } from 'react'
import { AppProps } from 'next/app'
import useTimeout from '../hooks/useTimeout'
import { GoogleAnalytics } from 'nextjs-google-analytics'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import '../styles/main.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  // export default function MyApp({ Component, pageProps }: AppProps) {
  const [{ isMenuVisible, loading }, setLoadingState] = useState({
    isMenuVisible: false,
    loading: 'is-loading',
  })

  useTimeout(() => {
    setLoadingState({ isMenuVisible, loading: '' })
  }, 100)

  const handleToggleMenu = () => {
    setLoadingState({ loading, isMenuVisible: !isMenuVisible })
  }

  return (
    <div
      className={`body ${loading} ${isMenuVisible ? 'is-menu-visible' : ''}`}
    >
      <GoogleAnalytics trackPageViews />
      <div id="wrapper">
        <Header onToggleMenu={handleToggleMenu} />

        <Component {...pageProps} />
        {/* <Contact /> */}
        <Footer />
      </div>
      <Menu onToggleMenu={handleToggleMenu} />
    </div>
  )
}
