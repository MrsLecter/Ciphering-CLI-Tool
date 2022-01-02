const inputText = 'Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.';
const inputText2 = 'Sviv blf xzm urmw zxgrergrvh gl kizxgrhv blfi ivzwrmt hprooh. Ivzwrmt droo svok blf gl rnkilev blfi fmwvihgzmwrmt lu gsv ozmtfztv zmw yfrow blfi elxzyfozib. ';

const LETTER_AMOUNT = 26;

function decodeAtbash(inputText) {
    let decodedString = '';
    let newCodePoint = null;
    for(let i = 0; i < inputText.length; i++){
        newCodePoint = inputText[i].charCodeAt(0)
        if(newCodePoint >= 65 && newCodePoint <= 90){
            newCodePoint = LETTER_AMOUNT - (newCodePoint-65) + 1;
            decodedString += String.fromCodePoint(newCodePoint+63);
        }else if(newCodePoint >= 97 && newCodePoint <= 122){
            newCodePoint = LETTER_AMOUNT - (newCodePoint-97) + 1;
            decodedString += String.fromCodePoint(newCodePoint+95);
        }else{
            decodedString += String.fromCodePoint(newCodePoint);
        }
        
        
    }
    return decodedString;
}


function encodeAtbash(inputText) {
    let encodedString = '';
    let newCodePoint = null;
    for(let i = 0; i < inputText.length; i++){
        newCodePoint = inputText[i].charCodeAt(0)
        if(newCodePoint >= 65 && newCodePoint <= 90){
            newCodePoint = LETTER_AMOUNT - (newCodePoint-65-1);
            encodedString += String.fromCodePoint(newCodePoint+63);
        }else if(newCodePoint >= 97 && newCodePoint <= 122){
            newCodePoint = LETTER_AMOUNT - (newCodePoint-97-1);
            encodedString += String.fromCodePoint(newCodePoint+95);
        }else{
            encodedString += String.fromCodePoint(newCodePoint);
        }
        
        
    }
    return encodedString;
}

module.exports = {encodeAtbash, decodeAtbash};
