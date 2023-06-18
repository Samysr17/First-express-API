const express=require('express')
const path=require('path');
const carscontroller=require('./controllers/cars.controllers')
const app=express()
const PORT=3000

//middelware
app.use((req,res,next)=>{
    const start=Date.now()
    next();
    const delta=Date.now()
    console.log(`${req.url},${req.method},${delta}`)
    
})
app.get('/cars/:carid',carscontroller.getcar)
app.get('/',(req,res)=>{
    res.send({
        id:1,
        name:'Ferarri'
    },
)
})
app.get('/m',(req,res)=>{
    res.send({
        id:2,
        name:'Mercedes'
    },
)
})
app.get('/p',(req,res)=>{
    res.send({
        id:4,
        name:'Pagani'
    },
)
})
app.use('/frontend',express.static(path.join(__dirname,'public')))

app.use((express.json()));//inbuilt middleware
app.post('/cars',carscontroller.postcars)
app.get('/cars',carscontroller.getcars)
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})
//gave two routed parameters now we will try to do it ia an array of json objects
