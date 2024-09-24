import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { LANGUAGE } from 'app/utils/languages.util'
import { PLAYERS } from 'app/utils/players.util'

const PositionsFilter = ({ column, columnFilterValue }) => {
  const { lang } = useSelector((store) => store.systemLanguage)
  const active = 'bg-primary text-black font-bold'
  const passive = 'bg-transparent text-neutral-500 font-base'
  const { t } = useTranslation()
  const DATA = [
    {
      title: t('Barchasi'),
      key: '',
    },
    {
      title: t('Darvozabon'),
      key: 'GOA',
    },
    {
      title: t('Himoyachi'),
      key: 'DEF',
    },
    {
      title: t('Yar Himoyachi'),
      key: 'MID',
    },
    {
      title: t('Hujumchi'),
      key: 'STR',
    },
  ]
  const getCorrentPlayerPosition = (position) => {
    if (lang === LANGUAGE.ru) {
      if (position === PLAYERS.GOA) {
        return 'ВР'
      }
      if (position === PLAYERS.DEF) {
        return 'ЗЩ'
      }
      if (position === PLAYERS.MID) {
        return 'ПЗ'
      }
      if (position === PLAYERS.STR) {
        return 'НП'
      }
    }
    if (lang === LANGUAGE.uz) {
      if (position === PLAYERS.GOA) {
        return 'DR'
      }
      if (position === PLAYERS.DEF) {
        return 'HM'
      }
      if (position === PLAYERS.MID) {
        return 'YH'
      }
      if (position === PLAYERS.STR) {
        return 'HJ'
      }
    }
    return position
  }

  return (
    <div className="col-span-4 flex w-full gap-2 overflow-x-scroll text-xs xs:text-sm lg:gap-4 lg:text-base">
      {DATA.map((obj, index) => (
        <button
          key={index}
          className={`text-nowrap rounded px-2 py-1 font-bold capitalize transition-all md:px-4 md:text-sm 2xl:px-2 ${getCorrentPlayerPosition(obj.key) === '' && typeof columnFilterValue === 'undefined' ? active : getCorrentPlayerPosition(obj.key) === columnFilterValue ? active : passive}`}
          onClick={() =>
            column.setFilterValue(getCorrentPlayerPosition(obj.key))
          }
        >
          {obj.title}
        </button>
      ))}
    </div>
  )
}

export default PositionsFilter
