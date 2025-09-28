const express=require("express")
const router=new express.Router();
const Student=require('../models/students')
// create new students
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);//req.body postman ke body se data etch kr rha hota hai

//   user.save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });
router.post("/students",async(req,res)=>{
    try{  
     const user=new Student(req.body)
    const createUser=await user.save()
    res.status(201).send(createUser)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get("/students",async (req,res)=>{
  try{
    const studentsData=await Student.find()
    res.send(studentsData)
  }catch(e){
     res.send(e)
  }
})

router.get("/students/:id",async(req,res)=>{
  try{
    const _id=req.params.id
    const studentdata=await Student.findById(_id)
    res.send(studentdata)
  }catch(e){
    req.status(500).send(e)
  }
})

router.delete("/students/:id",async (req,res)=>{
      try{
        const _id=req.params.id
        const studentDeleted=await Student.findByIdAndDelete(_id) 
        res.send(studentDeleted)
      }catch(e){
        res.status(500).send(e)
      }
})
 
router.patch("/students/:id",async(req,res)=>{
  try{
    const _id=req.params.id
    const studentUpdate=await Student.findByIdAndUpdate(_id,req.body,{
      new:true
    })
    res.send(studentUpdate)
  }catch(e)
  {
    res.status(404).send(e)
  }
})
 module.exports=router