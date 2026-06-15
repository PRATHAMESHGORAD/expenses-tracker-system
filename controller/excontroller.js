
const expenseModel = require('../model/exmodel');

const addex = async(req,resp)=>{
    try {
        const {title,category,amount,date,description,userid} = req.body
        await expenseModel.create({title,category,amount,date,description,userid:req.session.userid})
        resp.redirect("/dashboard")

    } catch (error) {
        console.log(error);
        
    }
}

const showex = async(req,resp)=>{
    try {
        const data = await expenseModel.findById(req.params.id)
        resp.render("show",{data})
    } catch (error) {
        console.log(error);
        
    }
}

const deleteex = async(req,resp)=>{
    try {
        await expenseModel.findByIdAndDelete(req.params.id)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        
    }

}

const updateex = async(req,resp)=>{
    try {
        await expenseModel.findByIdAndUpdate(req.params.id,req.body)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        
    }
}

const editformex = async(req,resp)=>{
    try {
        const data = await expenseModel.findById(req.params.id)
        resp.render("edit",{data})
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {addex,showex,deleteex,updateex,editformex}