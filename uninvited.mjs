import { writeFileSync } from "fs"
import http from "http"
const hostname = "localhost"
const port = 5000
let handler = (request, response) => {
    const { headers, url } = request
    let filename = "./guests" + url + ".json"
    let body = []
    request
        .on("error", (err) => {
            console.log(err)
        })
        .on("data", (chunk) => {
            body.push(chunk)
        })
        .on("end", () => {
            body = Buffer.concat(body).toString()
            console.log("body: ", body, "url", url, "header", headers)
            try {
                writeFileSync(filename, body)
                response.writeHead(201, { "Content-Type": "application/json" })
                response.end(body)
            } catch {
                response.writeHead(500, { "Content-Type": "application/json" })
                response.end(JSON.stringify({ error: "server failed" }))
            }
        })
}
const server = http.createServer(handler)
server.listen(port, hostname, () => {
    console.log(`server running on port:${port}`)
})