This repository contains a set of scripts that aim at making it easy to demo Eclipse IoT software.
Here's how to setup your Raspberry Pi 2 to run this demo infrastructure.

Note that we are assuming that you will have setup your touchscreen properly beforehand, and of course have some basic knowledge on how to SSH into the Raspberry Pi and things like that :-) If you got a display from Adafruit, you can use their [setup guide](https://learn.adafruit.com/adafruit-5-800x480-tft-hdmi-monitor-touchscreen-backpack) to correctly configure the resolution etc.

* Install [Raspbian Jessie](https://www.raspberrypi.org/downloads/raspbian/) on your Raspberry Pi 2.
* Install node.js
  * ```wget http://node-arm.herokuapp.com/node_latest_armhf.deb```<br>
    ```sudo dpkg -i node_latest_armhf.deb``` 
* Install the following apt packages:
  * ```sudo apt-get install screen git cmake build-essential iceweasel```
* Install Kura (without the network management features)
  * ```wget https://s3.amazonaws.com/kura_downloads/raspbian/release/1.2.0/kura_1.2.0_raspberry-pi-2-nn_armv7.deb```<br>
  ```sudo dpkg -i kura_1.2.0_raspberry-pi-2-nn_armv7.deb```<br>
  ```sudo apt-get install -f```<br>
  ```sudo /etc/init.d/kura restart```
* Clone this repository recursively in the directory of your choice
  * ```git clone https://github.com/kartben/eclipseiot-demobox --recursive```
* All that is left for you to do is navigate to the directory where you cloned the repository, and execute the following command
  * ```./setup.sh```
* You can now open Iceweasel (web browser) and navigate to ```http://localhost:8089```

Kura Greenhouse demo
====================

You will probably want to play with Kura at some point. You may therefore want to install the greenhouse monitoring solution that is documented [here](http://iot.eclipse.org/java/tutorial/).

Setting up your Raspberry Pi as a Wi-Fi hotspot
===============================================

Follow the instructions at https://github.com/harryallerston/RPI-Wireless-Hotspot to setup your Raspberry Pi as a wireless hotspot
