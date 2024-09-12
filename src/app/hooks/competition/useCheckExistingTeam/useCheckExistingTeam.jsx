import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { useRouter } from 'next/navigation'

export const useCheckExistingTeam = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const { userTable, userAuth } = useSelector((state) => state.auth)
  const router = useRouter()

  const checkTeam = async ({ competition_id, season_id }) => {
    setIsLoading(false)
    setError(null)

    if (!userTable && !userAuth) {
      setError('You must be logged in to create a team')
      toast.error('You must be logged in to create a team')
      router.push('/auth')
      return
    }

    if (!competition_id || !season_id) {
      setError('Competition and season are required')
      toast.error('Competition and season are required')
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('team')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userTable.id)
        .eq('competition_id', competition_id)
        .eq('season_id', season_id)

      if (error) {
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (data) {
        setData(data)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { checkTeam, isLoading, error, data }
}
