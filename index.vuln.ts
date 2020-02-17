import crypto from "crypto";


crypto.createHash('sha1').update('alice', 'utf8').digest()  //supported
