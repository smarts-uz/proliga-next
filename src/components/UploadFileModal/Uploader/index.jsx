'use client'

import '@uppy/dashboard/dist/style.min.css'
import '@uppy/core/dist/style.min.css'

import Russian from '@uppy/locales/lib/ru_RU'
import Uzbek from '@uppy/locales/lib/uz_UZ'
import { Dashboard } from '@uppy/react'
import { useState, useMemo, useEffect } from 'react'
import Uppy from '@uppy/core'
import { useUpdateUserPhoto } from 'app/hooks/user/useUpdateUserPhoto/useUpdateUserPhoto'
import UppyServerActionUpload from 'app/plugins/UploadFile/UppyServerActionUpload'
import { saveFile } from 'app/action/upload/saveFile.action'
import { useSelector } from 'react-redux'
import { LANGUAGE } from 'app/utils/languages.util'
import mime from 'mime'

export const UppyUploader = () => {
  const { lang } = useSelector((state) => state.systemLanguage)
  const { userTable } = useSelector((state) => state.auth)
  const { updateUserPhoto } = useUpdateUserPhoto()
  const [fileType, setFileType] = useState('')
  const dir = useMemo(() => 'user', [])
  const subDir = useMemo(() => userTable?.id.toString() || '', [userTable])
  const path = useMemo(
    () => `/${dir}/${subDir}/image.${fileType}`,
    [dir, subDir, fileType]
  )

  const [uppy] = useState(() =>
    new Uppy({
      autoProceed: false,
      allowMultipleUploadBatches: false,
      locale: lang === LANGUAGE.uz ? Uzbek : Russian,
      restrictions: {
        maxFileSize: 5 * 1024 * 1024, // 5 mb
        allowedFileTypes: ['image/png', 'image/jpeg', 'image/jpg'],
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
      },
    }).use(UppyServerActionUpload, {
      action: saveFile,
      dir,
      subDir,
    })
  )

  useEffect(() => {
    uppy.on('file-added', async (result) => {
      setFileType(mime.getExtension(result.data.type))
    })
  }, [uppy])

  useEffect(() => {
    if (fileType && path) {
      uppy.on('upload-success', async () => {
        await updateUserPhoto(path)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uppy, path, fileType])

  return <Dashboard className="w-full rounded-xl" theme="dark" uppy={uppy} />
}
