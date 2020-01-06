# weak-encryption-example

## there is 1 vulnerability

1. weak-encryption in `index.vuln.js` line `3`

```js

const crypto = require('crypto')

crypto.createHash('sha1').update('alice', 'utf8').digest()  //supported

```