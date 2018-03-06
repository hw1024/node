const crypto = require('crypto');

/* 加密方法 */
exports.encrypt = (data, key) => {
  /* 注意，第二个参数是Buffer类型 */
  return crypto.publicEncrypt(key, Buffer.from(data));
};

/* 解密方法 */
exports.decrypt = (encrypted, key) => {
  /* 注意，encrypted是Buffer类型 */
  return crypto.privateDecrypt(key, encrypted);
};
