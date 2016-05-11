var HOST = window.location.hostname ;

var WindowDialog = new function() {
    this.openedWindows = {};

    this.open = function(instanceName) {
        var handle = window.open(Array.prototype.splice.call(arguments, 1));

        this.openedWindows[instanceName] = handle;

        return handle;
    };

    this.close = function(instanceName) {
        if(this.openedWindows[instanceName])
            this.openedWindows[instanceName].close();
    };

    this.closeAll = function() {
        for(var dialog in this.openedWindows)
            this.openedWindows[dialog].close();
    };
};


var DEMO_LINKS = {
    'kura': function() {
        WindowDialog.open('greenhouse-remote', "http://" + HOST + ":8000/app/#/greenhouses/remote/eclipse-greenhouse-ben?brokerHost=" + HOST + "&brokerPort=9001"); // Greenhouse "remote"
        WindowDialog.open('kura', "http://" + HOST); // Kura Web admin
    },
    'smarthome': function() {
        WindowDialog.open('esh', "http://" + HOST + ":8080"); // SmartHome web UI

    },
    'tiaki': function() {
        WindowDialog.open('tiaki', "/terminal.html?tiaki"); // Tiaki shell

    },
    'hawkbit': function() {
        WindowDialog.open('hawkbit', "http://hawkbit.eu-gb.mybluemix.net/UI"); // Tiaki shell

    },
    'leshan': function() {
        WindowDialog.open('wakaama', "/terminal.html?wakaama"); // wakaama client
        WindowDialog.open('leshan', "http://" + HOST + ":9999"); // Leshan web UI
    },
    'mosquitto': function() {
        WindowDialog.open('mosquitto', "http://" + HOST + ":9001/index.html"); // Mosquitto topics tree viz
	WindowDialog.open('mosquitto-sim', "/terminal.html?mosquitto-sim");
    }
};

var SHELL_COMMANDS = {
    'tiaki': ['echo "LAUNCHING TIAKI..."',
        'cd ~/Repositories/eclipseiot-demobox/external/tiaki-java/service-discovery-cli',
        'java -jar ./build/libs/tiaki-cli-1.0.jar -d mcn366rzmd2a.1.iotverisign.com -i -s mqtt -e'
    ],
    'mosquitto-sim': ['echo "LAUNCHING MOSQUITTO..."',
	'cd ~/Repositories/eclipseiot-demobox/external/9ac380feb2579a5e1e24',
	'node faker.js'],
    'wakaama': ['echo "LAUNCHING WAKAAMA..."',
    'cd ~/Repositories/eclipseiot-demobox/external/wakaama',
    //'killall lwm2mclient',
    './lwm2mclient -n raspi -c']
};
