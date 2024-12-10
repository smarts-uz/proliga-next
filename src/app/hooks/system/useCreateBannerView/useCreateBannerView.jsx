import { useState } from 'react'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'

export const useCreateBannerView = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { userTable, userAuth, geo, agent } = useSelector((state) => state.auth)

  const createBannerView = async ({ banner_id }) => {
    setIsLoading(false)
    setError(null)

    if (!userTable?.id || !userAuth?.user?.id) {
      setError('User not found')
      toast.error('User not found', { theme: 'dark' })
      return
    }

    if (!banner_id) {
      setError('Banner id is required')
      toast.error('Banner id is required', { theme: 'dark' })
      return
    }

    if (!agent || !geo) {
      setError('Agent or geo is not found')
      toast.error('Agent or geo is not found', { theme: 'dark' })
      return
    }

    try {
      setIsLoading(true)

      const { error } = await supabase
        .from('banner_view')
        .insert({ banner_id, geo: geo, agent: agent, user_id: userTable.id })

      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { createBannerView, isLoading, error }
}
