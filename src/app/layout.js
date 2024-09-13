'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReduxProvider from './store.provider'
import GetInitialState from './GetInitialState'
import { Archivo } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-phone-number-input/style.css'

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Proliga.uz</title>
        <meta name="description" content="Bu sportlar haqida web sayt" />
        <link rel="icon" href="./favicon.svg" type="image/x-icon" />
      </head>
      <ReduxProvider>
        <body
          className={`${archivo.className} dark min-h-screen bg-black text-white`}
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
