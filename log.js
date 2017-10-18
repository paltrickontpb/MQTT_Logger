var mqtt = require('mqtt')
var fs = require('fs')

const Topic = "#";

const client = mqtt.connect('mqtts://chiragparmar.me',{
  "username": "chirag",
  "password": "uptownfunk"
})

// DATABASE MANAGEMENT
var datapoint = {}
datapoint['topic'] = ""
datapoint['data'] = ""
datapoint['timestamp'] = ""
datapoint['latitude'] = ""
datapoint['longitude'] = ""
//DATABASE MANAGEMENT

client.on('connect', mqtt_connect);
client.on('reconnect', mqtt_reconnect);
client.on('error', mqtt_error);
client.on('message', mqtt_messsageReceived);
client.on('close', mqtt_close);

function mqtt_connect() {
    console.log("Connecting MQTT");
    client.subscribe(Topic, mqtt_subscribe);
};

function mqtt_subscribe(err, granted) {
    console.log("Subscribed to " + Topic);
    if (err) {console.log(err);}
};

function mqtt_reconnect(err) {
    console.log("Reconnect MQTT");
    if (err) {console.log(err);}
	client  = mqtt.connect(Broker_URL, options);
};

function mqtt_error(err) {
    console.log("Error!");
	if (err) {console.log(err);}
};

function after_publish() {
	//do nothing
};


function mqtt_messsageReceived(topic, message, packet) {
	var message_str = message.toString();
	message_str = message_str.replace(/\n$/, '');
	//check if message contains latitude and longitude
	datapoint['data'] = message_str;
	datapoint['topic'] = topic;
	var nowtime = new Date();
	datapoint['timestamp'] = nowtime.toISOString();
	datajson = JSON.stringify(datapoint);
	datajson = datajson.toString() + ";"
	fs.appendFile("./log.json", datajson, function(err){
		if (err) throw err
		else console.log("appended datapoint")
	})
};

function mqtt_close() {
	//console.log("Close MQTT");
};
