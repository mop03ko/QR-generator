// Simple QR generator using the 'qrcode' package.
// Usage: node src/index.js "<text-or-url>" [output-file]
const fs = require('fs');
const QRCode = require('qrcode');

const text = process.argv[2] || 'https://example.com';
const out = process.argv[3] || 'qrcode.png';

QRCode.toFile(out, text, { type: 'png' })
  .then(() => {
    console.log(`Saved QR code for "${text}" to ${out}`);
  })
  .catch(err => {
    console.error('Failed to generate QR code:', err);
    process.exit(1);
  });
