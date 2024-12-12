const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000
const STATIC_DIR = path.join(__dirname, 'static')

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm',
  '.txt': 'text/plain',
}

const server = http.createServer((req, res) => {
  // Remove leading slash and decode URI
  const filePath = path.join(STATIC_DIR, decodeURIComponent(req.url.slice(1)))

  fs.stat(filePath, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.statusCode = 404
        res.end('404 Not Found')
      } else {
        res.statusCode = 500
        res.end('500 Internal Server Error')
      }
      return
    }

    if (stats.isDirectory()) {
      res.statusCode = 403
      res.end('403 Forbidden')
      return
    }

    // Determine the content type
    const ext = path.extname(filePath)
    const contentType = MIME_TYPES[ext] || 'application/octet-stream'

    // Set the content type and character encoding
    res.setHeader('Content-Type', `${contentType}; charset=utf-8`)

    const stream = fs.createReadStream(filePath, { encoding: 'utf8' })
    stream.pipe(res)
  })
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})

// // For demonstration purposes, let's create a sample file with Cyrillic text in the statics folder
// const sampleFilePath = path.join(STATIC_DIR, 'cyrillic-sample.txt')
// fs.mkdir(STATIC_DIR, { recursive: true }, (err) => {
//   if (err) {
//     console.error('Error creating directory:', err)
//     return
//   }

//   fs.writeFile(
//     sampleFilePath,
//     'Это пример текста на русском языке.',
//     'utf8',
//     (err) => {
//       if (err) {
//         console.error('Error writing file:', err)
//         return
//       }
//       console.log(`Sample file with Cyrillic text created at ${sampleFilePath}`)
//       console.log(
//         `You can access it at http://localhost:${PORT}/cyrillic-sample.txt`
//       )
//     }
//   )
// })
