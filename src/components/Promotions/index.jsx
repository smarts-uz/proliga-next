import React from 'react';
import CreateTeam from '@/src/components/Promotions/CreateTeam'
import GetPoints from '@/src/components/Promotions/GetPoints'
import Transfers from '@/src/components/Promotions/Transfers'

const  Promotions = () => {
    return (
      <>
        <CreateTeam/>
        <GetPoints/>
         <Transfers/>
      </>
    )
}

export default Promotions