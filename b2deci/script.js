function showError(msg) {
  document.getElementById('errorMsg').textContent = msg;
}

function binToDec() {
  showError('');
  const raw = document.getElementById('binaryInput').value.trim();
  if (!raw) {
    showError('Enter a binary value first.');
    return;
  }

  // Split on whitespace so multiple space-separated binary groups
  // (e.g. bytes) can each be converted independently.
  const tokens = raw.split(/\s+/);

  for (const token of tokens) {
    if (!/^[01]+$/.test(token)) {
      showError('Binary input can only contain 0s and 1s (groups separated by spaces).');
      return;
    }
  }

  const decimals = tokens.map(t => parseInt(t, 2).toString(10));
  document.getElementById('decInput').value = decimals.join(' ');
}

function decToBin() {
  showError('');
  const raw = document.getElementById('decInput').value.trim();
  if (!raw) {
    showError('Enter a decimal value first.');
    return;
  }

  const tokens = raw.split(/\s+/);

  for (const token of tokens) {
    if (!/^\d+$/.test(token)) {
      showError('Decimal input can only contain whole numbers (groups separated by spaces).');
      return;
    }
  }

  const binaries = tokens.map(t => parseInt(t, 10).toString(2));
  document.getElementById('binaryInput').value = binaries.join(' ');
}

function clearAll() {
  document.getElementById('binaryInput').value = '';
  document.getElementById('decInput').value = '';
  showError('');
}

function copyField(id) {
  const el = document.getElementById(id);
  el.select();
  el.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(el.value);
}
