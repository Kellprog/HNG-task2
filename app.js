const express =require("express");
const cors =require("cors")
const bodyParser = require("body-parser");




const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));









app.post("/",(req,res) => {

const operationType = String( req.body.operation_type);
const x =Number(req.body.x);
const y =Number(req.body.y);

  if(operationType.includes("add","addition")){
      const result = x + y
      res.send({
        "slackUsername":"TG_kommands",
        "result":result,
        "operation_type":operationType

      })
    }else if(operationType.includes("subtract","minus","deduct","subtraction")){
        const result = x - y
        res.send({
          "slackUsername":"TG_kommands",
          "result":result,
          "operation_type":operationType,

        })
      }else if(operationType.includes("multiply","multiplication")){
          const result = x * y
          res.send({
            "slackUsername":"TG_kommands",
            "result":result,
            "operation_type":operationType

          })
        }else{
          res.status(400)
          res.send("Invalid!")
        }







})











app.listen(3000,() => {
  console.log(" Server Started on port 3000");
})
