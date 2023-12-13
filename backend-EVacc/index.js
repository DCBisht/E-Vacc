
const express= require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const dotenv= require("dotenv");

const corosOptions = {
    origin: '*',
    Credential: true,
    optionSuccessStatus: 200
}

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/send-message', (req, res) => {
    const accountSid = 'AC7af577ebaf30b803f015c4bf2b7a3e34';
    const authToken = '820aaaf794f353e89a1551248355cef0';
    const client = require('twilio')(accountSid, authToken);
  
    const to = req.body.to ;// The recipient's phone number
    const message = req.body.message;
  
    client.messages
      .create({
        body: message,
        from: '+917817890372', // Your Twilio phone number
        to: to,
      })
      .then((message) => {
        console.log(`Message sent to ${to}: ${message.sid}`);
        res.send('Message sent successfully');
      })
      .catch((error) => {
        console.error(`Error sending message: ${error.message}`);
        res.status(500).send('Error sending message');
      });
  });
const username = encodeURIComponent("chakshubisht459");
const password = encodeURIComponent("forproduction");
const uri = `mongodb+srv://${username}:${password}@cluster0.h9p94dc.mongodb.net/?retryWrites=true&w=majority`;


app.use(express.json());
app.use(cors(corosOptions));

mongoose.connect(uri).then(()=>app.listen(5000, ()=>{
    console.log(`Connected to database and server is running at ${5000}`);
})).catch(e=> console.log("Error"+e));



app.use('/admin',require('./routes/Admin'));
app.use('/user',require('./routes/User'));
app.use('/Vaccine',require('./routes/Vaccine'));