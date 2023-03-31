import React, { useState } from 'react'
import { AppProps } from 'next/app'
import '../styles/main.scss'
import useTimeout from '../hooks/useTimeout'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function MyApp({ Component, pageProps }: AppProps) {
  // export default function MyApp({ Component, pageProps }: AppProps) {
  const [{ isMenuVisible, loading }, setLoadingState] = useState({
    isMenuVisible: false,
    loading: 'is-loading',
  })
  useTimeout(() => {
    setLoadingState({ isMenuVisible, loading: '' })
    // return () => { setLoadingState}
  }, 100)
  const handleToggleMenu = () => {
    console.warn('setLoadingState', !isMenuVisible)
    setLoadingState({ loading, isMenuVisible: !isMenuVisible })
  }

  console.warn('isMenuVisible', { isMenuVisible, loading })
  return (
    // <Component {...pageProps} />
    <div
      className={`body ${loading} ${isMenuVisible ? 'is-menu-visible' : ''}`}
    >
      <div id="wrapper">
        <Header onToggleMenu={handleToggleMenu} />

        <Component {...pageProps} />
        <Contact />
        <Footer />
      </div>
      <Menu onToggleMenu={handleToggleMenu} />
    </div>
  )
}
