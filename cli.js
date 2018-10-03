#!/usr/bin/env node

// imports
let generate = require('./commands/generate') 

// parse command line arguments
let command  = process.argv[2]

switch (command) {

  case 'generate':
  case 'g':
    generate()
    break

  case 'help':
    console.log('Usage: startup-cli generate')
    break

  default:
    console.log('Invalid command syntax. Type \'help\' to see correct syntax.')

}