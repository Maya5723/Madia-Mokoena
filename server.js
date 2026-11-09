const express =require ("express");
const app = express();
app.get("/", (req, res)=>{
	res.send("MOSA Backend Working");
});
app.listen(5000,()=>{
	console.log("MOSA Running On Port 5000");
});

