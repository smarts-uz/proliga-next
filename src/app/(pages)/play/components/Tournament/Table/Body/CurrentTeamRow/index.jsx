import Link from 'next/link'

const TournamentTableCurrentTeamRow = ({
  currentCompetition,
  currentTourTeam,
}) => {
  return (
    <tr
      className={`mx-auto border-b border-l-2 border-neutral-700 border-l-blue-600 bg-neutral-900 text-center odd:bg-stone-950 hover:bg-neutral-800 md:border-l-4 md:text-start`}
    >
      <td className={`h-min w-min px-0.5 capitalize md:w-auto`}>
        <Link
          href={`/team-view/${currentCompetition?.slug}/${currentTourTeam.team?.id ?? 0}`}
        >
          {currentTourTeam?.team?.order}
        </Link>
      </td>
      <td className={`h-min w-min px-0.5 capitalize md:w-auto`}>
        <Link
          href={`/team-view/${currentCompetition?.slug}/${currentTourTeam.team?.id ?? 0}`}
        >
          {currentTourTeam?.team?.name}
        </Link>
      </td>
      <td className={`h-min w-min px-0.5 capitalize md:w-auto`}>
        <Link
          href={`/team-view/${currentCompetition?.slug}/${currentTourTeam.team?.id ?? 0}`}
        >
          {currentTourTeam?.user_id?.name}
        </Link>
      </td>
      <td className={`h-min w-min px-0.5 capitalize md:w-auto`}>
        <Link
          href={`/team-view/${currentCompetition?.slug}/${currentTourTeam.team?.id ?? 0}`}
        >
          {currentTourTeam?.point}
        </Link>
      </td>
      <td className={`h-min w-min px-0.5 capitalize md:w-auto`}>
        <Link
          href={`/team-view/${currentCompetition?.slug}/${currentTourTeam.team?.id ?? 0}`}
        >
          {currentTourTeam?.team?.point}
        </Link>
      </td>
    </tr>
  )
}

export default TournamentTableCurrentTeamRow
