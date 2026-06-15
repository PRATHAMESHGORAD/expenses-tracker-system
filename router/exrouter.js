const express = require('express');
const { addex, showex, deleteex, updateex, editformex } = require('../controller/excontroller');

const erouter = express.Router()

erouter.get("/addex",(req,resp)=>{
    resp.render("add")
})
erouter.post("/addex",addex)
erouter.get("/showex/:id",showex)
erouter.delete("/deleteex/:id",deleteex)
erouter.put("/updateex/:id",updateex)
erouter.get("/editex/:id",editformex)


module.exports = erouter