class VigenèreCipher {
  constructor(key, alphabet) {
    this.key = key;
    this.alphabet = alphabet;
  }

  encode(message) {
    let encodedMessage = '';
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (this.alphabet.includes(char)) {
        const keyChar = this.key[i % this.key.length];
        const keyIndex = this.alphabet.indexOf(keyChar);
        const shift = this.alphabet.indexOf(char);
        const encodedChar = this.alphabet[(shift + keyIndex) % this.alphabet.length];
        encodedMessage += encodedChar;
      } else {
        encodedMessage += char;
      }
    }
    return encodedMessage;
  }

  decode(message) {
    let decodedMessage = '';
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (this.alphabet.includes(char)) {
        const keyChar = this.key[i % this.key.length];
        const keyIndex = this.alphabet.indexOf(keyChar);
        const shift = (this.alphabet.indexOf(char) - keyIndex + this.alphabet.length) % this.alphabet.length;
        const decodedChar = this.alphabet[shift];
        decodedMessage += decodedChar;
      } else {
        decodedMessage += char;
      }
    }
    return decodedMessage;
  }
}