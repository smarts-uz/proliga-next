'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { PACKAGES } from 'app/utils/packages.util'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { setBalanceModal } from 'app/lib/features/currentTeam/currentTeam.slice'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Coins, InfoIcon } from 'lucide-react'
import {
  HoverCardTrigger,
  HoverCard,
  HoverCardContent,
} from '@/components/ui/hover-card'

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
      <DialogContent className="max-h-[92%] max-w-[96%] overflow-auto rounded-lg sm:max-w-[28rem] xl:max-w-[32rem] xl:p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {t('Boost Your Team Balance!')}
          </DialogTitle>
          <HoverCard>
            <HoverCardTrigger asChild>
              <DialogDescription className="flex cursor-help items-center text-base">
                {t(
                  'Increase your spending power for better players and strategies'
                )}
                <InfoIcon className="ml-1 h-4 w-4" />
              </DialogDescription>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <p className="text-sm">{t('balance modal info')}</p>
            </HoverCardContent>
          </HoverCard>
        </DialogHeader>
        <div className="mt-4 space-y-2">
          {packages.map(
            (item) =>
              item.type === PACKAGES.team_balance && (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="bg-neutral-900 p-0">
                    <Link
                      href={`/confirm-payment/${item.id}`}
                      className="block"
                      onClick={() => dispatch(setBalanceModal(false))}
                    >
                      <Button
                        variant="ghost"
                        className="relative h-full w-full justify-start rounded-none border-l-4 border-primary px-4 py-2 text-left hover:bg-primary/10"
                      >
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            +{item.amount} {t('Coins')}
                          </Badge>
                          <h3 className="text-lg font-semibold">
                            {t('Increase your balance!')}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {t('Add coins to your balance').replace(
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
          <Coins className="h-4 w-4 text-yellow-400" />
          <p className="text-muted-foreground font-medium">
            {t("invest in your team's success")}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TeamBalanceModal
