let mqtt = require('mqtt')
let options = {
    host: "jupiter.scg.com",
    port: 1883,
    clientId: "",
    username: ""
};

let client = mqtt.connect(options)

client.on('connect', function () {
    console.log('connect')
    client.subscribe('@msg/#', function(err, res) {
        console.log(res);
        client.publish('@msg/test', "test");
    });    
})

client.on('message', function (topic, message) {
    console.log(message.toString());
})