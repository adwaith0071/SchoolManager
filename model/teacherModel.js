const mongoose=require('mongoose')




const teacherSchema=new  mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})


const teachers=mongoose.model('teachers',teacherSchema)

module.exports=teachers