var sodium = require("sodium-native");

var message ="secret message to be encrypted";

var encryptedMessage = sodium.sodium_malloc(message.length);

console.log(`encrypted message is ${encryptedMessage} - characters long`);
