'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import { supabase } from './lib/supabaseClient'
import { useState, useEffect } from 'react'
import { Archivo } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClient } from '@supabase/supabase-js'
import { supabase } from './lib/supabaseClient'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
})

export default function RootLayout({ children }) {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  // if (!session) {
  //   return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
  // }

  return (
    <html lang="en">
      <head>
        <title>Proliga</title>
        <meta name="description" content="Bu sportlar haqida web sayt" />
      </head>
      <body className={`${archivo.className} bg-black text-white`}>
        {/* <Auth supabaseClient={supabase}> */}
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        {/* </Auth> */}
      </body>
    </html>
  )
}
