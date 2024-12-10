'use client'

import Gutter from 'components/Gutter'
import PageSkeleton from 'components/PageSkeleton'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LANGUAGE } from 'app/utils/languages.util'
import { useGetPage } from 'app/hooks/system/useGetPage/useGetPage'

const AboutUs = () => {
  const { lang } = useSelector((store) => store.systemLanguage)
  const { getPage, data, isLoading } = useGetPage()

  useEffect(() => {
    getPage('about-us')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Gutter>
      {isLoading ? (
        <PageSkeleton />
      ) : (
        <div
          className="html-page my-6 min-h-screen w-full rounded-xl bg-neutral-900/75 px-2 py-4 text-sm shadow-md shadow-neutral-600 sm:p-4 md:p-6 xl:text-base"
          dangerouslySetInnerHTML={{
            __html: lang === LANGUAGE.uz ? data?.uz : data?.ru,
          }}
        />
      )}
    </Gutter>
  )
}

export default AboutUs
