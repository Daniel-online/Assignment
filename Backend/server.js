const express = require('express')
const app = express();
const port = 3000;
const cors = require('cors')
const corsOptions = {
    origin:["https://localhost:5173"],
}

app.use(cors(corsOptions));

app.listen(port, ()=>{
    console.log(`Port started on ${port}` )
});

app.get("/",( req,res)=>{
    console.log("Path '/' working ")
    // res.sendStatus(200)
    res.json({name:"animal"});

})
