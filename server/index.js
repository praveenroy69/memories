import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from  'mongoose';
import apis from './routes/apis.js';

 
var app = express();



app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());    
app.use('/api',apis);
const CONNECTION_URL = "mongodb+srv://needadmin:rtpraveen1321@need.fvxxb.mongodb.net/need?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => app.listen(port,() => console.log(`Server running on port: ${port}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);
