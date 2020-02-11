const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = process.env.PORT


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))



var DbUrl = "mongodb://charity:sito123@ds231090.mlab.com:31090/tekdealzdb"
mongoose.connect(DbUrl)
 
 app.get('/', function(req, res){
     res.send('hi cht')
 })
 
 var server = app.listen(port, () => {
 console.log('server is running on ')
 console.log(port)
})