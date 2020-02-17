# weak-encryption-example

## there is 2 vulnerabilities

1. weak-encryption in `index.vuln.js` line `3`

```js

const crypto = require('crypto')

crypto.createHash('sha1').update('alice', 'utf8').digest()  //supported

```

2. weak-encryption in `index.vuln.ts` line `3`

```js

import crypto from "crypto";

crypto.createHash('sha1').update('alice', 'utf8').digest()  //supported

```
