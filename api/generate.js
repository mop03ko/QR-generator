const QRCode = require('qrcode');

module.exports = async (req, res) => {
  try {
    const text = req.query.text || (req.body && req.body.text) || 'https://example.com';
    const size = parseInt(req.query.size, 10) || 300;

    // Generate PNG buffer
    const buffer = await QRCode.toBuffer(text, { type: 'png', width: size });

    res.setHeader('Content-Type', 'image/png');
    // short cache for edge deployments
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=59');
    res.status(200).send(buffer);
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate QR code', message: err.message });
  }
};
