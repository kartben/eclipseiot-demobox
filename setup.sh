#!/bin/bash

npm install

echo '** Downloading external files (if needed) **'

wget -N https://hudson.eclipse.org/leshan/job/leshan/lastSuccessfulBuild/artifact/leshan-standalone.jar -P external
wget -N https://bintray.com/artifact/download/openhab/bin/openhab-2.0.0.alpha2-demo.zip -P external
unzip external/openhab-2.0.0.alpha2-demo.zip -d external/openhab -u

if [ ! -f "external/wakaama/lwm2mclient" ]; then
  echo '** Compiling Wakaama **'
  cd external/wakaama
  cmake tests/client
  make -j4
  cd ../..
fi

screen -c .screenrc

