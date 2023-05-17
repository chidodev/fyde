import AppProvider from '@/context/AppContext'
import '@/styles/globals.css'
import THEME from '@/theme'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <AppProvider>
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  </AppProvider>
}
