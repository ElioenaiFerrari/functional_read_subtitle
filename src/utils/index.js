const fs = require('fs')
const path = require('path')


function readDir(dirPath) {
  return new Promise((resolve, reject) => {
    try {
      const dir = fs.readdirSync(dirPath);
      const readFile = file => path.join(dirPath, file);
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


function readUniqueFile(filePath) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(filePath, {
        encoding: 'utf-8'
      });

      resolve(content.toString());
    } catch (error) {
      reject(error);
    }
  });
}


function readSeveralFiles(severalFilesPath = []) {
  return Promise.all(
    severalFilesPath.map(readUniqueFile)
  );
}


module.exports = {
  readDir,
  filterByExtension,
  readUniqueFile,
  readSeveralFiles
}