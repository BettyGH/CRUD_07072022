import mysql from 'mysql';
import {AuInfo} from './schema.js'

// database connection info

let mySqlConneciton = mysql.createConnection({
    user :"registeral01",
    password:"reg01",
    host:"localhost",
    database :"bookAuthorInfo"
})

// connect to database
mySqlConneciton.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("database connected");
    }
})


 export const Logic = (req,res)=>{
    const {first_name,last_name,phone_number,address}=req.body

    // create table 
    mySqlConneciton.query(AuInfo,(err,row,f)=>{
        if(err){
            console.log(err);
        }else{
            console.log("table created");
        }
    // insert data

        mySqlConneciton.query(`insert into  aut_data (first_name,last_name,phone_number,address) values('${first_name}','${last_name}','${phone_number}','${address}')`)
            
        // update  data
        // let update_firstName = `update aut_data set first_name ="betty" where first_name="efrata"`
        // mySqlConneciton.query(update_firstName,(err,row,re)=>{
        //     if(err){
        //         console.log(err);
        //     }else{
        //         console.log("name updated");
        //     }
        // })

        // delete data
        // let deleted_data = `delete from aut_data where first_name="efrata"`
        // mySqlConneciton.query(deleted_data,(err,r)=>{
        //     if(err){
        //         console.log(err);
        //     }else{
        //         console.log("user deleted");
        //     }
        // })
    })

  res.end("file uploaded")
}
