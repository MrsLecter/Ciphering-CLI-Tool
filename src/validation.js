
const { stdout, stderr } = process;
const fs = require('fs');

const {EncodingError}  = require('./encodingError');

function toValidateCommand(inputAlias){

  //validate command sign
    const [commandOption, cipherMark, inputCommand, inputWay, outputCommand, outputWay]  =  inputAlias;
    if(!commandOption.localeCompare('-c') && !commandOption.localeCompare('-config')){
      throw new EncodingError(`${commandOption} isn't correct!`);
    }
    if((inputCommand!== undefined) && !inputCommand.localeCompare('-i') && !inputCommand.localeCompare('-input')){
      if(!fs.lstatSync(inputWay).isFile()){
        stdout.write('Input from command line')
      }else{
        throw new EncodingError(`${inputCommand} isn't correct!`);
      }
      
    }
    if((outputCommand !== undefined) && !outputCommand.localeCompare('-o') && !outputCommand.localeCompare('-output')){
      if(!fs.lstatSync(outputWay).isFile()){
        stdout.write('Output to command line')
      }else{
         throw new EncodingError(`${outputCommand} isn't correct!`);
      }
     
    }

    let cipherMarkArray = cipherMark.split('-');

    //validate cipher command alias
    for(let i = 0; i < cipherMarkArray.length; i++){
      if(cipherMarkArray[i].length > 2){
        throw new EncodingError(`${cipherMarkArray[i]} - incorrect format!`);
      }
      if(!(+cipherMarkArray[i][1] === 1)){
        if(!(+cipherMarkArray[i][1] === 0)){ 
          if(cipherMarkArray[i][0].localeCompare('A') == 0 && cipherMarkArray[i].length > 1){
            throw new EncodingError(`\n${cipherMarkArray[i]} - second symbol is not required!\n`);
          }else if(cipherMarkArray[i][0].localeCompare('A') !== 0){
            throw new EncodingError(`${cipherMarkArray[i]} - second symbol should be number`);
          }
        }
      }
    }
    
    //validate input/output way
    if((outputWay !== undefined) && !fs.lstatSync(outputWay).isFile()){
      throw new EncodingError(`${outputWay} - is incorrect way`);
    }
    if((inputWay !== undefined) && !fs.lstatSync(inputWay).isFile()){
      throw new EncodingError(`${inputWay} - is incorrect way`);
    }
}

module.exports = {toValidateCommand}