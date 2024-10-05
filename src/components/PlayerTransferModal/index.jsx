'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Backdrop from 'components/Backdrop'
import PlayerTable from './Table'
import Image from 'next/image'
import { DialogContent, DialogTitle } from '@/components/ui/dialog'

const PlayerTransferModal = ({ prevPlayer, handleModal }) => {
  const { t } = useTranslation()

  return (
    // <Backdrop onClick={handleModal}>
    //   <motion.dialog
    //     initial={{ opacity: 0, scale: 0.75 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     className="mx-auto flex max-h-[80vh] w-[96%] max-w-[45rem] flex-col gap-4 overflow-y-auto rounded-2xl bg-black px-4 py-6 text-neutral-200 xs:w-[92%] md:w-[80%] md:p-6 lg:w-3/4 xl:w-2/3"
    //     onClick={(e) => e.stopPropagation()}
    //   >
    //     <div className="flex items-center justify-between">
    //       <h2 className="text-base font-medium xl:text-lg">
    //         {t('Transfer Amalga Oshirish')}
    //       </h2>
    //       <button>
    //         <Image
    //           src="/icons/close.svg"
    //           alt="close"
    //           width={24}
    //           height={24}
    //           onClick={handleModal}
    //           className="ml-auto size-5 self-end md:size-6"
    //         />
    //       </button>
    //     </div>
    //     <PlayerTable prevPlayer={prevPlayer} handleModal={handleModal} />
    //   </motion.dialog>
    // </Backdrop>
    <DialogContent className="mx-auto flex max-h-[80vh] w-[96%] max-w-[45rem] flex-col gap-4 overflow-y-auto rounded-2xl bg-black px-4 py-6 text-neutral-200 xs:w-[92%] md:w-[80%] md:p-6 lg:w-3/4 xl:w-2/3">
      {/* <div className="flex items-center justify-between"> */}
      {/* <h2 className="text-base font-medium xl:text-lg"> */}

      <DialogTitle>{t('Transfer Amalga Oshirish')}</DialogTitle>
      {/* </h2> */}
      {/* </div> */}
      {/* <button>
          <Image
            src="/icons/close.svg"
            alt="close"
            width={24}
            height={24}
            onClick={handleModal}
            className="ml-auto size-5 self-end md:size-6"
          />
        </button> */}
      <PlayerTable prevPlayer={prevPlayer} handleModal={handleModal} />
    </DialogContent>
  )
}

export default PlayerTransferModal

// import { Button } from "@/components/ui/button"

// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// export function DialogDemo() {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline">Edit Profile</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Edit profile</DialogTitle>
//           <DialogDescription>
//             Make changes to your profile here. Click save when you're done.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">
//               Name
//             </Label>
//             <Input id="name" value="Pedro Duarte" className="col-span-3" />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="username" className="text-right">
//               Username
//             </Label>
//             <Input id="username" value="@peduarte" className="col-span-3" />
//           </div>
//         </div>
//         <DialogFooter>
//           <Button type="submit">Save changes</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }
