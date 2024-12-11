import { useState } from 'react'
import { toast } from 'react-toastify'
import { supabase } from '../../../lib/supabaseClient'

export const useGenerateLanguage = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const generate = async () => {
    setIsLoading(false)
    setError(null)

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('system_language')
        .select('id, name, ru, uz, is_exclude')

      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data) {
        setData(data)
        let uz = {}
        let ru = {}
        // uz
        data.map((item) => {
          if (!item?.is_exclude) {
            uz = { ...uz, [item.name]: item.uz }
          }
        })
        //ru
        data.map((item) => {
          if (!item?.is_exclude) {
            ru = { ...ru, [item.name]: item.ru }
          }
        })
        console.log('ru', ru)
        console.log('uz', uz)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { generate, isLoading, error, data }
}
