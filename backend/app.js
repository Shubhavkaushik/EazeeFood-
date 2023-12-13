const express = require('express');
const app = express();
const { mongoConnect } = require('./db');
const PORT = 4444
const CreateUser = require("./Routes/CreateUser");
const DisplayData= require("./Routes/DisplayData")
const cors = require('cors')
const bodyParser = require("body-parser")
const OrderData = require('./Routes/OrderData')

app.use(bodyParser.urlencoded({ extended: true }));
//  app.use((req,res,next)=>{
//      res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//      res.header(
//          "Access-Control-Allow-Origin",
//          "Origin, X-Requested-With, Content-Type, Accept"
//      );
//      next();
// });

app.use(cors());

app.use(express.json());
app.use('/api', CreateUser);
app.use('/api2', DisplayData);
app.use('/api3', OrderData);

mongoConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log('http://localhost:' + PORT);
        });
    })