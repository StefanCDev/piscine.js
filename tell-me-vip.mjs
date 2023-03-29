import * as fs from "fs/promises"
const dir = process.argv[2]
const guests = await fs.readdir(dir)
const getContent = async (filename) => {
    return await fs.readFile(filename, "utf8")
}
const awaitfilterData = await Promise.all(
    guests.map(async (v) => {
        let path = `${dir}/${v}`
        let response = await getContent(path)
        let { answer } = JSON.parse(response)
        if (answer === "yes") {
            return v
        }
    })
)
const filterData = awaitfilterData.filter((v) => v !== undefined)
const cleanData = filterData.map((v, i) => {
    let split = v.replace("_", " ").replace(".json", "").split(" ")
    v = split[1] + " " + split[0]
    return v
})
const sortData = cleanData.sort((a, b) => a.localeCompare(b))
const result = sortData.map((v, i) => {
    v = `${i + 1}. ${v}`
    return v
})
fs.writeFile("vip.txt", result.join("\n"), (err) => {
    if (err) throw err
})