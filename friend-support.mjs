import { existsSync, readFileSync } from "fs"
import http from "http"
const hostname = "localhost"
const port = 5000
const handler = (req, res) => {
    let guest = req.url
    let filename = `${guest}.json`
    let filePath = `./guests${filename}`
    res.setHeader("Content-Type", "application/json")
    if (!existsSync(filePath)) {
        res.statusCode = 404
        let obj = JSON.stringify({ error: "guest not found" })
        res.end(obj)
    } else {
        try {
            let content = readFileSync(filePath)
            res.statusCode = 200
            res.end(content)
        } catch (err) {
            res.statusCode = 500
            let obj = JSON.stringify({ error: "server failed" })
            res.end(obj)
        }
    }
}
const server = http.createServer(handler)
server.listen(port, hostname, () => {
    console.log(`server running on port:${port}`)
})