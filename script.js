function showError(msg) {
  document.getElementById('errorMsg').textContent = msg;
}

function binToHex() {
  showError('');
  const raw = document.getElementById('binaryInput').value.replace(/\s+/g, '');
  if (!raw) {
    showError('Enter a binary value first.');
    return;
  }
  if (!/^[01]+$/.test(raw)) {
    showError('Binary input can only contain 0s and 1s.');
    return;
  }
  // Pad to a multiple of 4 bits from the left
  const padLength = (4 - (raw.length % 4)) % 4;
  const padded = '0'.repeat(padLength) + raw;
  let hex = '';
  for (let i = 0; i < padded.length; i += 4) {
    const nibble = padded.substr(i, 4);
    hex += parseInt(nibble, 2).toString(16);
  }
  // Group hex output in pairs for readability
  const grouped = hex.toUpperCase().match(/.{1,2}/g).join(' ');
  document.getElementById('hexInput').value = grouped;
}

function hexToBin() {
  showError('');
  const raw = document.getElementById('hexInput').value.replace(/\s+/g, '');
  if (!raw) {
    showError('Enter a hex value first.');
    return;
  }
  if (!/^[0-9a-fA-F]+$/.test(raw)) {
    showError('Hex input can only contain 0-9 and A-F.');
    return;
  }
  let bin = '';
  for (let i = 0; i < raw.length; i++) {
    bin += parseInt(raw[i], 16).toString(2).padStart(4, '0');
  }
  // Group binary output in bytes (8 bits) for readability
  const grouped = bin.match(/.{1,8}/g).join(' ');
  document.getElementById('binaryInput').value = grouped;
}

function clearAll() {
  document.getElementById('binaryInput').value = '';
  document.getElementById('hexInput').value = '';
  showError('');
}

function copyField(id) {
  const el = document.getElementById(id);
  el.select();
  el.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(el.value);
}
