const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        const filen=Date.now()
        cb(null,`image-${filen}-${file.originalname}`)
    }
})

const fileFilter=(req,file,cb)=>{
    if(file.mimetype=='image/jpeg' || file.mimetype=='image/png'||  file.mimetype=='image/jpg'){
        cb(null,true)


    }
    else{
        cb(null,false)
        cb(new Error("Enter Specified File(jpg,jpeg,png)!!"))
    }
}

module.exports=multer({
    storage,fileFilter
})