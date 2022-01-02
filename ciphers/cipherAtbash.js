const LETTER_AMOUNT = 26;

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

module.exports = {encodeAtbash};
