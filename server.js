import express from 'express'
import sum from "./sum.js"
const app = express()
app.listen(8080, ()=>{
    console.log("listening to port 8080");
})

app.get("/getSum/:a/:b", async(req, res)=>{
    const {a, b} = req.params;
    res.json({
        ans: await sum(parseInt(a),parseInt(b))
    })
})