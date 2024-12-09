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
        let obj = {}
        // uz
        // data.map((item) => {
        //   if (!item?.is_exclude) {
        //     obj = { ...obj, [item.name]: item.uz }
        //   }
        // })
        //ru
        data.map((item) => {
          if (!item?.is_exclude) {
            obj = { ...obj, [item.name]: item.ru }
          }
        })
        console.log(obj)
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
