import { toast } from 'react-toastify'

export function validateTeamName(input, t) {
  if (input.length === 0) {
    toast.warning(t('Input cannot be empty.'), { theme: 'dark' })
    return false
  }
  if (input.length > 20) {
    toast.warning(t('Input must be 20 characters or less.'), { theme: 'dark' })
    return false
  }

  const latinRegex = /[a-zA-Z]/
  const cyrillicRegex = /\p{Script=Cyrillic}/u
  const validCharsRegex = /^[\p{Script=Cyrillic}a-zA-Z0-9.\-@_&$]+$/u

  if (latinRegex.test(input) && cyrillicRegex.test(input)) {
    toast.warning(
      t('Input must contain either Latin or Cyrillic characters, not both.'),
      { theme: 'dark' }
    )
    return false
  }

  if (!latinRegex.test(input) && !cyrillicRegex.test(input)) {
    toast.warning(
      t('Input must contain either Latin or Cyrillic characters.'),
      {
        theme: 'dark',
      }
    )
    return false
  }

  if (!validCharsRegex.test(input)) {
    toast.warning(
      t(
        'Input contains invalid characters. Only Latin, Cyrillic, numbers, and .-@_&$ are allowed.'
      ),
      { theme: 'dark' }
    )
    return false
  }

  return true
}
