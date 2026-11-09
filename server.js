const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT

});

db.connect((err)=>{

    if(err){

        console.log(err);
        return;

    }

    console.log("✅ Railway Connected");

});

app.get("/",(req,res)=>{

    res.send("MOSA Backend Working");

});

app.post("/register",(req,res)=>{

    const {
        fullName,
        email,
        password
    } = req.body;

    db.query(

        `
        INSERT INTO users
        (
            full_name,
            email,
            password_hash
        )
        VALUES
        (?,?,?)
        `,

        [
            fullName,
            email,
            password
        ],

        (err)=>{

            if(err){

                console.log(err);

                return res.status(500).json({

                    message:
                    "Registration Failed"

                });

            }

            return res.json({

                message:
                "Registration Successful"

            });

        }

    );

});

const PORT =
process.env.PORT || 5000;

app.listen(PORT,()=>{

    console.log(
        `MOSA Running On Port ${PORT}`
    );

});