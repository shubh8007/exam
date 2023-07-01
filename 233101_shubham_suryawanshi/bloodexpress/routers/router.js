const express = require("express")
const router = express.Router()
const connection = require("../db/dbconnect")

router.get("/bloods", (req, resp) => {
    connection.query("select * from blood", (err, data) => {
        if (err) {
            resp.status(500).send("Data not show" + JSON.stringify(err))
        }
        else {
            resp.send(data)
        }

    })
})

router.post("/bloods/blood", (req, resp) => {
    var donorname = req.body.donorname
    var address = req.body.address
    var bloodgroup = req.body.bloodgroup
    var mobileno = req.body.mobileno
    var gender = req.body.gender
    connection.query("insert into blood values(?,?,?,?,?)", [donorname, address, bloodgroup, mobileno, gender], (err) => {
        if (err) {
            resp.status(500).send("Data do not inserted" + JSON.stringify(err))
        }
        else {
            resp.send("data inserted sucessfully...")
        }
    })

})

module.exports = router;