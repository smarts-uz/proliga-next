/* eslint-disable */
'use client'
import React from 'react'
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import { Webcam } from 'uppy'
import { Dashboard } from '@uppy/react'
import { useState } from 'react'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import '@uppy/drag-drop/dist/style.css'
const metaFields = [
  { id: 'license', name: 'License', placeholder: 'specify license' },
]

function createUppy() {
  return new Uppy({ restrictions: { requiredMetaFields: ['license'] } }).use(
    Tus,
    { endpoint: 'https://tusd.tusdemo.net/files/' }
  )
}

export default function UppyDashboard() {
  const [uppy] = useState(createUppy)

  return (
    <>
      <Dashboard uppy={uppy} metaFields={metaFields} />
    </>
  )
}
