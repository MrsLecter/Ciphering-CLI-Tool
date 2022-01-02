const inputText = 'How can you tell an extrovert from an introvert at NSA?';
const outputText = 'Pwe kiv gwc bmtt iv mfbzwdmzb nzwu iv qvbzwdmzb ib VAI?';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET2= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function encodeRot8(inputText) {
    let outputText = '';
    let newIndex = null;
    for(let i = 0; i < inputText.length; i++) {
        newIndex = ALPHABET.indexOf(inputText[i]);
        if(newIndex === -1){
            newIndex = ALPHABET2.indexOf(inputText[i]);
            if(newIndex === -1){
                outputText += inputText[i];
            }else{
                newIndex += 8;
                if(newIndex >= 26) {
                    newIndex = newIndex - 26;
                }
                outputText += ALPHABET2[newIndex];
            }
        }else{
            newIndex += 8;
            if(newIndex >= 26) {
                newIndex = newIndex - 26;
            }
            outputText += ALPHABET[newIndex];
        }
    }
    return outputText;
}

function decodeRot8(inputText) {
    let outputText = '';
    let newIndex = null;
    for(let i = 0; i < inputText.length; i++) {
        newIndex = ALPHABET.indexOf(inputText[i]);
        if(newIndex === -1){
            newIndex = ALPHABET2.indexOf(inputText[i]);
            if(newIndex === -1){
                outputText += inputText[i];
            }else{
                newIndex -= 8;
                if(newIndex < 0) {
                    newIndex = newIndex + 26;
                }
                outputText += ALPHABET2[newIndex];
            }
        }else{
            newIndex -= 8;
            if(newIndex < 0) {
                newIndex = newIndex + 26;
            }
            outputText += ALPHABET[newIndex];
        }
    }
    return outputText;
}

module.exports = {encodeRot8, decodeRot8};

console.log(decodeRot8('Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!'));