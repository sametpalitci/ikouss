require('dotenv').config({path:'../../.env'})
const express = require('express');
const db = require('./models');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const mainRouter = require('./routes/mainRouter');

app.use('/api', mainRouter);

db.sequelize.sync().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`App is listen at ${process.env.PORT}`)
    });
})

console.log(process.env.PORT)
