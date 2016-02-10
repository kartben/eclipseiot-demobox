#!/bin/bash

npm install --loglevel info

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

if [ ! -f "external/tiaki-java/service-discovery-cli/build/libs/tiaki-cli-1.0.jar" ]; then
  echo '** Compiling Tiaki **'
  cd external/tiaki-java/service-discovery-cli
  ./gradlew clean fatJar
  cd ../../..
fi




screen -c .screenrc

