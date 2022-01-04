const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let nextTodos = [];
let workItem = [];

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"))
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);
  res.render("list", {
    kindofday: day,
    newtask: nextTodos
  });
});

app.get("/work", function(req, res) {
  res.render("list", {
    kindofday: "Work List",
    newtask: workItem
  });
});
app.post("/", function(req,res){
    let nextTodo = req.body.newitem;

    if(req.body.list === "Work"){
      workItem.push(nextTodo);
      res.redirect("/work")
    }else{
      nextTodos.push(nextTodo);
      res.redirect("/");
    }
});
app.listen(3000, function() {
  console.log("The Port has been started on 3000, Follow this http://localhost:3000/ link to open the project!")
});
