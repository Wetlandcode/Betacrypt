const betacrypt = {
  enc: function(original_text, enckey) {
    let encrypted_text = "";

    for (let i = 0; i < original_text.length; i++) {
      const char = original_text.charAt(i);
      const enckeyChar = enckey.charAt(i % enckey.length).charCodeAt(0);
      const encryptedChar = char.charCodeAt(0) + enckeyChar;
      encrypted_text += String.fromCharCode(encryptedChar);
    }

    return encrypted_text;
  },

  dec: function(encrypted_text, enckey) {
    let decrypted_text = "";

    for (let i = 0; i < encrypted_text.length; i++) {
      const char = encrypted_text.charAt(i);
      const enckeyChar = enckey.charAt(i % enckey.length).charCodeAt(0);
      const decryptedChar = char.charCodeAt(0) - enckeyChar;
      decrypted_text += String.fromCharCode(decryptedChar);
    }

    return decrypted_text;
  }
};