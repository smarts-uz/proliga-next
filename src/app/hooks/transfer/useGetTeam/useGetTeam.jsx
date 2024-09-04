import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setTeam } from 'app/lib/features/game/game.slice'

export const useGetTeam = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()

  const getTeam = async (id) => {
    setIsLoading(false)
    setError(null)

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('team')
        .select('*, competition_id(title, id)')
        .eq('id', id)

      if (error) {
        setError(error.message)
        toast.error(error.message)
      }
      if (data) {
        setData(data)
        dispatch(setTeam(data[0]))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { getTeam, isLoading, error, data }
}
