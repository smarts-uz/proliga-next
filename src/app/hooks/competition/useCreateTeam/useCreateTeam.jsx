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
      toast.warning(t('Jamoa tuzish uchun tizimga kirishingiz kerak'), {
        theme: 'dark',
      })
      router.push('/auth')
      return
    }

    if (!title) {
      setError('Ism bolishi shart')
      toast.warning(t('Ism bolishi shart'), { theme: 'dark' })
      return
    }

    if (!formation) {
      setError('Taktika bolishi shart')
      toast.warning(t('Taktika bolishi shart'), { theme: 'dark' })
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
        if (error?.code === '23505') {
          toast.error(t('Ushbu jamoa allaqachon yaratilgan'), { theme: 'dark' })
        } else {
          toast.error(error.message, { theme: 'dark' })
        }
        return
      }
      if (data) {
        setData(data[0])
        dispatch(addGameToTeam(data[0]))
        toast.success(t('Jamoa muvaffaqiyatli yaratildi'), { theme: 'dark' })
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { createTeam, isLoading, error, data }
}
