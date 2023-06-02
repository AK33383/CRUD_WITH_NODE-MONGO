const mongoosemodel = require('../model/mongoosemodel')

const fetchAll = (req,res) => {
    mongoosemodel.find({}).then((result)=>{res.send(result)}).catch((err)=>{
        res.send(err)
    })
}

const fetchOne =  (req,res) => {
    const url_id=req.params.id
    mongoosemodel.findOne({_id:url_id})
    .then(result=>res.send(result)).catch(err=>res.send(err))
}

const deleteAll = (req,res)=>{
    mongoosemodel.deleteMany().then(result=>res.send(result)).catch(err=>res.send(err))
}

const deleteOne = (req,res) => {
    const url_id = req.params.id
    mongoosemodel.deleteOne({_id:url_id}).then(result=>res.send(result)).catch(err=>res.send(err))
}
const post = (req,res)=>{
   const data = new mongoosemodel({
        name:req.body.name,
        email:req.body.email
    })

    data.save().then(result => res.send(result)).catch(err => res.send(err))
}

const update = (req,res)=>{

    const url_id = req.params.id
    const newname = req.body.name
    const newemail = req.body.email

    mongoosemodel.findOneAndUpdate({_id:url_id},{$set:{name:newname,email:newemail}},{new:true})
    .then(result=>res.send(result)).catch(err=>res.send(err))
}



module.exports = {
    fetchAll,fetchOne,deleteAll,deleteOne,post,update
}