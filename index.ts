const glob = require("glob")

function main() {
  const directory = process.argv[2]
  const files = glob.sync(`${directory}/**/.todo`)
  console.log(files)
}

main();