import { useEffect } from 'react'
import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import RemoteSources from '@uppy/remote-sources'
import Webcam from '@uppy/webcam'
import ScreenCapture from '@uppy/screen-capture'
import GoldenRetriever from '@uppy/golden-retriever'
import Tus from '@uppy/tus'
import AwsS3 from '@uppy/aws-s3'
import AwsS3Multipart from '@uppy/aws-s3-multipart'
import XHRUpload from '@uppy/xhr-upload'
import ImageEditor from '@uppy/image-editor'
import DropTarget from '@uppy/drop-target'
import Audio from '@uppy/audio'
import Compressor from '@uppy/compressor'

import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import '@uppy/audio/dist/style.css'
import '@uppy/screen-capture/dist/style.css'
import '@uppy/image-editor/dist/style.css'
import { toast } from 'react-toastify'

const UPLOADER = 'tus'
const COMPANION_URL = 'http://companion.uppy.io'
const companionAllowedHosts = []
const TUS_ENDPOINT = 'https://tusd.tusdemo.net/files/'
const XHR_ENDPOINT = ''

const RESTORE = false

const UppyDashboard = () => {
  useEffect(() => {
    const uppyDashboard = new Uppy({ debug: true })
      .use(Dashboard, {
        inline: true,
        target: '#uppy-dashboard',
        showProgressDetails: true,
        proudlyDisplayPoweredByUppy: true,
      })
      .use(RemoteSources, {
        companionUrl: COMPANION_URL,
        sources: ['Url'],
        companionAllowedHosts,
      })
      .use(Webcam, {
        target: Dashboard,
        showVideoSourceDropdown: true,
        showRecordingLength: true,
      })

      .use(ImageEditor, { target: Dashboard })
      .use(DropTarget, {
        target: document.body,
      })
      .use(Compressor)

    switch (UPLOADER) {
      case 'tus':
        uppyDashboard.use(Tus, { endpoint: TUS_ENDPOINT, limit: 6 })
        break
      case 's3':
        uppyDashboard.use(AwsS3, {
          companionUrl: COMPANION_URL,
          limit: 6,
        })
        break
      case 's3-multipart':
        uppyDashboard.use(AwsS3Multipart, {
          companionUrl: COMPANION_URL,
          limit: 6,
        })
        break
      case 'xhr':
        uppyDashboard.use(XHRUpload, {
          endpoint: XHR_ENDPOINT,
          limit: 6,
          bundle: true,
        })
        break
      default:
    }

    if (RESTORE) {
      uppyDashboard.use(GoldenRetriever, { serviceWorker: true })
    }

    uppyDashboard.on('complete', (result) => {
      if (result.failed.length === 0) {
        toast.success('successfuly upload!')
      } else {
        toast.warning('Upload failed!')
      }
      console.log('successful files:', result.successful)
      console.log('failed files:', result.failed)
    })
  }, [])

  return (
    <div className="container mx-auto my-8">
      <div id="uppy-dashboard" className="uppy-dashboard"></div>
    </div>
  )
}

export default UppyDashboard
