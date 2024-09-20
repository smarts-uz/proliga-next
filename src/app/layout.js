'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReduxProvider from './store.provider'
import GetInitialState from './GetInitialState'
import { DM_Sans } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-phone-number-input/style.css'
import './lib/i18n.config'

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <head>
        <title>Proliga.uz</title>
        <meta name="description" content="Bu sportlar haqida web sayt" />
        <link rel="icon" href="./favicon.svg" type="image/x-icon" />
      </head>
      <ReduxProvider>
        <body
          className={`${dmSans.className} dark min-h-screen bg-black text-white`}
        >
          <GetInitialState>
            <Navbar />
            {children}
            <ToastContainer />
            <Footer />
          </GetInitialState>
        </body>
      </ReduxProvider>
    </html>
  )
}
