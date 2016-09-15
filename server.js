const Gpio = require('onoff').Gpio;
const express =  require('express');
const app = express();

app.use(express.static(__dirname + '/.'));

app.get('/', (req, res) =>  res.render('./index.html'));

app.listen('3000', () => console.log('running on 3000'));

