const students=require('../model/studentModel')

exports.addStudents=async(req,res)=>{
  try{
    const {first_name,last_name,batch,phone}=req.body
    const image=req.file.filename
    const teacherId=req.payload
    // console.log(data,image,teacherId)

    const newStudent=new students({
        first_name,last_name,batch,phone,image,teacherId
    })
    await newStudent.save()
    res.status(201).json(newStudent)
  }
  catch(err){
    res.status(400).json(err)
    console.log(err)
  }

}

exports.getStudents=async(req,res)=>{
  try{
    const teacherid=req.payload
    const studentlist=await students.find({teacherId:teacherid})
    res.status(200).json(studentlist)
  }
  catch(err){
    res.status(400).json(err)
    console.log(err)
  }
}

// delete a student

exports.deleteStudent=async(req,res)=>{
    try{
        const {sid}=req.params
    console.log(sid)
   const result=await students.findByIdAndDelete(sid)
   res.status(200).json("deleted")
    }
    catch(err){
        res.status(400).json(err)
        console.log(err)
      }
}

// updateStudent

exports.updateStudent=async(req,res)=>{

try{
  const {sid}=req.params
  if(req.file){
    var image=req.file.filename

    var {first_name,last_name,batch,phone}=req.body
  }
  else{
    var{first_name,last_name,batch,phone,image}=req.body
  }

  const existing=await students.findById(sid)

  existing.first_name=first_name
  existing.last_name=last_name
  existing.batch=batch
  existing.phone=phone
  existing.image=image
  await existing.save()
  res.status(200).json(existing)
}
catch(err){
  console.log(err)
  res.status(400).json(err)
}
}