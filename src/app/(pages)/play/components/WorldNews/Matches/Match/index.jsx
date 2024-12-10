/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const Match = ({ match }) => {
  const homeClub = match?.home_club_id ?? null
  const awayClub = match?.away_club_id ?? null

  const date = new Date(match?.started_date)
  const day = date.getDate()
  const month = date.getMonth()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return (
    <Card className="overflow-hidden">
      <CardContent className="flex items-center justify-between p-2 xs:p-4">
        <div className="flex w-full items-center justify-end gap-2">
          <p className="text-xs font-medium xs:text-sm">{homeClub?.name}</p>
          <Image
            src={`/club-jpeg/${homeClub?.slug}/logo.jpeg`}
            alt={`${homeClub?.name} logo`}
            width={48}
            height={48}
            onError={(e) => (e.currentTarget.src = '/icons/football.svg')}
            className="bg-muted size-8 rounded-full xs:size-10"
          />
        </div>
        <div className="bg-muted flex h-full w-40 flex-col items-center justify-center gap-0 rounded-sm px-2 py-1">
          {match?.status === MATCHSTATUS.NOT_STARTED && (
            <>
              <p className="text-muted-foreground text-sm font-medium">
                {day}/{month}
              </p>
              <p className="font-bold">
                {hours}:
                {minutes === 0 ? '00' : minutes < 10 ? '0' + minutes : minutes}
              </p>
            </>
          )}
          {match?.status === MATCHSTATUS.FINISHED && (
            <p className="font-bold">
              <span>{match?.home_club_result ?? '00'}</span>-
              <span>{match?.away_club_result ?? '00'}</span>
            </p>
          )}
          {match?.status === MATCHSTATUS.INPROCESS && (
            <p className="font-bold">
              <span>{match?.home_club_result ?? '00'}</span>-
              <span>{match?.away_club_result ?? '00'}</span>
            </p>
          )}
        </div>
        <div className="flex w-full items-center gap-2">
          <Image
            src={`/club-jpeg/${awayClub?.slug}/logo.jpeg`}
            alt={`${awayClub?.name} logo`}
            width={48}
            height={48}
            onError={(e) => (e.currentTarget.src = '/icons/football.svg')}
            className="bg-muted size-8 rounded-full xs:size-10"
          />
          <p className="text-xs font-medium xs:text-sm">{awayClub?.name}</p>
        </div>
      </CardContent>
    </Card>
  )
}

const MATCHSTATUS = {
  NOT_STARTED: 'not_started',
  INPROCESS: 'in_process',
  FINISHED: 'finished',
}

export default Match
