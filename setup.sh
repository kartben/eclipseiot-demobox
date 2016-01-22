#!/bin/bash

npm install

echo '** Downloading external files (if needed) **'

wget -N https://hudson.eclipse.org/leshan/job/leshan/lastSuccessfulBuild/artifact/leshan-standalone.jar -P external
wget -N https://openhab.ci.cloudbees.com/job/openHAB-Distribution/lastSuccessfulBuild/artifact/distributions/openhab-offline/target/openhab-offline-2.0.0-SNAPSHOT.zip -P external
unzip -u external/openhab-offline-2.0.0-SNAPSHOT.zip -d external/openhab 

if [ ! -f "external/wakaama/lwm2mclient" ]; then
  echo '** Compiling Wakaama **'
  cd external/wakaama
  cmake tests/client
  make -j4
  cd ../..
fi

screen -c .screenrc

