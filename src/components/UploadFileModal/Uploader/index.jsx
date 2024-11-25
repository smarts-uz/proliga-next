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
import UppyServerActionUpload from 'app/plugins/UploadFile/UppyServerActionUpload'
import { saveFile } from 'app/action/upload/saveFile.action'
import { useUpdateUserPhoto } from 'app/hooks/user/useUpdateUserPhoto/useUpdateUserPhoto'

export const UppyUploader = () => {
  const dispatch = useDispatch()
  const { lang } = useSelector((state) => state.systemLanguage)
  const { userTable } = useSelector((state) => state.auth)
  const { updateUserPhoto } = useUpdateUserPhoto()

  const [uppy] = useState(
    () =>
      new Uppy({
        autoProceed: false,
        allowMultipleUploadBatches: false,
        locale: lang === LANGUAGE.uz ? Uzbek : Russian,
        restrictions: {
          maxFileSize: 5 * 1024 * 1024, // 5 mb
          allowedFileTypes: ['image/png', 'image/jpeg'],
          maxNumberOfFiles: 1,
          minNumberOfFiles: 1,
        },
      }).use(UppyServerActionUpload, {
        action: saveFile,
        dir: 'user',
        subDir: userTable?.id.toString() || '',
      })
    // .on('upload-success', () => {
    //   setFileTypes([])
    // })
  )

  return <Dashboard className="w-full rounded-xl" theme="dark" uppy={uppy} />
}
