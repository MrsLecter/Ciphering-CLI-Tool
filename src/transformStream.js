const { Transform } = require('stream');
const { encodeCipherCaesar, decodeCipherCaesar } = require('../ciphers/cipherCaesar');
const { encodeAtbash } = require('../ciphers/cipherAtbash');
const { encodeRot8, decodeRot8 } = require('../ciphers/cipherRot-8');

const cipherCaesarStream = (shift) =>{
    return new Transform({
        transform(chunk, encoding, callback) {
            let cipher;
            shift ? cipher = encodeCipherCaesar(String(chunk)) : cipher = decodeCipherCaesar(String(chunk));
            callback(null, cipher);
        }
    });
};

const cipherRotStream = (shift) => {
    return new Transform({
        transform(chunk, encoding, callback) {
            let cipher;
            shift ? cipher = encodeRot8(String(chunk)) : cipher = decodeRot8(String(chunk));
            callback(null, cipher);
        }
    });
};

const cipherAtbashStream = () => {
    return new Transform({
        transform(chunk, encoding, callback) {
          callback(null, encodeAtbash(String(chunk)));
        }
    });
};

module.exports = {cipherCaesarStream, cipherRotStream, cipherAtbashStream};