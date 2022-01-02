# Ciphering-CLI-Tool
Function: 
  Encode and decode a text by 3 substitution ciphers (from file or a command shell). Use only English alphabet!

Avaliable 3 ciphers:
  - Caesar cipher;
  - Atbash cipher;
  - ROT-8

Functional:
  CLI tool should accept 3 options (short alias and full name):
    -c, --config: config for ciphers Config is a string with pattern {XY(-)}n, where:
      X is a cipher mark:
      C is for Caesar cipher (with shift 1)
      A is for Atbash cipher
      R is for ROT-8 cipher
      Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
        1 is for encoding
        0 is for decoding
    -i, --input: a path to input file
    -o, --output: a path to output file

Example: 
  $ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
  input.txt This is secret. Message about "_" symbol!
  output.txt Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!
  config "C1-C1-R0-A" means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"
