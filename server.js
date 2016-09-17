const Gpio = require('onoff').Gpio;
const express =  require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/.'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) =>  res.render('./index.html'));

app.listen('3000', () => console.log('running on 3000'));

//Gpio pins setup
const lightBlue = new Gpio(1, 'out');
const lightGreen = new Gpio(2, 'out');
const lightRed = new Gpio(3, 'out');
const lightYellow = new Gpio(4, 'out');

const lightBlueOn = () => lightBlue.writeSync(1);
const lightBlueOff = () => lightBlue.writeSync(0);

const lightGreenOn = () => lightGreen.writeSync(1);
const lightGreenOff = () => lightGreen.writeSync(0);

const lightRedOn = () => lightRed.writeSync(1);
const lightRedOff = () => lightRed.writeSync(0);

const lightYellowOn = () => lightYellow.writeSync(1);
const lightYellowOff = () => lightYellow.writeSync(0);

const allTheLightsOff = () => {
    lightBlueOff();
    lightGreenOff();
    lightRedOff();
    lightYellowOff();
};

const allTheLightsOn = () => {
    lightBlueOn();
    lightGreenOn();
    lightRedOn();
    lightYellowOn();
};
