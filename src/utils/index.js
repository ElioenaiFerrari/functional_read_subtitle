const fs = require('fs')
const path = require('path')


function readDir(pathDir) {
  return new Promise((resolve, reject) => {
    try {
      const dir = fs.readdirSync(pathDir);
      const readFile = file => path.join(pathDir, file);
      const files = dir.map(readFile);

      resolve(files);
    } catch (error) {
      reject(error)
    }
  });
}

function filterByExtension(array = [], extension = '') {
  const filteredItem = (item) => item.endsWith(extension);

  return array.filter(filteredItem);
}


module.exports = {
  readDir,
  filterByExtension
}