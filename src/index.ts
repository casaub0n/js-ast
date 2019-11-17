import fs from 'fs'
import util from 'util'

const readFile = util.promisify(fs.readFile)

readFile('hoge.txt', 'utf-8').then(data => {
  console.log(data)
})
