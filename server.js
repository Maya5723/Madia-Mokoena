const express =require ("express");
const app = express();
app.get("/", (req, res)=>{
	res.send("MOSA Backend Working");
});
app.post("/register",(req,res)=>{
	const{ 
	fulllName,
	email,
	password}=req.body;
	console.log({fulllName,
	email,
	password});
	res.json({
	message: "Restrarion Successfil"});
});
const port=process.env.port||5000;
app.listen(port,()=>{
	console.log('MOSA Running On Port ${PORT}');
});
