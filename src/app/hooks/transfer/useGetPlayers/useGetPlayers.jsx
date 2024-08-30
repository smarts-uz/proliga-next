import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setPlayers } from 'app/lib/features/transfer/transfer.slice'

export const useGetPlayers = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getPlayers = async ({ setData }) => {
    setIsLoading(false)
    setError(null)

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('player')
        .select('id, name, position, club(name), price')

      if (error) {
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (data) {
        setData(data)
        dispatch(setPlayers(data))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { getPlayers, isLoading, error }
}
