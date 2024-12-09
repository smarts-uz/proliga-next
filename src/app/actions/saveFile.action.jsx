'use server'

import { join } from 'path'
import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import mime from 'mime'

export async function saveFile(formData) {
  const file = formData.getAll('files')[0]
  const dir = formData.get('dir')
  const subDir = formData.get('subDir')

  const root = 'static'
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const extension = mime.getExtension(file.type)
  const path = join(
    process.cwd(),
    `/${root}/${dir}/${subDir}`,
    `image.${extension}`
  )
  const dirExists = existsSync(join(process.cwd(), `/${root}/${dir}`, subDir))

  try {
    if (dirExists) {
      await writeFile(path, buffer)
    } else {
      await mkdir(join(process.cwd(), `/${root}/${dir}`, subDir), {
        recursive: true,
      }).then(async () => await writeFile(path, buffer))
    }

    return {
      status: 201,
      body: path,
    }
  } catch (error) {
    return {
      status: 500,
      body: error,
    }
  }
}
