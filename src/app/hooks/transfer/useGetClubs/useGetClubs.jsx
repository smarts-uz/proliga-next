import { useState } from 'react'
import { toast } from 'react-toastify'
import { supabase } from '../../../lib/supabaseClient'

export const useGetClubs = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getClubs = async ({ setData }) => {
    setIsLoading(false)
    setError(null)

    try {
      setIsLoading(true)

      const { data, error } = await supabase.from('club').select('id, name')

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
  return { getClubs, isLoading, error }
}
