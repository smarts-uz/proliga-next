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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { setClubModal } from 'app/lib/features/teamPlayers/teamPlayers.slice'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Users, InfoIcon } from 'lucide-react'

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
      <DialogContent className="max-h-[92%] max-w-[96%] overflow-auto rounded-lg sm:max-w-[28rem] xl:max-w-[32rem] xl:p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {t('Expand Your Club Roster!')}
          </DialogTitle>
          <HoverCard>
            <HoverCardTrigger asChild>
              <DialogDescription className="flex cursor-help items-center text-base">
                {t(
                  "Boost your team's potential with more players from a single club."
                )}
                <InfoIcon className="ml-1 h-4 w-4" />
              </DialogDescription>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <p className="text-sm">{t('single club player modal info')}</p>
            </HoverCardContent>
          </HoverCard>
        </DialogHeader>
        <div className="mt-4 space-y-2">
          {packages.map(
            (item) =>
              item.type === PACKAGES.single_club_count && (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="bg-neutral-900 p-0">
                    <Link
                      href={`/confirm-payment/${item.id}`}
                      onClick={() => dispatch(setClubModal(false))}
                      className="block"
                    >
                      <Button
                        variant="ghost"
                        className="relative h-full w-full justify-start rounded-none border-l-4 border-primary px-4 py-2 text-left hover:bg-primary/10"
                      >
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            +{item.amount} {t('Players')}
                          </Badge>
                          <h3 className="text-lg font-semibold">
                            {t('strengthen your squad')}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {t('Add players from one club!').replace(
                              '$',
                              item.amount
                            )}
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
          <p className="text-muted-foreground font-medium">
            {t('Build a stronger team for victory! ')}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TeamMaxClubMembersModal
