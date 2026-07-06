// const fs = require("fs")

const {readFile, writeFile, appendFile} = require("fs/promises")

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
    const ReadTxt = await readFile("./text.md", "utf8")
    console.log(ReadTxt);
}

Main();

