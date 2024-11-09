'use client'

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogDescription,
} from '@/components/ui/dialog'
import { UppyUploader } from './Uploader'

const UploadFileModal = ({ isModalOpen, setModalOpen }) => {
  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogContent className="min-w-[35rem] bg-neutral-950 px-4 py-6 text-neutral-100 md:p-6">
        <DialogTitle>File Upload</DialogTitle>
        <UppyUploader />
        <DialogDescription className="hidden">Upload Photos</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default UploadFileModal
