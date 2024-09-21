import React from 'react'
import Gutter from '../../../components/Gutter'
import { useTranslation } from 'react-i18next'

function page(props) {
  const { t } = useTranslation()
  return (
    <Gutter>
      <div className="min-h-screen">
        <h1 className="mt-[100px] text-center text-5xl">
        {t("Biz bilan bog‘lanish")}
        </h1>
      </div>
    </Gutter>
  )
}

export default page
