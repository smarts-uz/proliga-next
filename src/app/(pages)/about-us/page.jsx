'use client'

import Gutter from 'components/Gutter'
import { supabase } from 'app/lib/supabaseClient'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LANGUAGE } from 'app/utils/languages.util'

const AboutUs = () => {
  const { lang } = useSelector((store) => store.systemLanguage)
  const [rules, setRules] = useState('')

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from('system_language')
        .select('id, name, uz, ru')
        .eq('name', 'about-us')
        .single()
      if (error) {
        console.error('Error fetching rules:', error)
      } else {
        setRules(data)
      }
    }
    fetch()
  }, [])

  return (
    <Gutter>
      <div
        className="html-page my-6 w-full rounded-xl bg-neutral-900/75 px-2 py-4 text-sm shadow-md shadow-neutral-600 sm:p-4 md:p-6 xl:text-base"
        dangerouslySetInnerHTML={{
          __html: lang === LANGUAGE.uz ? rules?.uz : rules?.ru,
        }}
      />
    </Gutter>
  )
}

export default AboutUs
