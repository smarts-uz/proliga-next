import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

export const useBuyPackageWithClick = () => {
  const router = useRouter()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const SERVICE_ID = process.env.NEXT_PUBLIC_CLICK_EXPENSE_SERVICE_ID
  const MERCHANT_ID = process.env.NEXT_PUBLIC_CLICK_MERCHANT_ID
  const RETURN_URL = process.env.NEXT_PUBLIC_URL
  const { userTable } = useSelector((store) => store.auth)
  const { currentPackage } = useSelector((store) => store.packages)
  const { currentTeam } = useSelector((store) => store.currentTeam)

  const buyPackageWithClick = () => {
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

      const url = new URL('https://my.click.uz/services/pay')
      url.searchParams.append('service_id', SERVICE_ID)
      url.searchParams.append('merchant_id', MERCHANT_ID)
      url.searchParams.append('amount', currentPackage.price)
      url.searchParams.append(
        'transaction_param',
        `${currentTeam?.id}-${currentPackage?.id}`
      )
      url.searchParams.append('return_url', RETURN_URL)

      router.push(url.href)
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { buyPackageWithClick, isLoading, error }
}
