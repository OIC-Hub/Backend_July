// const fs = require("fs")

const { unlink, mkdirSync } = require("fs")
const os = require("os")
const {readFile, writeFile, appendFile, mkdir} = require("fs/promises")

console.log("hello world")


// const data = [{id: 1, name: "sola"}, {id: 2, name: "Ade"}]
// console.table(data)

console.log(__dirname)
console.log(__filename)

// fs.readFile("./text.txt", {
//     if(err) throw err
//     console.log(data)
// })

const Main = async() => {
    // const WriteTxt = await writeFile("text.txt", "Adeoluwa")
    const LineByLineTxt = await appendFile("text.txt", " corper")
    const ReadTxt = await readFile("./data.json", "utf8")

    // const deleteTxt = await unlink("text.md", (err) => {
    //     if (err) throw err;
    //     console.log("file deleted succesfully")
    // })

    // const createfolder = await mkdir("./src", (err) => {
    //      if (err) throw err;
    //     console.log("folder created succesfully")
    // })
    console.log(JSON.parse(ReadTxt));
}

Main();

console.log(os.platform());
console.log(os.arch());
console.log(os.type())