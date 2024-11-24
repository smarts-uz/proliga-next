'use server'

import { join } from 'path'
import { writeFile, mkdir } from 'fs/promises'
import mime from 'mime/lite'

export async function saveFiles(formData) {
  const files = formData.getAll('files')
  const dir = formData.get('dir')
  const subDir = formData.getAll('subDir')

  const urls = []

  console.log(dir, subDir)
  for (const file of files) {
    const index = files.indexOf(file)
    // const fileName = fileNames[index]

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    // const filePath = mkdir(join(process.cwd() + `/public/${dir}`, subDir))
    // const path = join(process.cwd() + `/public/${dir}`, 'image')
    // await writeFile(path, buffer)
    // urls.push(path)
  }
  return {
    status: 201,
    body: urls,
  }
}
