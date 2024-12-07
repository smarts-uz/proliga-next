'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RootProvider from './providers/Root.provider'
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
        <meta
          name="description"
          content="Proliga Fantasy Futbol - bu vertual futbol o'yini bo'lib, unda ishtirokchilar haqiqiy futbol ligalarining haqiqiy o'yinchilariga asoslangan vertual jamoalarning murabbiylari bo'lishadi. Ushbu o'yinda ishtirokchilar futbolchilarnii tanlash orqali o'z jamoalarini yaratadilar va haqiqiy o'yinlariga qarab ochko oladilar. "
        />
        <link rel="icon" href="./favicon.svg" type="image/x-icon" />
      </head>
      <RootProvider>
        <body
          className={`${dmSans.className} dark min-h-screen scroll-smooth bg-black text-white antialiased`}
        >
          <Navbar />
          {children}
          <ToastContainer />
          <Footer />
        </body>
      </RootProvider>
    </html>
  )
}
