import * as fs from "fs/promises"
const file = process.argv[2]
const format = process.argv[3]
const newFileName = process.argv[4]
let encodeFileName = newFileName === undefined ? "cypher.txt" : newFileName
let decodeFileName = newFileName === undefined ? "clear.txt" : newFileName
const readFile = await fs.readFile(file)
let content = readFile.toString()
if (format === "encode") {
    let encode = Buffer.from(content).toString("base64")
    fs.writeFile(encodeFileName, encode, (err) => {
        if (err) throw err
    })
}
if (format === "decode") {
    let decode = Buffer.from(content, "base64").toString("ascii")
    fs.writeFile(decodeFileName, decode, (err) => {
        if (err) throw err
    })
}