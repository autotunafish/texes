# texes
Reference implementation for encoding and decoding Zcash Tex addys in js.

To run, copy down the file (obviously) and in the file directory, run 
    'npm install bech32' 
and 
    'npm install bs58check' 
(or both at the same time whatevs). Open the file and paste your transparent address to be converted and/or tex address to be reverted. The script does both as an example.
Run the command 
    'node texex.js 2>/dev/null'
The 2>/dev/null suppresses an error, run without to see.
