// import Image from 'next/image'
// import { useCreateTeam } from 'app/hooks/competition/useCreateTeam/useCreateTeam'
// import { useEffect, useState } from 'react'
// import { FORMATIONS } from 'app/utils/formations.util'
// import { useRouter } from 'next/navigation'
// import { useSelector } from 'react-redux'
// import { selectTeams } from 'app/lib/features/teams/teams.selector'
// import { useTranslation } from 'react-i18next'
// import {
//   DialogContent,
//   DialogTitle,
//   Dialog,
//   DialogDescription,
// } from '@/components/ui/dialog'
// import { Input } from '@/components/ui/input'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
// import { toast } from 'react-toastify'
// import { validateTeamName } from 'app/utils/validateTeamName.util'

// const CompetitionModal = ({ toggleModal, competition, isModalOpen }) => {
//   const [title, setTitle] = useState('')
//   const [formation, setFormation] = useState(FORMATIONS['4-3-3'])
//   const [active, setActive] = useState(false)
//   const router = useRouter()
//   const selectedTeams = useSelector(selectTeams)
//   const { t } = useTranslation()

//   const { createTeam, isLoading, error, data } = useCreateTeam()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const isValid = validateTeamName(title, t)

//     if (!isValid) return

//     setActive(true)
//     await createTeam({ title, formation, competition_id: competition.id })
//   }

//   useEffect(() => {
//     if (active && data && !isLoading && !error) {
//       const currentGame = selectedTeams.find(
//         (game) => game.competition_id === competition.id
//       )
//       setActive(false)
//       setTitle('')
//       setFormation(FORMATIONS['4-3-3'])
//       currentGame && router.push(`/play/${competition.slug}/${currentGame.id}`)
//       toggleModal()
//     }
//   }, [
//     active,
//     competition,
//     router,
//     selectedTeams,
//     data,
//     isLoading,
//     error,
//     toggleModal,
//   ])

//   useEffect(() => {
//     if (error) {
//       setActive(false)
//     }
//   }, [error])

