const bcrypt = require("bcrypt");

app.post("/register", async (req, res) => {

    try {

        const {
            fullName,
            email,
            password
        } = req.body;

        const hash =
        await bcrypt.hash(
            password,
            12
        );

        db.query(

            `
            INSERT INTO users
            (
                full_name,
                email,
                password_hash
            )
            VALUES
            (?, ?, ?)
            `,

            [

                fullName,
                email,
                hash

            ],

            (err) => {

                if (err) {

                    console.log(err);

                    return res.json({

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

    }

    catch(error){

        console.log(error);

    }

});