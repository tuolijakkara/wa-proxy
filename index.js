const express = require('express');
const Unblocker = require('unblocker');
const app = express();

const unblocker = new Unblocker({ 
  prefix: '/proxy/' 
});

app.use(unblocker);

app.get('/', (req, res) => {
  res.send('Proxy pystyssä! Mene osoitteeseen /proxy/https://whatsapp.com selaimen osoiterivillä.');
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('upgrade', unblocker.onUpgrade);
