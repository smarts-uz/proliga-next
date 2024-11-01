import mime from 'mime'
import { join } from 'path'
import { stat, mkdir, writeFile } from 'fs/promises'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const formData = await req.formData()

  const fileName = formData.get('title') ?? 'title'
  const dir = formData.get('dir') ?? 'avatar'
  const image = formData.get('image')

  const buffer = Buffer.from(await image.arrayBuffer())
  const relativeUploadDir = `/${dir}`

  const uploadDir = join(process.cwd(), 'public', relativeUploadDir)

  try {
    await stat(uploadDir)
  } catch (error) {
    if (error.code === 'ENOENT') {
      await mkdir(uploadDir, { recursive: true })
    } else {
      console.error(
        'Error while trying to create directory when uploading a file\n',
        error
      )
      return NextResponse.json(
        { error: 'Something went wrong.' },
        { status: 500 }
      )
    }
  }

  try {
    const filename = `${fileName}.${mime.getExtension(image.type)}`

    await writeFile(`${uploadDir}/${filename}`, buffer)

    const fileUrl = `${relativeUploadDir}/${filename}`

    return NextResponse.json({
      path: process.env.NEXT_PUBLIC_URL + fileUrl,
    })
  } catch (error) {
    console.error('Error while trying to upload a file\n', error)
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    )
  }
}
