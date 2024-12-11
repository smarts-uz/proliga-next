import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { PACKAGES } from 'app/utils/packages.util'
import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogDescription,
} from '@/components/ui/dialog'
import { setTransferModal } from 'app/lib/features/currentTeam/currentTeam.slice'

const TeamMaxTransfersModal = () => {
  const dispatch = useDispatch()
  const { transferModal } = useSelector((store) => store.currentTeam)
  const { packages } = useSelector((store) => store.packages)
  const { t } = useTranslation()

  return (
    <Dialog
      onOpenChange={() => dispatch(setTransferModal(!transferModal))}
      open={transferModal}
    >
      <DialogContent className="flex max-w-[98%] flex-col items-center justify-between gap-4 rounded-md bg-neutral-950 px-4 py-6 text-neutral-100 xs:max-w-[90%] sm:max-w-[80%] md:max-w-[70%] md:p-6 lg:max-w-[55%] xl:max-w-[45%] 2xl:max-w-[40rem]">
        <header className="space-y-2">
          <DialogTitle className="text-base font-semibold sm:text-lg 2xl:text-xl">
            {t('Transfer limitini oshirishni hoxlaysizmi?')}
          </DialogTitle>
          <p className="text-xs text-neutral-300 md:text-sm xl:text-base">
            {/* a bunch of text */}
            {t('update tranfer txt')}
          </p>
        </header>
        <section className="flex w-full flex-col gap-1 text-sm sm:text-base">
          {packages.map(
            (transfer) =>
              transfer.type === PACKAGES.transfer_count && (
                <Link
                  key={transfer.id}
                  href={`/confirm-payment/${transfer.id}`}
                >
                  <div className="flex gap-1 rounded border border-neutral-400 p-2 transition-all hover:border-primary md:p-3">
                    {t('Transfer limitni')}
                    <span className="font-bold">{transfer.amount} </span>
                    {t('taga oshirish')}
                  </div>
                </Link>
              )
          )}
        </section>
      </DialogContent>
      <DialogDescription className="hidden">Max Team players</DialogDescription>
    </Dialog>
  )
}

export default TeamMaxTransfersModal
// 'use client'

// import Link from 'next/link'
// import { useTranslation } from 'react-i18next'
// import { useSelector, useDispatch } from 'react-redux'
// import { PACKAGES } from 'app/utils/packages.util'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from '@/components/ui/dialog'
// import { setTransferModal } from 'app/lib/features/currentTeam/currentTeam.slice'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { ArrowRight, Zap } from 'lucide-react'

// const TeamMaxTransfersModal = () => {
//   const dispatch = useDispatch()
//   const { transferModal } = useSelector((store) => store.currentTeam)
//   const { packages } = useSelector((store) => store.packages)
//   const { t } = useTranslation()

//   return (
//     <Dialog
//       onOpenChange={() => dispatch(setTransferModal(!transferModal))}
//       open={transferModal}
//     >
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold">
//             {t('Boost Your Transfer Limit!')}
//           </DialogTitle>
//           <DialogDescription className="text-base">
//             {t('Upgrade your game strategy with more transfers.')}
//           </DialogDescription>
//         </DialogHeader>
//         <div className="mt-4 space-y-4">
//           {packages.map(
//             (transfer) =>
//               transfer.type === PACKAGES.transfer_count && (
//                 <Card key={transfer.id} className="overflow-hidden">
//                   <CardContent className="bg-neutral-900 p-0">
//                     <Link
//                       href={`/confirm-payment/${transfer.id}`}
//                       className="block"
//                     >
//                       <Button
//                         variant="ghost"
//                         className="relative h-full w-full justify-start rounded-none border-l-4 border-primary px-4 py-2.5 text-left hover:bg-primary/10"
//                       >
//                         <div className="">
//                           <Badge variant="secondary" className="mb-2">
//                             +{transfer.amount} {t('Transfers')}
//                           </Badge>
//                           <h3 className="text-lg font-semibold">
//                             {t('Expand Your Options')}
//                           </h3>
//                           <p className="text-muted-foreground text-sm">
//                             {t('Increase limit by')} {transfer.amount}
//                           </p>
//                         </div>
//                         <ArrowRight className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-primary" />
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               )
//           )}
//         </div>
//         <div className="mt-6 flex items-center justify-center space-x-2 text-sm">
//           <Zap className="h-4 w-4 text-yellow-400" />
//           <p className="text-muted-foreground font-medium">
//             {t('Upgrade now for instant access!')}
//           </p>
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }

// export default TeamMaxTransfersModal
