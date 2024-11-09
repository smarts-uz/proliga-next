'use client'

import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'

import { useState } from 'react'
import { Dashboard } from '@uppy/react'
import Russian from '@uppy/locales/lib/ru_RU'
import Uzbek from '@uppy/locales/lib/uz_UZ'

// import { saveFile } from '../actions/route'

import Uppy from '@uppy/core'
import { useSelector } from 'react-redux'
import { LANGUAGE } from 'app/utils/languages.util'
// import UppyServerActionUpload from '@levitade/uppy-uploader-nextjs'

export const UppyUploader = () => {
  const { lang } = useSelector((state) => state.systemLanguage)

  const [uppy] = useState(
    () =>
      new Uppy({
        autoProceed: false,
        locale: lang === LANGUAGE.uz ? Uzbek : Russian,
        restrictions: {
          maxFileSize: 5242880,
          allowedFileTypes: ['image/png', 'image/jpeg', 'image/webp'],
        },
      })
  )

  return <Dashboard className="w-[32rem] rounded-xl" theme="dark" uppy={uppy} />
}
