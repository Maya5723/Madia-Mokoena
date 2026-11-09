const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{

res.send("MOSA Backend Working");

});

app.post("/register",(req,res)=>{

const {

fullName,
email,
password

}=req.body;

console.log(
fullName,
email,
password
);

res.json({

message:
"Registration Successful"

});

});

const PORT =
process.env.PORT || 5000;

app.listen(PORT,()=>{

console.log(
`MOSA Running On Port ${PORT}`
);

});