const { encodeCipherCaesar, decodeCipherCaesar } = require('./cipherCaesar');
const { encodeAtbash } = require('./cipherAtbash');
const { encodeRot8, decodeRot8 } = require('./cipherRot-8');

const line = 'This is secret. Message about "_" symbol!';

const { stdout, stdin } = process;
const { pipeline, Transform } = require('stream');
const fs = require('fs');

const [commandOption, chipherMark, inputCommand, inputWay, outputCommand, outputWay] = process.argv.slice(2);
console.log(commandOption, chipherMark, inputCommand, inputWay, outputCommand, outputWay);

function toReadChipherCommand(chipherMark) {
  let commandSequence = [];
  let commandArray = chipherMark.split('-');
  console.log(commandArray);
  for (let i = 0; i < commandArray.length; i++) {
    let flagY = +commandArray[i][1];
    if (commandArray[i].toLowerCase().includes('c')) {
      if (flagY === 1) {
        console.log(encodeCipherCaesar(line));
        commandSequence.push(new Transform({
          transform(chunk, encoding, callback) {
            callback(null, encodeCipherCaesar(String(chunk)));
          }
        }));
      } else if (flagY === 0) {
        console.log(decodeCipherCaesar(line));
        commandSequence.push(new Transform({
          transform(chunk, encoding, callback) {
            callback(null, decodeCipherCaesar(String(chunk)));
          }
        }));
      }
    } else if (commandArray[i].toLowerCase().includes('r')) {
      if (flagY === 1) {
        console.log(encodeRot8(line));
        commandSequence.push(new Transform({
          transform(chunk, encoding, callback) {
            callback(null, encodeRot8(String(chunk)));
          }
        }));
      } else if (flagY === 0) {
        console.log(decodeRot8(line));
        commandSequence.push(new Transform({
          transform(chunk, encoding, callback) {
            callback(null, decodeRot8(String(chunk)));
          }
        }));
      }
    } else if (commandArray[i].toLowerCase().includes('a')) {
      console.log(encodeAtbash(line));
      commandSequence.push(new Transform({
        transform(chunk, encoding, callback) {
          callback(null, encodeAtbash(String(chunk)));
        }
      }));
    }

  }
  return commandSequence;
}

function toConvertText(commandSequence) {
  let dataStr = '';
  let outputStr = null;


  const inputSteram = fs.createReadStream('./input.txt');
  const outputStream = fs.createWriteStream('./output.txt');

  pipeline(
    inputSteram,
    ...commandSequence,
    outputStream,
    (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } else {
        console.log('Pipeline succeeded.');
      }
    }

  )
}


toConvertText(toReadChipherCommand(chipherMark));

