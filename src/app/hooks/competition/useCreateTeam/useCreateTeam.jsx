import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { useRouter } from 'next/navigation'
import { addGameToTeam } from 'app/lib/features/teams/teams.slice'
import { useTranslation } from 'react-i18next'
export const useCreateTeam = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const { userTable, userAuth } = useSelector((state) => state.auth)
  const router = useRouter()
  const { t } = useTranslation()
  const createTeam = async ({ title, formation, competition_id }) => {
    setIsLoading(false)
    setError(null)

    if (!userTable && !userAuth) {
      setError('"Jamoa tuzish uchun tizimga kirishingiz kerak')
      toast.error(t("Jamoa tuzish uchun tizimga kirishingiz kerak"))
      router.push('/auth')
      return
    }

    if (!title) {
      setError("Ism bolishi shart")
      toast.error(t("Ism bolishi shart"))
      return
    }

    if (!formation) {
      setError("Taktika bolishi shart")
      toast.error(t("Taktika bolishi shart"))
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('team')
        .insert({
          name: title,
          formation,
          competition_id,
          user_id: userTable.id,
        })
        .select()

      if (error) {
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (data) {
        setData(data[0])
        dispatch(addGameToTeam(data[0]))
        toast.success(t("Jamoa muvaffaqiyatli yaratildi"))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { createTeam, isLoading, error, data }
}
