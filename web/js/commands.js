var DEMO_LINKS = {
    'kura': function() {
        window.open("http://localhost"); // Kura Web admin
        window.open("http://localhost:9090"); // Greenhouse "remote"
    },
    'smarthome': function() {
        window.open("http://localhost:8080"); // Smarthome Web admin

    },
    'tiaki': function() {
        window.open("/terminal.html?tiaki"); // Tiaki shell

    },
    'leshan': function() {
        window.open("http://localhost:8080"); // Leshan web UI
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