//   return (
//     <Dialog onOpenChange={toggleModal} open={isModalOpen}>
//       <DialogContent className="lg:max-w-max-w-[32rem] flex max-w-[96%] flex-col items-center justify-between gap-4 rounded-md bg-neutral-950 px-4 py-6 text-neutral-100 xs:max-w-[90%] sm:max-w-96 md:max-w-[28rem] md:p-6 2xl:max-w-[36rem]">
//         <DialogTitle className="w-full text-lg font-semibold text-neutral-50 xs:text-xl lg:text-2xl">
//           {t('Jamoa yarating')}
//         </DialogTitle>
//         <form
//           onSubmit={(e) => handleSubmit(e)}
//           className="flex w-full flex-col gap-2"
//           id="team-create"
//           name="team-create"
//         >
//           <div className="flex flex-col gap-1">
//             <label
//               className="text-sm text-neutral-200 md:text-base"
//               htmlFor="team-title"
//             >
//               {t('Jamoa Ismi')}
//             </label>
//             <Input
//               type="text"
//               id="team-title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder={t('Jamoangizni nomi')}
//               className="h-10 w-full rounded border-neutral-700 bg-transparent p-2"
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <label
//               className="text-sm text-neutral-200 md:text-base"
//               htmlFor="formation"
//             >
//               {t('Taktika')}
//             </label>
//             <Select
//               defaultValue={FORMATIONS['4-3-3']}
//               onValueChange={(value) => setFormation(value)}
//             >
//               <SelectTrigger className="h-10 w-full rounded border border-neutral-700 bg-neutral-800 bg-transparent p-2 outline-none">
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 {Object.keys(FORMATIONS).map((key, index) => (
//                   <SelectItem value={FORMATIONS[key]} key={index}>
//                     {key}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="mt-2 rounded border border-primary bg-black py-2 text-white hover:bg-opacity-80 hover:text-primary"
//           >
//             {isLoading ? (
//               <Image
//                 src="/icons/loading.svg"
//                 width={24}
//                 height={24}
//                 alt="loading"
//                 className="filter-neutral-50 mx-auto size-6 animate-spin"
//               />
//             ) : (
//               <>{t('Saqlash')}</>
//             )}
//           </button>
//         </form>
//         <DialogDescription className="hidden">Jamoa yaratish</DialogDescription>
//       </DialogContent>
//     </Dialog>
//   )
// }

// export default CompetitionModal
import Image from 'next/image'
import { useCreateTeam } from 'app/hooks/competition/useCreateTeam/useCreateTeam'
import { useEffect, useState } from 'react'
import { FORMATIONS } from 'app/utils/formations.util'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { selectTeams } from 'app/lib/features/teams/teams.selector'
import { useTranslation } from 'react-i18next'
import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'react-toastify'

const CompetitionModal = ({ toggleModal, competition, isModalOpen }) => {
  const [title, setTitle] = useState('')
  const [formation, setFormation] = useState(FORMATIONS['4-3-3'])
  const [active, setActive] = useState(false)
  const router = useRouter()
  const selectedTeams = useSelector(selectTeams)
  const { t } = useTranslation()

  const { createTeam, isLoading, error, data } = useCreateTeam()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validateString(title, t)

    if (!isValid) return

    setActive(true)
    await createTeam({ title, formation, competition_id: competition.id })
  }

  useEffect(() => {
    if (active && data && !isLoading && !error) {
      const currentGame = selectedTeams.find(
        (game) => game.competition_id === competition.id
      )
      setActive(false)
      setTitle('')
      setFormation(FORMATIONS['4-3-3'])
      currentGame && router.push(`/play/${competition.slug}/${currentGame.id}`)
      toggleModal()
    }
  }, [
    active,
    competition,
    router,
    selectedTeams,
    data,
    isLoading,
    error,
    toggleModal,
  ])

  useEffect(() => {
    if (error) {
      setActive(false)
    }
  }, [error])

  return (
    <Dialog onOpenChange={toggleModal} open={isModalOpen}>
      <DialogContent className="flex max-w-[95%] flex-col items-center justify-between gap-4 rounded-lg border border-neutral-50/25 bg-gradient-to-br from-blue-950 to-red-950 px-4 py-6 text-white shadow-xl transition-all duration-300 ease-in-out sm:max-w-[28rem] md:gap-6 md:px-6 md:py-8 lg:max-w-[32rem] 2xl:max-w-[36rem]">
        <div className="w-full text-center">
          <Image
            src="/favicon.svg"
            width={48}
            height={48}
            alt="Soccer Ball"
            className="mx-auto mb-2 md:mb-4"
          />
          <DialogTitle className="text-xl font-bold text-yellow-400 xs:text-2xl sm:text-3xl lg:text-4xl">
            {t('Create Your Team')}
          </DialogTitle>
          <DialogDescription className="mt-1 text-sm text-yellow-200 sm:mt-2 sm:text-base">
            {t('Join the league and lead your team to victory!')}
          </DialogDescription>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex w-full flex-col gap-3 sm:gap-4"
          id="team-create"
          name="team-create"
        >
          <div className="flex flex-col gap-1 sm:gap-2">
            <label
              className="text-sm font-semibold text-yellow-200 sm:text-base"
              htmlFor="team-title"
            >
              {t('Team Name')}
            </label>
            <Input
              type="text"
              id="team-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t('Enter your team name')}
              className="h-10 w-full rounded-md border-2 border-blue-700 bg-blue-800 bg-opacity-50 p-2 text-sm text-white placeholder-blue-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-yellow-700 dark:bg-gray-800 dark:placeholder-yellow-300 dark:focus:border-yellow-500 dark:focus:ring-yellow-500 sm:h-12 sm:p-3 sm:text-base"
            />
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <label
              className="text-sm font-semibold text-blue-200 dark:text-yellow-200 sm:text-base"
              htmlFor="formation"
            >
              {t('Formation')}
            </label>
            <Select
              defaultValue={FORMATIONS['4-3-3']}
              onValueChange={(value) => setFormation(value)}
            >
              <SelectTrigger className="h-10 w-full rounded-md border-2 border-blue-700 bg-blue-800 bg-opacity-50 p-2 text-sm text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-yellow-700 dark:bg-gray-800 dark:focus:border-yellow-500 dark:focus:ring-yellow-500 sm:h-12 sm:p-3 sm:text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-blue-900 text-white dark:bg-gray-800">
                {Object.keys(FORMATIONS).map((key, index) => (
                  <SelectItem
                    value={FORMATIONS[key]}
                    key={index}
                    className="hover:bg-blue-800 dark:hover:bg-gray-700"
                  >
                    {key}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 rounded-md bg-green-600 py-2 text-base font-bold text-white transition-all hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-blue-900 disabled:opacity-50 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-500 dark:focus:ring-offset-gray-900 sm:mt-4 sm:py-3 sm:text-lg"
          >
            {isLoading ? (
              <Image
                src="/icons/loading.svg"
                width={24}
                height={24}
                alt="loading"
                className="mx-auto size-5 animate-spin dark:invert dark:filter sm:size-6"
              />
            ) : (
              <>{t('Create Team')}</>
            )}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function validateString(input, t) {
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

export default CompetitionModal
