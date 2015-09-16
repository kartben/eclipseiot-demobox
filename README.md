This repository contains a set of scripts that aim at making it easy to demo Eclipse IoT software.
Here's how to setup your Raspberry Pi 2 to run this demo infrastructure.

Note that we are assuming that you will have setup your touchscreen properly beforehand, and of course have some basic knowledge on how to SSH into the Raspberry Pi and things like that :-) If you got a display from Adafruit, you can use their [setup guide](https://learn.adafruit.com/adafruit-5-800x480-tft-hdmi-monitor-touchscreen-backpack) to correctly configure the resolution etc.

* Install Raspbian Jessie on your Raspberry Pi 2, either using an [SD card image](http://gnutoolchains.com/raspberry/jessie/), or by [upgrading an existing Wheezy installation](http://linuxconfig.org/raspbian-gnu-linux-upgrade-from-wheezy-to-raspbian-jessie-8) (longer).
* Install the following apt packages:
  * ```sudo apt-get install screen node git cmake build-essential iceweasel```
* Install Kura (without the network management features)
  * wget https://s3.amazonaws.com/kura_downloads/raspbian/release/1.2.0/kura_1.2.0_raspberry-pi-2-nn_armv7.deb
  * sudo dpkg -i kura_1.2.0_raspberry-pi-2-nn_armv7.deb
  * sudo apt-get install -f
  * sudo /etc/init.d/kura restart
* Clone this repository recursively in the directory of your choice
  * ```git clone https://github.com/kartben/eclipseiot-demobox --recursive```
* All that is left for you to do is execute the following command
  * ```./start.sh```
* You can now open Iceweasel (web browser) and navigate to ```http://localhost:8089```

Setting up your Raspberry Pi as a Wi-Fi hotspot
===============================================

Follow the instructions at https://github.com/harryallerston/RPI-Wireless-Hotspot to setup your Raspberry Pi as a wireless hotspot
