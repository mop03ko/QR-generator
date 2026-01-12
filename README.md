# QR-generator

A small example QR generator demo (Node.js). This repository includes a minimal example using the `qrcode` npm package and instructions to run it.

## Usage

1. Install dependencies:
```bash
npm install
```

2. Generate a QR image:
```bash
node src/index.js "https://example.com" output.png
```

The script will write `output.png` (PNG image) with the QR code for the provided text/URL.
