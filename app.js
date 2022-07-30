const express = require("express")

const bodyParser = require("body-parser")

const date = require(__dirname + "/date.js")


let app = express()

let workItems = [];



var items =[];


app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));



// let day ="";


app.set('view engine', 'ejs');


app.get("/", function(req,res){

    day = date()

    

    res.render('list', {listTitle: day, newListItem: items});

    
})

app.get("/about",function(req,res){
    res.render('about')
})


app.post("/", function(req,res){
    
    if(req.body.list == "Work"){
        let item = req.body.newItem;
        workItems.push(item)

        res.redirect("/work");
    }else{
        let item = req.body.newItem;
        items.push(item);
        res.redirect("/")
    }


res.redirect("/");
})





app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItem: workItems})
})

app.post("/work", function(req,res){
    let item = req.body.newItem
    workItems.push(item);
    res.redirect("/work");
})

app.listen(3000, function(){
    console.log("server is running")
})


