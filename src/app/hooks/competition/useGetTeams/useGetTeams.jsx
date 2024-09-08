import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setGame } from 'app/lib/features/competition/competition.slice'

export const useGetTeams = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  const { userTable } = useSelector((state) => state.auth)

  const getTeams = async () => {
    setIsLoading(false)
    setError(null)

    if (!userTable) {
      setError('You must be logged in to create a team')
      toast.error('You must be logged in to create a team')
      return
    }
    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('team')
        .select('*')
        .eq('user_id', userTable.id)

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
  return { getTeams, isLoading, error, data }
}
