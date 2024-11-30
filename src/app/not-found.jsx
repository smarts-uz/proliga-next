'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-900 p-4">
      <Card className="w-full max-w-md border-4 border-yellow-500 bg-gray-800">
        <div className="p-6 text-center">
          <h1 className="mb-4 text-6xl font-bold text-yellow-500">404</h1>
          <div className="relative mx-auto mb-6 h-24 w-24">
            <div className="absolute inset-0 rounded-full bg-yellow-500"></div>
            <div className="absolute inset-2 rounded-full bg-gray-800"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-yellow-500">{t("XATO")}</span>
            </div>
          </div>
          <h2 className="mb-4 text-2xl font-semibold text-yellow-400">
            {t("Sahifa topilmadi")}
          </h2>
          <p className="mb-6 text-gray-300">
            {t("Kechirasiz, siz so'ragan sahifa mavjud emas. Iltimos, manzilni tekshiring yoki quyidagi havoladan foydalaning.")}
            
          </p>
          <Button
            asChild
            className="bg-yellow-500 text-gray-900 hover:bg-yellow-600"
          >
            <Link href="/">{t("Bosh sahifaga qaytish")}</Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}
