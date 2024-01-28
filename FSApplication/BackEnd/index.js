import express, { json } from 'express';

const app = express();

app.get('/',(req,res)=>{

	res.send("server started");

})

const PORT = process.env.PORT||3000;

app.get('/jokes',(req,res)=>{
	const jokes = [
		{
			id : 1,
			title : 'joke 1',
			content : 'joke first'
		},
		{
			id : 2,
			title : 'joke 2',
			content : 'joke Second'
		},
		{
			id : 3,
			title : 'joke 3',
			content : 'joke Third'
		}
	]

	res.send('<h1>neha</h1>');
})

app.listen(PORT,()=>{
	console.log('serever is on at port http://localhost:${PORT}'+PORT);
})