const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

const pageTitle = "";
const style = "";
app.get("/" , (req,res)=> {
    res.render( "index",{pageTitle:'Cofee Shop'});
     
});
app.get("/registration", (req,res)=> {
    res.render("registration");
       
});
app.get("/home",(req,res)=>{
    res.redirect("/");
});
app.get("/about",(req,res)=>{
    res.render("about",{pageTitle:'About',style:'about.css'});
});
app.get("/blog",(req,res)=>{
    res.render("blog", {pageTitle:'Blog',style:'blog.css'});
});
app.get("/contacts",(req,res)=>{
    res.render("contacts",{pageTitle:'Contacts',style:'contacts.css'});
});




app.listen(3000,()=> {
console.log("port running on 3000");
});
