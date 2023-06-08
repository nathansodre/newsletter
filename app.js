const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https")

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req,res) => {
    const firstName = req.body.fName;
    const lastName = req.body.sName;
    const email = req.body.sEmail;

    const data = {
        members:[
        {
        email_address: email,
        status: "subscribed",
        merge_fields: {
            FNAME: firstName,
            LNAME: lastName
        }
        }
        ]
    }

const jsonDATA = JSON.stringify(data);


    
    res.send("Formulário enviado com sucesso!"); // adicionei essa linha para enviar uma resposta ao navegador
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
