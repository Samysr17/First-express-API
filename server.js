const express=require('express')
const app=express()
const PORT=3000
const cars=[{
    id:1,
    name:"Ferarri"
},
{
    id:2,
    name:"Redbull"
},{
    id:3,
    name:"Mercedes"

},{
    id:4,
    name:'Pagani'
}]
//middelware
app.use((req,res,next)=>{
    const start=Date.now()
    next();
    const delta=Date.now()
    console.log(`${req.url},${req.method},${delta}`)
    
})
app.get('/cars/:carid',(req,res)=>{
    const carid=Number(req.params.carid);
    const car=cars[carid]
    if(car){
        res.json(car)
    }else{
        res.json("Error not found")
    }
    
})
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

app.use((express.json()));//inbuilt middleware
app.post('/cars',(req,res)=>{
    if(!req.body.name){
        res.status(400).json({
            error:"Bad Request"
        })
    }
    const new_car={
     name:req.body.name,
     id:cars.length
    }
    cars.push(new_car);
    res.json(new_car);
})
app.get('/cars',(req,res)=>{
    res.send(cars)
})
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})
//gave two routed parameters now we will try to do it ia an array of json objects
