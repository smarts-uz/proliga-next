import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { useRefreshUserTable } from '../useRefreshUserTable/useRefreshUserTable'

export const usePurchasePackage = () => {
  const { t } = useTranslation()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { refreshUserTable } = useRefreshUserTable()
  const { userTable } = useSelector((state) => state.auth)
  const { currentTour } = useSelector((state) => state.tours)
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const { currentCompetition } = useSelector((state) => state.competition)

  const purchasePackage = async ({ package_id, system }) => {
    if (!userTable?.id) {
      setError('User not found')
      toast.error('User not found', { theme: 'dark' })
      return
    }
    if (!currentTeam?.id) {
      setError('Team not found')
      toast.error('Team not found', { theme: 'dark' })
      return
    }
    if (!currentTour?.id) {
      setError('Tour not found')
      toast.error('Tour not found', { theme: 'dark' })
      return
    }
    if (!currentCompetition?.id) {
      setError('Competition not found')
      toast.error('Competition not found', { theme: 'dark' })
      return
    }
    if (!package_id) {
      setError('Package not found')
      toast.error('Package not found', { theme: 'dark' })
      return
    }
    if (!system) {
      setError('System not found')
      toast.error('System not found', { theme: 'dark' })
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
