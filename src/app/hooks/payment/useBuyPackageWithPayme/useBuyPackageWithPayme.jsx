import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

export const useBuyPackageWithPayme = () => {
  const router = useRouter()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { lang } = useSelector((store) => store.systemLanguage)
  const { userTable } = useSelector((store) => store.auth)
  const { currentPackage } = useSelector((store) => store.packages)
  const { currentTeam } = useSelector((store) => store.currentTeam)
  const RETURN_URL = process.env.NEXT_PUBLIC_URL

  const buyPackageWithPayme = () => {
    setIsLoading(false)
    setError(null)

    if (!userTable?.id) {
      setError('User not found')
      toast.error('User not found', { theme: 'dark' })
      return
    }
    if (!currentTeam?.id) {
      setError(t('Jamoa ID kiritilmagan!'))
      toast.error(t('Jamoa ID kiritilmagan!'), { theme: 'dark' })
    }
    if (!currentPackage || !currentPackage?.price) {
      setError(t('Joriy paket yo‘q!'))
      toast.error(t('Joriy paket yo‘q!'), { theme: 'dark' })
      return
    }

    try {
      setIsLoading(true)

      const url = new URL('https://checkout.paycom.uz')
      const m = process.env.NEXT_PUBLIC_PAYME_EXPENSE_ID // merchant id
      const a = currentPackage?.price * 100 // amount
      const l = lang
      const cr = 4217 // UZS
      const ct = 15000 // Millinseconds to wait
      const encoded = btoa(
        `m=${m};ac.team_id=${currentTeam?.id};ac.package_id=${currentPackage?.id};a=${a};l=${l};c=${RETURN_URL};ct=${ct};cr=${cr};`
      )
      router.push(url.href + encoded)
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { buyPackageWithPayme, isLoading, error }
}
