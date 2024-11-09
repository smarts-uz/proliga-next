'use client'

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
      <DialogContent
        closeButtonStyle="right-0 -top-8"
        className="flex w-[96%] rounded-md bg-neutral-950 p-0 text-neutral-100 sm:w-full"
      >
        <DialogTitle className="hidden">File Upload</DialogTitle>
        <UppyUploader />
        <DialogDescription className="hidden">Upload Photos</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default UploadFileModal
