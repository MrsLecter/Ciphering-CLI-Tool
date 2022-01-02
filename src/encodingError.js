class EncodingError extends Error{
    constructor(message, ...parameters) {
        super(message, ...parameters)
        this.name = 'EncodingError'
        this.message = message
    }
}

module.exports = {EncodingError};