const bcryptjs = require('bcryptjs');
const userModel = require('../model/usermodel');
const expenseModel = require('../model/exmodel');
const register = async(req,resp)=>{
    try {
        const {name,email,password} = req.body
        const hashPassword = await bcryptjs.hash(password,10)
        await userModel.create({name,email,password:hashPassword})
        resp.redirect("/login")
    } catch (error) {
        console.log(error);
        
    }
    
}

const login = async(req,resp)=>{
    try {
        const {name,password} = req.body
        const user = await userModel.findOne({name})
        if (user && (await bcryptjs.compare(password,user.password))) {
            req.session.name = name
            resp.redirect("/dashboard")
        } else {
            resp.redirect("/login")
        }
    } catch (error) {
        console.log(error);
        
    }
}

const dashboard = async(req,resp)=>{
    if (!req.session.name) {
        resp.redirect("/login")
    } else {
        const expenses = await expenseModel.find()
        resp.render("dashboard",{name:req.session.name,expenses})
    }
}

const logout = async(req,resp)=>{
    req.session.destroy(()=>{
        resp.redirect("/login")
    })
}

module.exports = {register,login,dashboard,logout}