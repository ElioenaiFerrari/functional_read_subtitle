const path = require('path')
const {
  filterByExtension,
  readDir
} = require('./utils');


const pathDir = path.join(__dirname, '..', 'legendas');

readDir(pathDir).then(
  files => filterByExtension(files, '.srt'),
).then(console.log);