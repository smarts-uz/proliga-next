'use client'

import Backdrop from 'components/Backdrop'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { LANGUAGE } from 'app/utils/languages.util'
import { PLAYERS } from 'app/utils/players.util'

const PlayerInfoModal = ({ toggleModal }) => {
  const { currentPlayer } = useSelector((store) => store.players)
  const { lang } = useSelector((store) => store.systemLanguage)

  const getCorrentPlayerPosition = (position, lang) => {
    if (lang === LANGUAGE.ru) {
      if (position === PLAYERS.GOA) {
        return 'Вратарь'
      }
      if (position === PLAYERS.DEF) {
        return 'Защитник'
      }
      if (position === PLAYERS.MID) {
        return 'Полузащитник'
      }
      if (position === PLAYERS.STR) {
        return 'Нападающий'
      }
    }
    if (lang === LANGUAGE.uz) {
      if (position === PLAYERS.GOA) {
        return 'Darvozabon'
      }
      if (position === PLAYERS.DEF) {
        return 'Himoyachi'
      }
      if (position === PLAYERS.MID) {
        return 'Yarim Himoyachi'
      }
      if (position === PLAYERS.STR) {
        return 'Hujumchi'
      }
    }
    return position
  }

  return (
    <Backdrop onClick={toggleModal}>
      <motion.dialog
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        className="z-30 flex w-4/5 max-w-[45rem] flex-col gap-4 overflow-y-auto rounded-2xl bg-neutral-900 p-6 text-neutral-200 xs:mx-auto sm:w-2/3 md:p-6 lg:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2">
          <Image
            src={
              currentPlayer?.image
                ? currentPlayer?.image
                : `/club/${currentPlayer?.club_id?.slug}/app.svg`
            }
            alt="player image"
            width={24}
            height={24}
            unoptimized
            className="size-12 rounded-md md:size-20"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold md:text-2xl">
              {currentPlayer.name}
            </h3>
            <div className="flex items-center gap-2">
              <Image
                src={
                  currentPlayer?.club?.slug
                    ? `/club-jpg/${currentPlayer?.club?.slug}/logo.jpeg`
                    : '/icons/football.svg'
                }
                alt="home club"
                width={48}
                height={48}
                draggable={false}
                unoptimized
                className="h-full w-8 rounded-full bg-neutral-400"
              />
              <span>|</span>
              <p>{getCorrentPlayerPosition(currentPlayer.position, lang)}</p>
            </div>
          </div>
        </div>
      </motion.dialog>
    </Backdrop>
  )
}

export default PlayerInfoModal
