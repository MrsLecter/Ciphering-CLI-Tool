const {cipherCaesarStream, cipherRotStream, cipherAtbashStream} = require('./src/transformStream');
const {Readable, writable} = require('stream');
const {customStdin} = require('./src/customStdin');
const {CustomReadableStream} = require('./src/readSream');
const {CustomWritableStream} = require('./src/writeStream');
const {toValidateCommand} = require('./src/validation');

const { stdout, stdin, stderr } = process;
const { pipeline} = require('stream');
const fs = require('fs');

const inputAlias = process.argv.slice(2);

//validate input alias
toValidateCommand(inputAlias);

const [commandOption, cipherMark, inputCommand, inputWay, outputCommand, outputWay]  = process.argv.slice(2);

//validate input alias
toValidateCommand(inputAlias);

const inputStream = ((inputAlias.indexOf('-i') + 1) || (inputAlias.indexOf('-input') + 1)) ? new CustomReadableStream(inputWay) : process.stdin;
const outputStream = ((inputAlias.indexOf('-o') + 1) || (inputAlias.indexOf('-output') + 1)) ? new CustomWritableStream(outputWay) : stdout;
  
// create stream pool
function toReadChipherCommand(cipherMark) {
  let commandSequence = [];
  let commandArray = cipherMark.split('-');
  console.log(commandArray);
  for (let i = 0; i < commandArray.length; i++) {
    let flagY = +commandArray[i][1];
    if (commandArray[i].toLowerCase().includes('c')) {
        commandSequence.push(cipherCaesarStream(flagY));
    } else if (commandArray[i].toLowerCase().includes('r')) {
        commandSequence.push(cipherRotStream(flagY));
    } else if (commandArray[i].toLowerCase().includes('a')) {
      commandSequence.push(cipherAtbashStream());
    }
  }
  return commandSequence;
}

//create pipeline
function toConvertText(commandSequence) {
  console.log('in toConvertText')
  
  pipeline(
    inputStream,
    ...commandSequence,
    outputStream,
    (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } else {
        console.log('Pipeline succeeded.');
      }
    }

  );
}


toConvertText(toReadChipherCommand(cipherMark));
