import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'

const Match = ({ match }) => {
  const homeClub = match?.home_club_id ?? null
  const awayClub = match?.away_club_id ?? null

  // useEffect(() => {
  //   if (match && clubs?.length > 0) {
  //     const currentHomeClub = clubs.find(
  //       (club) => club.id === match.home_club_id
  //     )
  //     setHomeClub(currentHomeClub)
  //     const currentAwayClub = clubs.find(
  //       (club) => club.id === match.away_club_id
  //     )
  //     setAwayClub(currentAwayClub)
  //   }
  // }, [clubs, match])

  const date = new Date(match?.started_date)
  const day = date.getDate()
  const month = date.getMonth()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return (
    <div className="flex items-center justify-center gap-1 rounded-lg bg-neutral-800 px-0 py-2 xs:px-4">
      <div className="flex w-full items-center justify-end gap-2">
        <p className="text-xs font-medium xs:text-sm">{homeClub?.name}</p>
        <Image
          src={`/club-jpg/${homeClub?.slug}/app.jpeg`}
          alt="home club"
          width={48}
          height={48}
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
            {match?.home_club_result ?? '00'}-{match?.away_club_result ?? '00'}
          </p>
        )}
      </div>
      <div className="flex w-full items-center gap-2">
        <Image
          src={`/club-jpg/${awayClub?.slug}/app.jpeg`}
          alt="home club"
          width={48}
          height={48}
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
  FINISHED: 'finished',
}

export default Match