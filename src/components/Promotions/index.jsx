import React from 'react'
import CreateTeam from '@/src/components/Promotions/CreateTeam'
import GetPoints from '@/src/components/Promotions/GetPoints'
import Transfers from '@/src/components/Promotions/Transfers'
import Prizes from '@/src/components/Promotions/Prizes'
import Competition from './Competition'

const Promotions = () => {
  return (
    <>
      <CreateTeam />
      <GetPoints />
      <Transfers />
      <Competition />
      <Prizes />
    </>
  )
}

export default Promotions
