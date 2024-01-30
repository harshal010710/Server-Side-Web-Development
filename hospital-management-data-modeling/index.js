const express = require("express")

const app = express()

const Port = 3000

app.get('/',(req,res)=>{
	res.send("<h1>Hospital management</h1>")
})

app.listen(Port,(req,res)=>{
	console.log("server is running")
})