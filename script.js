// Menus
const chooserMenu = document.querySelector(".chooser");
const encryptionMenu = document.querySelector(".encrypt");
const decryptionMenu = document.querySelector(".decrypt");
// Encryption Menu
const textInput = document.getElementById("text-in");
const encPasteBtn = document.getElementById("enc-paste-btn");
const encKeyInputEnc = document.getElementById("enckey-in-enc");
const encryptedOutput = document.getElementById("encrypted-out");
const encCopyBtn = document.getElementById("enc-copy-btn");
// Decryption Menu
const encryptedInput = document.getElementById("encrypted-in");
const decPasteBtn = document.getElementById("dec-paste-btn");
const encKeyInputDec = document.getElementById("enckey-in-dec");
const decryptedOutput = document.getElementById("decrypted-out");
const decCopyBtn = document.getElementById("dec-copy-btn");
// In Common
const backBtn = document.getElementById("back-btn");

// Menu Interchange
function chooserM() {
  backBtn.style.display = 'none';
  chooserMenu.style.display = 'block';
  encryptionMenu.style.display = 'none';
  decryptionMenu.style.display = 'none';
}

function encryptionM() {
  backBtn.style.display = 'block';
  chooserMenu.style.display = 'none';
  encryptionMenu.style.display = 'block';
  decryptionMenu.style.display = 'none';
}

function decryptionM() {
  backBtn.style.display = 'block';
  chooserMenu.style.display = 'none';
  encryptionMenu.style.display = 'none';
  decryptionMenu.style.display = 'block';
}

// Encryption
function encrypt() {
	const text_to_encrypt = textInput.value;
	const enckey = encKeyInputEnc.value;
	encryptedOutput.value = betacrypt.enc(text_to_encrypt, enckey);
	}
	
// Decryption
function decrypt() {
	const text_to_decrypt = encryptedInput.value;
	const enckey = encKeyInputDec.value;
	decryptedOutput.value = betacrypt.dec(text_to_decrypt, enckey);
	}
	
// Extras - EncryptionM

// Paste TXT
function pasteEnc() {
  navigator.clipboard.readText().then((clipboardText) => {
    textInput.value = clipboardText;
  }).catch((error) => {
    console.error('Failed to read clipboard data: ', error);
  });
}
// Copy TXT
function copyEnc() {
  const textToCopy = encryptedOutput.value;
  
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log('Text copied to clipboard: ', textToCopy);
    })
    .catch((error) => {
      console.error('Failed to copy text to clipboard: ', error);
    });
}

// Extras - DecryptionM

// Paste TXT
function pasteDec() {
  navigator.clipboard.readText().then((clipboardText) => {
    encryptedInput.value = clipboardText;
  }).catch((error) => {
    console.error('Failed to read clipboard data: ', error);
  });
}
// Copy TXT
function copyDec() {
  const textToCopy = decryptedOutput.value;
  
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log('Text copied to clipboard: ', textToCopy);
    })
    .catch((error) => {
      console.error('Failed to copy text to clipboard: ', error);
    });
}
	