'use client'

import '@uppy/dashboard/dist/style.min.css'
import '@uppy/core/dist/style.min.css'

import Russian from '@uppy/locales/lib/ru_RU'
import Uzbek from '@uppy/locales/lib/uz_UZ'
import { Dashboard } from '@uppy/react'
import { useState } from 'react'
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import { useSelector } from 'react-redux'
import { LANGUAGE } from 'app/utils/languages.util'

export const UppyUploader = () => {
  const { lang } = useSelector((state) => state.systemLanguage)
  const [fileType, setFileType] = useState('')

  const [uppy] = useState(() =>
    new Uppy({
      autoProceed: false,
      allowMultipleUploadBatches: false,
      locale: lang === LANGUAGE.uz ? Uzbek : Russian,
      restrictions: {
        maxFileSize: 5242880,
        allowedFileTypes: ['image/png', 'image/jpeg', 'image/webp'],
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
      },
      onBeforeFileAdded: (currentFile, files) => {
        const modifiedFile = {
          ...currentFile,
          name: Date.now() + '_' + currentFile.name,
        }
        uppy.log(modifiedFile.name)
        return modifiedFile
      },
    })
      .use(Tus, {
        endpoint: 'http://localhost:4000/uploads',
        resume: true,
        retryDelays: [0, 1000, 3000, 5000],
        metadata: {
          contentType: fileType,
          // contentDisposition: attachment; filename="fname.ext"
        },
        limit: 1,
      })
      .on('file-added', (file) => {
        setFileType(file?.data?.type)
      })
  )
  return <Dashboard className="w-full rounded-xl" theme="dark" uppy={uppy} />
}
