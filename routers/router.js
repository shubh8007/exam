const express=require("express")
const router=express.Router();
const connection=require("../db/dbconnect")


router.get("/fruits",(req,resp)=>{
    connection.query("select * from fruit",(err,data)=>{
        if(err){
        resp.status(500).send("error occured"+JSON.stringify(err))
        }
        else{
            resp.send(data)
        }
    })
})
router.post("/fruits/insert/:fid",(req,resp)=>{
    var fid=req.body.fid;
    var fname=req.body.fname;
    var fcolor=req.body.fcolor;
    var quantity=req.body.quantity;
    var price=req.body.price;
    connection.query("insert into fruit values(?,?,?,?,?)",[fid,fname,fcolor,quantity,price],(err)=>{
        if(err){
            resp.status(500).send("error ocuured"+JSON.stringify(err))
        }
        else{
            resp.send("Data inserted sucessfully....")
        }
    })
})

router.put("/fruits/update/:fid",(req,resp)=>{
    var fid=req.body.fid;
    var fname=req.body.fname;
    var fcolor=req.body.fcolor;
    var quantity=req.body.quantity;
    var price=req.body.price;
    connection.query("update fruit set fname=?,fcolor=?,quantity=?,price=? where fid=?",[fname,fcolor,quantity,price,fid],(err)=>{
        if(err){
            resp.status(500).send("error occured"+JSON.stringify(err))
        }
        else{
            resp.send("data updated sucessfully...")
        }
    })
})

router.delete("/fruits/delete/:fid",(req,resp)=>{
    connection.query("delete from fruit where fid=?",[req.params.fid],(err)=>{
        if(err){
            resp.status(500).send("error occured"+JSON.stringify(err))
        }
        else{
            resp.send("fruit deleted sucessfully....")
        }
    })
})

module.exports=router;
