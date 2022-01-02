
function encodeCipherCaesar(inputText, encodingFlag=1) {
    let encodedString = '';
    let newCodePoint = null;
    for(let i = 0; i < inputText.length; i++){
        // console.log(inputText[i]);
        if(inputText[i].charCodeAt(0) > 65 && inputText[i].charCodeAt(0) < 123){
            newCodePoint = inputText[i].charCodeAt(0);
            if(newCodePoint >= 65 && newCodePoint <= 90){
                newCodePoint += encodingFlag;
                if(newCodePoint > 90){
                    newCodePoint = (newCodePoint - 90)+64;
                }
            }else if(newCodePoint >= 97 && newCodePoint <= 122){
                newCodePoint += encodingFlag;
                if(newCodePoint >  122){
                    newCodePoint = (newCodePoint - 122)+96;
                }
            }
            encodedString += String.fromCodePoint(newCodePoint);
        }else {
            encodedString += inputText[i];
        }
        
    }
    return encodedString;
}

function decodeCipherCaesar(inputText, encodingFlag=1) {
    let decodedString = '';
    let newCodePoint = null;
    for(let i = 0; i < inputText.length; i++){
        if(inputText[i].charCodeAt(0) > 65 && inputText[i].charCodeAt(0) < 123){
            newCodePoint = inputText[i].charCodeAt(0);
            if(newCodePoint >= 65 && newCodePoint <= 90){
                newCodePoint -= encodingFlag;
                if(newCodePoint < 65){
                    newCodePoint = 90 - (65 - newCodePoint);
                }
            }else if(newCodePoint >= 97 && newCodePoint <= 122){
                newCodePoint -= encodingFlag;
                if(newCodePoint < 97){
                    newCodePoint = 122 - (97 - newCodePoint);
                }
            }
            decodedString += String.fromCodePoint(newCodePoint);
        }else {
            decodedString += inputText[i];
        }
        
    }
    return decodedString;

}

module.exports = {encodeCipherCaesar, decodeCipherCaesar};
