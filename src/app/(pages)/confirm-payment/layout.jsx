'use client'

import { useEffect } from 'react'

export default function ConfirmPaymentLayout({ children }) {
  useEffect(() => {
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return <main className="min-h-screen pt-16">{children}</main>
}
