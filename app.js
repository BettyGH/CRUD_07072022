import express from 'express';
import {Logic} from './controller.js'

let app = express();


app.use(express.urlencoded({extended:true}))


app.post('/',Logic)


// server listener 

app.listen(3456,()=>{
    console.log("server connected and listening ot 3456");
})
