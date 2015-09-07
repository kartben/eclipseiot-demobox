var HOST = window.location.hostname ;

var DEMO_LINKS = {
    'kura': function() {
        window.open("http://" + HOST); // Kura Web admin
        window.open("http://" + HOST + ":8000/app/#/greenhouses/remote/eclipse-greenhouse-ben"); // Greenhouse "remote"
    },
    'smarthome': function() {
        window.open("http://" + HOST + ":8080"); // SmartHome web UI

    },
    'tiaki': function() {
        window.open("/terminal.html?tiaki"); // Tiaki shell

    },
    'leshan': function() {
        window.open("http://" + HOST + ":9999"); // Leshan web UI
        window.open("/terminal.html?wakaama"); // wakaama client
    },
    'mosquitto': function() {
        window.open("http://localhost:9090/index.html"); // Mosquitto topics tree viz
    },
};

var SHELL_COMMANDS = {
    'tiaki': ['echo "LAUNCHING TIAKI..."',
        'cd ~/Repositories/eclipseiot-demobox/external/tiaki-jcli',
        'java -jar ./build/libs/iot-discovery-jcli-1.0.jar -d mcn366rzmd2a.1.iotverisign.com -i -s mqtt'
    ],
    'wakaama': 'echo "LAUNCHING WAKAAMA..."'
};
