const express = require('express');
const qr = require('qr-image');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/qrcode', (req, res) => {
  const { text } = req.query;
  if (!text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const qrSvg = qr.image(text, { type: 'svg' });
  res.type('svg');
  qrSvg.pipe(res);
});


module.exports = app;