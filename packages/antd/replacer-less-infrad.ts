import path from 'path'
import fs from 'fs'
import glob from 'glob'

function replaceAntd(matches = []) {
  matches.forEach((relativePath) => {
    const filePath = path.resolve(__dirname, relativePath)
    const fileText = fs.readFileSync(filePath, 'utf8')
    fs.writeFileSync(filePath, fileText.replace(/~antd/g, `~infrad`))
  })
}
function replaceAntdInLess() {
  glob('esm/**/*.less', (err, matches) => {
    replaceAntd(matches)
  })
  glob('lib/**/*.less', (err, matches) => {
    replaceAntd(matches)
  })
}

replaceAntdInLess()
