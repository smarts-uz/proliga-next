import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { useRefreshUserTable } from '../useRefreshUserTable/useRefreshUserTable'

export const usePurchasePackage = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { userTable } = useSelector((state) => state.auth)
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const { currentTour } = useSelector((state) => state.tours)
  const { currentCompetition } = useSelector((state) => state.competition)
  const { t } = useTranslation()
  const { refreshUserTable } = useRefreshUserTable()

  const purchasePackage = async ({ package_id, system }) => {
    if (!amount) {
      setError('Amount is required')
      toast.error('Amount is required', { theme: 'dark' })
      return
    }
    if (!userTable?.id) {
      setError('User not found')
      toast.error('User not found', { theme: 'dark' })
      return
    }

    try {
      setIsLoading(true)
      setError('')

      const { data, error } = await supabase
        .from('pay_expense')
        .insert({
          team_id: currentTeam?.id,
          user_id: userTable?.id,
          tour_id: currentTour?.id,
          competition_id: currentCompetition?.id,
          pay_package_id: package_id,
          transaction_id: Math.floor(Math.random() * 10000),
          state: 0,
          detail: 'TEST',
          system,
        })
        .select()
        .single()

      if (error) {
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (data) {
        await refreshUserTable()
        toast.success(t('Paket sotib olindi'), { theme: 'dark' })
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { purchasePackage, isLoading, error }
}
