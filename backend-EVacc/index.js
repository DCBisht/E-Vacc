// const sid='ACd179837cbb7c279d562ed4dda68c661e';
// const auth_token='6c62a0545a727d72ed34b08c6789a231';

// const twilio=require('twilio')(sid,auth_token);

// twilio.messages.create({
//     from:"+12542697092",
//     to:'+917817890372',
//     body:"This is test from my side"
// })
// .then((res)=>{console.log('Message has sent')})
// .catch((e)=>{console.log(e)});

const connectToMongo=require('../backend-EVacc/DBConnection');
connectToMongo();

const express=require('express');

const app=express();
const port=3001;

app.use(express.json());

app.use('/admin',require('../backend-EVacc/routes/Admin'));
app.use('/user',require('../backend-EVacc/routes/User'));

app.listen(port,()=>{
    console.log(`Listening to port:${port}`);
})
