const accountSid = 'AC7af577ebaf30b803f015c4bf2b7a3e34';
const authToken = '820aaaf794f353e89a1551248355cef0';
const client = require('twilio')(accountSid, authToken);
const sender = '+917817890372';
client.messages
    .create({
        body: 'Hello!! Your Vaccine is scheduled next week please take the vaccine on time',
        to: sender,
    }).then(message => console.log(message.sid)).done();