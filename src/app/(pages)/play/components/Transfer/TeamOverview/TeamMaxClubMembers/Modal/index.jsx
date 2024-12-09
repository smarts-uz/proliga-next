// import Link from 'next/link'
// import { useTranslation } from 'react-i18next'
// import { PACKAGES } from 'app/utils/packages.util'
// import { useSelector, useDispatch } from 'react-redux'
// import {
//   DialogContent,
//   DialogTitle,
//   Dialog,
//   DialogDescription,
// } from '@/components/ui/dialog'
// import { setClubModal } from 'app/lib/features/teamPlayers/teamPlayers.slice'

// const TeamMaxClubMembersModal = () => {
//   const dispatch = useDispatch()
//   const { clubModal } = useSelector((store) => store.teamPlayers)
//   const { packages } = useSelector((store) => store.packages)
//   const { t } = useTranslation()

//   return (
//     <Dialog
//       onOpenChange={() => dispatch(setClubModal(!clubModal))}
//       open={clubModal}
//     >
//       <DialogContent className="flex max-w-[98%] flex-col items-center justify-between gap-4 rounded-md bg-neutral-950 px-4 py-6 text-neutral-100 xs:max-w-[90%] sm:max-w-[80%] md:max-w-[70%] md:p-6 lg:max-w-[55%] xl:max-w-[45%] 2xl:max-w-[40rem]">
//         <header className="space-y-2">
//           <DialogTitle className="text-base font-semibold sm:text-lg 2xl:text-xl">
//             {t('Bir jamoadan oyinchilarni sonini oshirishni hoxlaysizmi?')}
//           </DialogTitle>
//           <p className="text-xs text-neutral-300 md:text-sm xl:text-base">
//             {t('Musobaqada g‘alaba qozonish')}
//           </p>
//         </header>
//         <section className="flex w-full flex-col gap-2 text-sm sm:text-base">
//           {packages.map(
//             (item) =>
//               item.type === PACKAGES.single_club_count && (
//                 <Link key={item.id} href={`/confirm-payment/${item.id}`}>
//                   <div className="flex gap-2 rounded border border-neutral-400 p-2 transition-all hover:border-primary md:p-3">
//                     {t('Bir jamoadan')}
//                     <span className="font-bold">{item.amount}</span>
//                     {t('ta futbolchi sotib olish')}
//                   </div>
//                 </Link>
//               )
//           )}
//         </section>
//         <DialogDescription className="hidden">
//           Max Team players
//         </DialogDescription>
//       </DialogContent>
//     </Dialog>
//   )
// }

// export default TeamMaxClubMembersModal

'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { PACKAGES } from 'app/utils/packages.util'
import { useSelector, useDispatch } from 'react-redux'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { setClubModal } from 'app/lib/features/teamPlayers/teamPlayers.slice'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Users } from 'lucide-react'

const TeamMaxClubMembersModal = () => {
  const dispatch = useDispatch()
  const { clubModal } = useSelector((store) => store.teamPlayers)
  const { packages } = useSelector((store) => store.packages)
  const { t } = useTranslation()

  return (
    <Dialog
      onOpenChange={() => dispatch(setClubModal(!clubModal))}
      open={clubModal}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {t('Expand Your Club Roster!')}
          </DialogTitle>
          <DialogDescription className="text-base">
            {t('Boost your team\'s potential with more players from a single club.')}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          {packages.map(
            (item) =>
              item.type === PACKAGES.single_club_count && (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <Link href={`/confirm-payment/${item.id}`} className="block">
                      <Button
                        variant="ghost"
                        className="relative w-full h-full justify-start rounded-none border-l-4 border-primary px-4 py-2.5 text-left hover:bg-primary/10"
                      >
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            +{item.amount} {t('Players')}
                          </Badge>
                          <h3 className="text-lg font-semibold">
                            {t('Strengthen Your Squad')}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {t('Add')} {item.amount} {t('players from one club')}
                          </p>
                        </div>
                        <ArrowRight className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-primary" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
          )}
        </div>
        <div className="mt-6 flex items-center justify-center space-x-2 text-sm">
          <Users className="h-4 w-4 text-primary" />
          <p className="font-medium text-muted-foreground">
            {t('Build a stronger team for victory!')}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TeamMaxClubMembersModal

