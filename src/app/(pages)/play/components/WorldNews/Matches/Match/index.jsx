const Match = ({ match }) => {
  const homeClub = match?.home_club_id ?? null
  const awayClub = match?.away_club_id ?? null

  const date = new Date(match?.started_date)
  const day = date.getDate()
  // const month = date.getMonth()
  const month = date.toLocaleString('default', { month: 'short' })
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return (
    <div className="flex items-center justify-center gap-1 rounded-lg bg-neutral-800 px-0 py-2 xs:px-4">
      <div className="flex w-full items-center justify-end gap-2">
        <p className="text-xs font-medium xs:text-sm">{homeClub?.name}</p>
        <img
          src={`/club-jpg/${homeClub?.slug}/logo.jpeg`}
          alt="home club"
          width={48}
          height={48}
          onError={(e) => (e.target.src = '/icons/football.svg')}
          draggable={false}
          className="size-8 rounded-full bg-neutral-400 xs:size-10"
        />
      </div>
      <div className="flex h-full w-40 flex-col items-center justify-center gap-0 rounded-sm bg-neutral-800">
        {match?.status === MATCHSTATUS.NOT_STARTED && (
          <>
            <p className="text-sm font-medium text-neutral-300">
              {day}/{month}
            </p>
            <p className="font-bold">
              {hours}:{minutes}
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
        <img
          src={`/club-jpg/${awayClub?.slug}/logo.jpeg`}
          alt="home club"
          width={48}
          height={48}
          onError={(e) => (e.target.src = '/icons/football.svg')}
          draggable={false}
          className="size-8 rounded-full bg-neutral-400 xs:size-10"
        />
        <p className="text-xs font-medium xs:text-sm">{awayClub?.name}</p>
      </div>
    </div>
  )
}

const MATCHSTATUS = {
  NOT_STARTED: 'not_started',
  INPROCESS: 'in_process',
  FINISHED: 'finished',
}

export default Match
