import "prismjs/themes/prism-okaidia.css"
import '../styles/globals.css'
// import "../styles/index.scss";
// import "../styles/template.scss";



import type { AppProps } from 'next/app'
// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import { Navbar, Button, Link, Text, Switch, useTheme } from "@nextui-org/react";

// https://fontawesome.com/docs/web/use-with/react/use-with
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from "../components/Layout/";
config.autoAddCss = false

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '#A020F0'
    }
    // colors: {...}, // optional
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // primary: '#A020F0'
      // brand colors
      primaryLight: '$purple200',
      primaryLightHover: '$purple300',
      primaryLightActive: '$purple400',
      primaryLightContrast: '$purple600',
      primary: '$purple700',//
      primaryBorder: '$purple500',
      primaryBorderHover: '$purple600',
      primarySolidHover: '$purple700',
      primarySolidContrast: '$white',
      primaryShadow: '$purple500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',
    }
    // colors: {...}, // optional
  }
})


// 3. Wrap NextUIProvider with NextThemesProvider
// _app.jsx // _app.tsx


export default function App({ Component, pageProps }: AppProps) {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <Layout><Component {...pageProps} /></Layout>
      </NextUIProvider>
    </NextThemesProvider>
  )
}
