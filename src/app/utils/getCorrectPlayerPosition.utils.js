import { LANGUAGE } from './languages.util'
import { PLAYERS } from './players.util'

export const getCorrentPlayerPosition = (position, lang) => {
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
