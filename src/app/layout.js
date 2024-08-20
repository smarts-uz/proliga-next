import { Archivo } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Proliga',
  description: 'This is a sports website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${archivo.className} bg-black text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
