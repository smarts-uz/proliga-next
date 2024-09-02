import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setStatistics } from 'app/lib/features/statistics/statistics.slice'

export const useGetPlayerStats = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()

  const getPlayerStats = async () => {
    setIsLoading(false)
    setError(null)

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('player_result')
        .select('*, player_id(name)')

      if (error) {
        setError(error.message)
        toast.error(error.message)
      }
      if (data) {
        dispatch(setStatistics(data))
        setData(data)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { getPlayerStats, isLoading, error, data }
}
