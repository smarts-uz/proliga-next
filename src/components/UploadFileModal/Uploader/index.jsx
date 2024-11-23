'use client'

import '@uppy/dashboard/dist/style.min.css'
import '@uppy/core/dist/style.min.css'

import Russian from '@uppy/locales/lib/ru_RU'
import Uzbek from '@uppy/locales/lib/uz_UZ'
import { Dashboard } from '@uppy/react'
import { useState } from 'react'
import Uppy from '@uppy/core'
import { useDispatch, useSelector } from 'react-redux'
import { LANGUAGE } from 'app/utils/languages.util'
import UppyServerActionUpload from 'app/api/route'
import { saveFile } from 'app/action/route'
import { setUserTempData } from 'app/lib/features/auth/auth.slice'
import { useUpdateUserPhoto } from 'app/hooks/user/useUpdateUserPhoto/useUpdateUserPhoto'

export const UppyUploader = () => {
  const dispatch = useDispatch()
  const { lang } = useSelector((state) => state.systemLanguage)
  const { userTable } = useSelector((state) => state.auth)
  const { updateUserPhoto } = useUpdateUserPhoto()

  const [uppy] = useState(() =>
    new Uppy({
      autoProceed: false,
      allowMultipleUploadBatches: false,
      locale: lang === LANGUAGE.uz ? Uzbek : Russian,
      restrictions: {
        maxFileSize: 5242880, //5mb
        allowedFileTypes: ['image/png', 'image/jpeg', 'image/webp'],
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
      },
      onBeforeFileAdded: (currentFile) => {
        const modifiedFile = {
          ...currentFile,
          name: `${userTable?.id}.${currentFile.extension}`,
        }
        console.log(modifiedFile.name, currentFile?.extension)
        modifiedFile.name &&
          dispatch(setUserTempData({ photo: modifiedFile.name }))
        return modifiedFile
      },
    })
      .use(UppyServerActionUpload, {
        action: saveFile,
      })
      .on('upload-success', () => {
        updateUserPhoto()
      })
  )
  return <Dashboard className="w-full rounded-xl" theme="dark" uppy={uppy} />
}
