const express =require("express");
const cors =require("cors")
const bodyParser = require("body-parser");




const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));







app.post("/",(req,res) => {
let operation = req.body;

let operations = {
   operation_type :Object.freeze({

    enum:{
      addition:["add", "addition", "sum"],
      subtraction:["subtract","subtraction","minus","deduct"],
      multiplication:["multiply","multiplication","product"],
    },
  }),

  x:2,
  y:2

};

let result;
let foundOperation;


     if(operation == operations.operation_type.enum.addition){
        result = operations.x + operations.y;
        foundOperation = "addition"
       res.send({
         slackUsername:"TG_kommands",
         result:result,
         operation_type:foundOperation
       })




     }else if(operation == operations.operation_type.enum.subtraction){
       result = operations.x - operations.y;
         foundOperation = "subtraction"

      res.send({
        slackUsername:"TG_kommands",
        result:result,
        operation_type:foundOperation
      })
    }else if(operation == operations.operation_type.enum.multiplication){
       result = operations.x * operations.y
         foundOperation = "multiplication"
      res.send({
        slackUsername:"TG_kommands",
        result:result,
        operation_type:foundOperation
      })
    }else{
      res.status(400)
    }




})





let port = process.env.PORT;
if(port == null || port ==""){
  port = 3000;
}





app.listen(port,() => {
  console.log(" Server Started on port 3000");
})
