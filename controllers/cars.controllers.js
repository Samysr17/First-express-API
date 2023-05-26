const model=require('../models/models.cars')
function postcars(req,res){
    if(!req.body.name){
        res.status(400).json({
            error:"Bad Request"
        })
    }
    const new_car={
     name:req.body.name,
     id:model.length
    }
    model.push(new_car);
    res.json(new_car);
}
function getcars(req,res){
    res.send(model)
}
function getcar(req,res){
    const carid=Number(req.params.carid);
    const car=model[carid]
    if(car){
        res.json(car)
    }else{
        res.json("Error not found")
    } 
}
module.exports={
    postcars,
    getcars,
    getcar,
}