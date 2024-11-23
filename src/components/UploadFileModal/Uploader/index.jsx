'use client'

import '@uppy/dashboard/dist/style.min.css'
import '@uppy/core/dist/style.min.css'

import Russian from '@uppy/locales/lib/ru_RU'
import Uzbek from '@uppy/locales/lib/uz_UZ'
import { Dashboard } from '@uppy/react'
import { useState } from 'react'
import Uppy from '@uppy/core'
import { useSelector } from 'react-redux'
import { LANGUAGE } from 'app/utils/languages.util'
import UppyServerActionUpload from 'app/api/route'
import { saveFile } from 'app/action/route'
import { toast } from 'react-toastify'

export const UppyUploader = () => {
  const { lang } = useSelector((state) => state.systemLanguage)
  const { userTable } = useSelector((state) => state.auth)

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
          name: userTable?.id + '.' + currentFile?.extension,
        }
        return modifiedFile
      },
    })
      .use(UppyServerActionUpload, {
        action: saveFile,
      })
      .on('upload-success', (file) => {
        console.log(file)
        toast.warning('file added', { theme: 'dark' })
      })
  )
  return <Dashboard className="w-full rounded-xl" theme="dark" uppy={uppy} />
}
