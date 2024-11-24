'use server'

import { join } from 'path'
import { writeFile } from 'fs/promises'
import mime from 'mime/lite'

export async function saveFiles(formData) {
  const files = formData.getAll('files')
  const folderNames = formData.getAll('folderNames')
  const subDir = formData.get('subDir')

  console.log(folderNames, subDir)
  const urls = []
  for (const file of files) {
    const index = files.indexOf(file)
    // const fileName = fileNames[index]

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // const path = join(
    //   process.cwd() + `/public/${folder}`,
    //   fileNames[index] ?? file?.name
    // )
    // await writeFile(path, buffer)
    // urls.push(path)
  }
  return {
    status: 201,
    body: urls,
  }
}
