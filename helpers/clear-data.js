const filesystem = require('fs');
const path = require('path');

const dataDirPath = path.join(__dirname, '../data/');

for (let i = 0; i < process.argv.length; i++) {
    let filename = process.argv[i];
    let filepath = path.join(dataDirPath, `/${filename}`);
    if (filesystem.existsSync(filepath)) {
        let contents = filesystem
              .readFileSync(filepath, 'utf-8')
              .split('\r\n');

        let uniques = contents.filter((v, i, arr) => arr.indexOf(v) === i).sort();

        filesystem.writeFileSync(filepath, uniques.join('\n'));
    }
}
