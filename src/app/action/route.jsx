'use server'

import { join } from 'path'
import { writeFile } from 'fs/promises'

export async function saveFile(formData) {
  const files = formData.getAll('files')
  const fileName = formData.get('fileName')
  const fname = formData.get('formDataName')
  console.log(fname, fileName)
  const urls = []

  for (const file of files) {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const path = join(process.cwd() + '/public/avatar', fileName ?? file?.name)

    // console.log(file)
    // console.log(path)

    await writeFile(path, buffer)
    urls.push(path)
  }

  return {
    status: 201,
    body: urls,
  }
}
