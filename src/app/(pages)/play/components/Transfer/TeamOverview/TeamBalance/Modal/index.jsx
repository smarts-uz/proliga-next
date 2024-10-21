import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { PACKAGES } from 'app/utils/packages.util'
import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogDescription,
} from '@/components/ui/dialog'
import { setBalanceModal } from 'app/lib/features/currentTeam/currentTeam.slice'

const TeamBalanceModal = () => {
  const dispatch = useDispatch()
  const { packages } = useSelector((store) => store.packages)
  const { t } = useTranslation()
  const { balanceModal } = useSelector((store) => store.currentTeam)

  return (
    <Dialog
      onOpenChange={() => dispatch(setBalanceModal(!balanceModal))}
      open={balanceModal}
    >
      <DialogContent className="flex max-w-[98%] flex-col items-center justify-between gap-4 rounded-md bg-neutral-950 px-4 py-6 text-neutral-100 xs:max-w-[90%] sm:max-w-[80%] md:max-w-[70%] md:p-6 lg:max-w-[55%] xl:max-w-[45%] 2xl:max-w-[40rem]">
        <header className="space-y-2">
          <DialogTitle className="text-base font-semibold sm:text-lg 2xl:text-xl">
            {t('Balans miqdorini oshirishni hoxlaysizmi')}
          </DialogTitle>
          <p className="text-xs text-neutral-300 md:text-sm xl:text-base">
            {t('update balance txt')}
          </p>
        </header>
        <section className="flex w-full flex-col gap-2 text-sm sm:text-base">
          {packages.map(
            (item) =>
              item.type === PACKAGES.team_balance && (
                <Link key={item.id} href={`/confirm-payment/${item.id}`}>
                  <div className="flex gap-2 rounded border border-neutral-400 p-2 transition-all hover:border-primary md:p-3">
                    {t('Tangalar miqdorini')}
                    <span className="font-bold">{item.amount}</span>
                    {t('tangaga oshirish')}
                  </div>
                </Link>
              )
          )}
        </section>
        <DialogDescription className="hidden">Balance</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default TeamBalanceModal
