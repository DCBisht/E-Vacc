const express=require('express');

const app=express();
const port=3001;

const run=require('../backend-EVacc/DBConnection');
run().catch(console.dir);

app.use(express.json());

app.use('/admin',require('../backend-EVacc/routes/Admin'));
app.use('/user',require('../backend-EVacc/routes/User'));

app.listen(port,()=>{
    console.log(`Listening to port:${port}`);
})
