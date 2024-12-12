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

    const ext = path.extname(filePath)
    const contentType = MIME_TYPES[ext] || 'application/octet-stream'

    res.setHeader('Content-Type', `${contentType}; charset=utf-8`)

    const stream = fs.createReadStream(filePath, { encoding: 'utf8' })
    stream.pipe(res)
  })
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})
