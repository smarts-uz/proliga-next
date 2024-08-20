import { Archivo } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700']
})

export const metadata = {
  title: 'Proliga',
  description: 'This is a sports website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
