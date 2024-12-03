function obfuscate() {
  const inputText = document.getElementById('inputText').value;
  const obfuscatedText = obfuscateText(inputText);
  document.getElementById('outputText').value = obfuscatedText;
}

function deobfuscate() {
  const inputText = document.getElementById('inputText').value;
  const deobfuscatedText = deobfuscateText(inputText);
  document.getElementById('outputText').value = deobfuscatedText;
}

function obfuscateText(text) {
  const encodedText = btoa(text); // Base64 encode the original text
  let obfuscatedText = '';

  for (let i = 0; i < encodedText.length; i++) {
    const charCode = encodedText.charCodeAt(i);
    obfuscatedText += '&#' + charCode + ';'; // Convert each character to its HTML entity representation
  }

  return obfuscatedText;
}

function deobfuscateText(text) {
  let deobfuscatedText = '';

  const entities = text.match(/&#\d+;/g);
  if (entities) {
    for (let i = 0; i < entities.length; i++) {
      const charCode = entities[i].match(/\d+/);
      if (charCode) {
        deobfuscatedText += String.fromCharCode(charCode[0]); // Convert each HTML entity back to its original character
      }
    }
  }

  return atob(deobfuscatedText); // Base64 decode the deobfuscated text
}
