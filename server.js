const Gpio = require('onoff').Gpio;
const express =  require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/.'));
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// Gpio pins setup
const lightBlue = new Gpio(1, 'out');
const lightGreen = new Gpio(2, 'out');
const lightRed = new Gpio(3, 'out');
const lightYellow = new Gpio(4, 'out');

const blueOn = () => lightBlue.writeSync(1);
const blueOff = () => lightBlue.writeSync(0);

const greenOn = () => lightGreen.writeSync(1);
const greenOff = () => lightGreen.writeSync(0);

const redOn = () => lightRed.writeSync(1);
const redOff = () => lightRed.writeSync(0);

const yellowOn = () => lightYellow.writeSync(1);
const yellowOff = () => lightYellow.writeSync(0);

const lightsOn = () => {
    blueOn();
    greenOn();
    redOn();
    yellowOn();
};

const lightsOff = () => {
    blueOff();
    greenOff();
    redOff();
    yellowOff();
};

const commands = {
    blueOn,
    blueOff,
    greenOn,
    greenOff,
    redOn,
    redOff,
    yellowOn,
    yellowOff,
    lightsOn,
    lightsOff
};

app.get('/', (req, res) =>  res.render('./index.html'));


app.post('/', (req, res) => {

    if(commands[req.body.key]) {

        res.send(req.body.key + ' on!');
    } else {

        res.send(req.body.key + ' not found!');
    }
});

app.listen('3000', () => console.log('running on 3000'));