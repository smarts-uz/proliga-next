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
      <DialogContent className="flex max-w-[98%] flex-col items-center justify-between 
      gap-4 rounded-md bg-neutral-950 px-4 py-6 text-neutral-100 xs:max-w-[90%] 
      sm:max-w-[80%] md:max-w-[70%] md:p-6 lg:max-w-[55%] xl:max-w-[45%] 2xl:max-w-[40rem]">
        <header className="space-y-2">
          <DialogTitle className="text-base font-semibold sm:text-lg 2xl:text-xl">
            {t('Transfer limitini oshirishni hoxlaysizmi?')}
          </DialogTitle>
          <p className="text-xs text-neutral-300 md:text-sm xl:text-base">
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
                  <div className="flex gap-1 rounded border border-neutral-400 
                  p-2 transition-all hover:border-primary md:p-3">
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
