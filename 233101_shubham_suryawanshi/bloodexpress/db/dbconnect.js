const mysql=require("mysql")

const mysqlconnection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root123",
    database:"sss",
    port:"3306"
})

 mysqlconnection.connect((err)=>{
    if(err){
        console.log("Error occured in connection"+JSON.stringify(err))
    }
    else{
        console.log("Connection done sucessfully")
    }
 })


 module.exports=mysqlconnection;
