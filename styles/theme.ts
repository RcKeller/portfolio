import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

import { createTheme as createNextUITheme } from '@nextui-org/react'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export default theme

// NEXTUI BELOW

// 2. Call `createTheme` and pass your custom values
export const lightTheme = createNextUITheme({
  type: 'light',
  theme: {
    colors: {
      primary: '#A020F0',
    },
    // colors: {...}, // optional
  },
})

export const darkTheme = createNextUITheme({
  type: 'dark',
  theme: {
    colors: {
      // primary: '#A020F0'
      // brand colors
      primaryLight: '$purple200',
      primaryLightHover: '$purple300',
      primaryLightActive: '$purple400',
      primaryLightContrast: '$purple600',
      primary: '$purple700', //
      primaryBorder: '$purple500',
      primaryBorderHover: '$purple600',
      primarySolidHover: '$purple700',
      primarySolidContrast: '$white',
      primaryShadow: '$purple500',

      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',
    },
    // colors: {...}, // optional
  },
})
