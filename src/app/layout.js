'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReduxProvider from './store.provider'
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
        <title>Proliga</title>
        <meta name="description" content="Bu sportlar haqida web sayt" />
      </head>
      <ReduxProvider>
        <body className={`${archivo.className} min-h-svh bg-black text-white`}>
          <Navbar />
          {children}
          <ToastContainer />
          <Footer />
        </body>
      </ReduxProvider>
    </html>
  )
}
