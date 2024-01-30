const express = require('express')

const app = express();

const Port = 3000;

app.get('/',(req,res)=>{
	res.send("server is running Hello");
})

app.listen(Port,(req,res)=>{
	console.log('server listning ${Port}');
})