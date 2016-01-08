#!/bin/bash

npm install

echo '** Downloading external files (if needed) **'

wget -N https://hudson.eclipse.org/leshan/job/leshan/lastSuccessfulBuild/artifact/leshan-standalone.jar -P external
wget -N https://openhab.ci.cloudbees.com/job/openHAB2/lastSuccessfulBuild/artifact/distribution/target/distribution-2.0.0-SNAPSHOT-demo.zip -P external
unzip -u external/distribution-2.0.0-SNAPSHOT-demo.zip -d external/openhab 

if [ ! -f "external/wakaama/lwm2mclient" ]; then
  echo '** Compiling Wakaama **'
  cd external/wakaama
  cmake tests/client
  make -j4
  cd ../..
fi

screen -c .screenrc

