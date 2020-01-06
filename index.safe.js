const crypto = require('crypto')

crypto.createHash('sha512').update('alice', 'utf8').digest()  //supported