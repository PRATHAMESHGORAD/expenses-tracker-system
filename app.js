const express = require('express');
const session = require('express-session')
const router = require('./router/userrouter');
const erouter = require('./router/exrouter')
const {connectDB} = require('./db')
const methodOverride = require('method-override')


const app = express()
connectDB()
app.use(session({
    secret:"expensetracker",
    resave:false,
    saveUninitialized:false
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.set("view engine","ejs")
app.use("/",router)
app.use("/",erouter)


app.listen(2000,()=>{
    console.log("runnig");
    
})