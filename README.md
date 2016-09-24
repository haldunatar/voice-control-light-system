# Voice control light system

Controlling led lights with [Html5 Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

### For this project you will need:

1. Raspberry pi (pi 3 is used here).

2. A breadboard.

3. 4 Led lights (blue, red, green, yellow).

4. 4 resistors (between 270ohms - 320ohms).

5. and the jumper wires

### To get this project running

1. clone the project (on your raspberry-pi)

2. `npm install`

3. `node server`

4. Type `sudo ifconfig` to see your IP address on wlan0 (Note: It changes every time you boot the pi!)

5. On chrome: browse the pi IP address and the server port after like: (192.168.2.10:3000)

### Voice commands:

- Lights on: Turns all the lights on.

- Lights off: Turns all the lights off.

- Blue on: Turns the blue light on.

- Blue off: Turns the blue light off.

- Green on: Turns the green light on.

- Green off: Turns the Green light off.

- Red on: Turns the Red light on.

- Red off: Turns the Red light off.

- Yellow on: Turns the Yellow light on.

- Yellow off: Turns the Yellow light off.



