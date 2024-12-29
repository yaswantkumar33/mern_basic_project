import express from "express";
//start the express app......
const app = express();


app.get("/",(req,res)=>{
    res.send("server is ready 5000")
})
// start the back server listiner
app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
});
