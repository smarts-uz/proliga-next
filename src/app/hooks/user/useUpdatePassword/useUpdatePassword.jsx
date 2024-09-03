import { useState } from 'react'

export const useUpdatePassword = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const editPassword = async (password) => {
    try {
      setIsLoading(true)
      setError(null)
      if (password) {
        const { data, error } = await supabase.auth.updateUser({
          password: password,
        })
      }
      if (error) {
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (data?.user && data?.session) {
        setData(data)
        toast.success("ma'lumot taxrirlandi")
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { editPassword, isLoading, error }
}
