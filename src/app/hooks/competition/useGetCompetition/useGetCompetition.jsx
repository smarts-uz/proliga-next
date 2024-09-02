import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setCompetition } from 'app/lib/features/competition/competition.slice'

export const useGetCompetition = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()

  const getCompetition = async () => {
    setIsLoading(false)
    setError(null)

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('competition')
        .select('id, title, flag, country_id, slug')

      if (error) {
        setError(error.message)
        toast.error(error.message)
      }
      if (data) {
        dispatch(setCompetition(data))
        setData(data)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { getCompetition, isLoading, error, data }
}
