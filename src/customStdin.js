const {stdout, stdin} = process;

const customStdin = () => {
    stdout.write(`Please, enter the string to encode/decode.To cancel you can press Ctrl+C\n`);
    stdin.resume();
    return stdin;
  };
  
  module.exports = {customStdin};