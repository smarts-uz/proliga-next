import { useState } from 'react'
import { toast } from 'react-toastify'
import { supabase } from '../../../lib/supabaseClient'

export const useGetPage = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const getPage = async (name) => {
    setIsLoading(false)
    setError(null)

    if (!name) {
      setError('Name is required')
      toast.error('Name is required')
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('system_language')
        .select('id, name, ru, uz')
        .eq('name', name)
        .single()

      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data) {
        setData(data)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { getPage, isLoading, error, data }
}
