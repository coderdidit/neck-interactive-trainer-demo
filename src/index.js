const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('src/index.html').pipe(res)
})

const port = process.env.PORT || 3000
server.listen(port)

console.log(`server running on por ${port}`)
