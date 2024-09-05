import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setTours } from 'app/lib/features/game/game.slice'

export const useGetTours = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getTours = async ({ competition_id }) => {
    setIsLoading(false)
    setError(null)

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('tour')
        .select('*')
        .eq('competition_id', competition_id)
        .order('created_at', { ascending: true })

      if (error) {
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (data) {
        dispatch(setTours(data))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { getTours, isLoading, error }
}
