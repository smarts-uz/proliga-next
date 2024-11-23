'use server'

import { join } from 'path'
import { writeFile } from 'fs/promises'

export async function saveFile(formData) {
  const files = formData.getAll('files')
  const fileName = formData.get('filename')
  const urls = []
  for (const file of files) {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const path = join(process.cwd() + '/public/avatar', fileName ?? file?.name)
    await writeFile(path, buffer)
    urls.push(path)
  }
  return {
    status: 201,
    body: urls,
  }
}
