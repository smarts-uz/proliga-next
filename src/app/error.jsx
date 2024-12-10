'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-900 p-4">
      <Card className="w-full max-w-md border-4 border-red-500 bg-gray-800">
        <div className="p-6 text-center">
          <h1 className="mb-4 text-6xl font-bold text-red-500">500</h1>
          <div className="relative mx-auto mb-6 h-24 w-24">
            <div className="absolute inset-0 rounded-full bg-red-500"></div>
            <div className="absolute inset-2 rounded-full bg-gray-800"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-red-500">STOP</span>
            </div>
          </div>
          <h2 className="mb-4 text-2xl font-semibold text-red-400">
            O&apos;yinda texnik to&apos;xtash!
          </h2>
          <p className="mb-6 text-gray-300">
            Afsuski, serverda xatolik yuz berdi. Jamoamiz bu muammoni hal qilish
            ustida ishlamoqda.
          </p>
          <div className="space-y-4">
            <Button
              onClick={reset}
              className="w-full bg-red-500 text-gray-900 hover:bg-red-600"
            >
              Qayta urinish
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/">Asosiy maydonga qaytish</Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
