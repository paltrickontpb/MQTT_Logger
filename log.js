var mqtt=require('mqtt')
var mongodb=require('mongodb');

var mongoClient=mongodb.MongoClient;

const client = mqtt.connect('mqtts://chirag:uptownfunk@chiragparmar.me:8883')

client.on('connect', () => {
  // Inform controllers that garage is connected
  console.log("everything ok")//client.publish('garage/connected', 'true')
})
