// import filesystem to read text files
const filesystem = require('fs')

// read ideas list and store in an array
let ideas = filesystem
              .readFileSync(`${__dirname}/../data/ideas.text`, 'utf-8')
              .split(/\r?\n/)

// read audiences list and store in an array
let audiences = filesystem
                  .readFileSync(`${__dirname}/../data/audiences.text`, 'utf-8')
                  .split(/\r?\n/)

// generate a startup
function generate() {
  console.log(`${ideas.random()} for ${audiences.random()}`)
}

// helper function for obtaining random elements from lists
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

// export command to be used in cli
module.exports = generate