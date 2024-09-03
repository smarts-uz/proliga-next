/* eslint-disable */
import React from 'react'
import Uppy from '@uppy/core'
import Webcam from '@uppy/webcam'
import { Dashboard } from '@uppy/react'

import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import '@uppy/drag-drop/dist/style.css'
import '@uppy/file-input/dist/style.css'
import '@uppy/progress-bar/dist/style.css'
import { Transloadit } from 'uppy'

const metaFields = [
  { id: 'license', name: 'License', placeholder: 'specify license' },
]

function createUppy() {
  return new Uppy({ restrictions: { requiredMetaFields: ['license'] } })
    .use(Transloadit, {
      assemblyOptions: {
        params: {
          auth: { key: 'your-transloadit-key' },
          template_id: 'your-template-id',
        },
      },
    })
    .use(Webcam)
}

export default function App() {
  const [uppy] = React.useState(createUppy)
  return (
    <>
      <Dashboard uppy={uppy} theme="dark" metaFields={metaFields} />
    </>
  )
}
