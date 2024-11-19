import { useState } from 'react'
import { toast } from 'react-toastify'
import { supabase } from '../../../lib/supabaseClient'
import { useTranslation } from 'react-i18next'
import { PAYMENTOPTIONS } from 'app/utils/paymentOptions.util'
import { useRouter } from 'next/navigation'

export const useBuyPackageWithWallet = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const { t } = useTranslation()
  const router = useRouter()

  const buyPackageWithWallet = async ({ team_id, package_id }) => {
    setIsLoading(false)
    setError(null)

    if (!team_id) {
      setError(t('Jamoa ID kiritilmagan!'))
      toast.error(t('Jamoa ID kiritilmagan!'), { theme: 'dark' })
    }
    if (!package_id) {
      setError('Package not found')
      toast.error(t('Paket topilmadi'), { theme: 'dark' })
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('pay_expense')
        .insert({
          team_id,
          pay_package_id: package_id,
          system: PAYMENTOPTIONS.WALLET,
          status: 1,
          transaction_id: btoa(Date.now() + team_id + PAYMENTOPTIONS.WALLET),
        })
        .select()
        .single()

      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data) {
        setData(data)
        toast.success('Siz mufaqiyatli paket sotib olindigiz', {
          theme: 'dark',
        })
        router.push('/championships')
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { buyPackageWithWallet, isLoading, error, data }
}
