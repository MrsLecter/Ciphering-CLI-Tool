# Ciphering-CLI-Tool
<h4>Function:</h4>
 <p>Encode and decode a text by 3 substitution ciphers (from file or a command shell). Use only English alphabet!</p>

<h4>Avaliable 3 ciphers:</h4>
  - Caesar cipher;
  - Atbash cipher;
  - ROT-8

<h4>Functional:</h4>
 <ul>CLI tool should accept 3 options (short alias and full name):
 <li><ul>-c, --config: config for ciphers Config is a string with pattern {XY(-)}n, where:</li>
  <li>X is a cipher mark:</li>
      <li>C is for Caesar cipher (with shift 1)</li>
      <li>A is for Atbash cipher</li>
      <li>R is for ROT-8 cipher</li>
      <li>Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)</li>
        <li>1 is for encoding</li>
        <li>0 is for decoding</li></ul></li>
    <li>-i, --input: a path to input file</li>
    <li>-o, --output: a path to output file</li>
  </ul>

<h4>Example:</h4>
  <code>$ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"</code>
  <p>input.txt: This is secret. Message about "_" symbol!</p>
  <p>output.txt: Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!</p>
  <p>config "C1-C1-R0-A" means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"</p>
