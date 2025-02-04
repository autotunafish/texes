import bs58check from 'bs58check'
import {bech32m} from 'bech32'

// From t1 to tex
var b58decoded = bs58check.decode('t1VmmGiyjVNeCjxDZzg7vZmd99WyzVby9yC')
console.assert(b58decoded.length == 22, 'Invalid length');
console.assert(b58decoded[0] == 0x1C && b58decoded[1] == 0xB8, 'Invalid address prefix');
var pkh = b58decoded.slice(2)
var tex = bech32m.encode('tex', bech32m.toWords(pkh))
console.log(tex)

// From tex to t1
var bech32decoded = bech32m.decode('tex1hrhg2ejfdj3amtftfh33caft69k7d3xt6uspch')
console.assert(bech32decoded.prefix == 'tex', 'Invalid address prefix')
var pkh2 = Uint8Array.from(bech32m.fromWords(bech32decoded.words))
console.assert(pkh2.length == 20, 'Invalid length');
var t1 = bs58check.encode(Buffer.concat([Uint8Array.from([0x1C, 0xB8]), pkh2]))
console.log(t1)
