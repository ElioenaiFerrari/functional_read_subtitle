const path = require('path')
const {
  filterByExtension,
  readDir,
  readSeveralFiles,
} = require('./utils');


const pathDir = path.join(__dirname, '..', 'legendas');

readDir(
  pathDir
).then(
  files => filterByExtension(files, '.srt')
).then(
  readSeveralFiles
).then(
  contentArray => contentArray.join('')
).then(
  contentString => contentString.split('\n')
).then(console.log);