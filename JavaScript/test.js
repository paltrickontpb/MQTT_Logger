//intialize a database
var mqttdb = {}

// creation of a new table under the database
mqttdb['car'] = [];

//intialize a data point variable
var data = {}
data['data'] = ""
data['timestamp'] = ""

console.log(data);

//method to check if table exists already
console.log(typeof(mqttdb['car']) + '\n')
console.log(typeof(mqttdb['bike']) + '\n')

data['data'] = '123123'
data['timestamp'] = 'today'

mqttdb['car'].push(data)

console.log(mqttdb)
console.log(JSON.stringify(mqttdb))
