import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { PACKAGES } from 'app/utils/packages.util'
import { useSelector, useDispatch } from 'react-redux'
import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogDescription,
} from '@/components/ui/dialog'
import { setClubModal } from 'app/lib/features/teamPlayers/teamPlayers.slice'

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
      <DialogContent className="flex max-w-[98%] flex-col items-center justify-between gap-4 rounded-md bg-neutral-950 px-4 py-6 text-neutral-100 xs:max-w-[90%] sm:max-w-[80%] md:max-w-[70%] md:p-6 lg:max-w-[55%] xl:max-w-[45%] 2xl:max-w-[40rem]">
        <header className="space-y-2">
          <DialogTitle className="text-base font-semibold sm:text-lg 2xl:text-xl">
            {t('Bir jamoadan oyinchilarni sonini oshirishni hoxlaysizmi?')}
          </DialogTitle>
          <p className="text-xs text-neutral-300 md:text-sm xl:text-base">
            {t('Musobaqada g‘alaba qozonish')}
          </p>
        </header>
        <section className="flex w-full flex-col gap-2 text-sm sm:text-base">
          {packages.map(
            (item) =>
              item.type === PACKAGES.single_club_count && (
                <Link key={item.id} href={`/confirm-payment/${item.id}`}>
                  <div className="flex gap-2 rounded border border-neutral-400 p-2 transition-all hover:border-primary md:p-3">
                    {t('Bir jamoadan')}
                    <span className="font-bold">{item.amount}</span>
                    {t('ta futbolchi sotib olish')}
                  </div>
                </Link>
              )
          )}
        </section>
        <DialogDescription className="hidden">
          Max Team players
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default TeamMaxClubMembersModal
