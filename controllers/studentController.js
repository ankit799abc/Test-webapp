const studentModel = require("../models/studentModel");

const allController = async (req, res) => {
    const { keyword,namestudent,emailstudent,phonestudent } = req.query;
    try{
       

        const student =       
        keyword==1 ?
            await studentModel.find({
                name:{
                    $regex:namestudent ? namestudent : "",
                    $options : "i", 
                },
                email:{
                    $regex:emailstudent ? emailstudent : "",
                    $options : "i", 
                },
                phone:{
                    $regex:phonestudent ? phonestudent : "",
                    $options : "i", 
                }
            }).sort({name:-1})
        :
        keyword==2 ?
            await studentModel.find({
                name:{
                    $regex:namestudent ? namestudent : "",
                    $options : "i", 
                },
                email:{
                    $regex:emailstudent ? emailstudent : "",
                    $options : "i", 
                },
                phone:{
                    $regex:phonestudent ? phonestudent : "",
                    $options : "i", 
                }
            }).sort({name:1})
        :
        keyword==3?
            await studentModel.find({
                name:{
                    $regex:namestudent ? namestudent : "",
                    $options : "i", 
                },
                email:{
                    $regex:emailstudent ? emailstudent : "",
                    $options : "i", 
                },
                phone:{
                    $regex:phonestudent ? phonestudent : "",
                    $options : "i", 
                }
            }).sort({createdAt:1})
        :
            await studentModel.find({
                name:{
                    $regex:namestudent ? namestudent : "",
                    $options : "i", 
                },
                email:{
                    $regex:emailstudent ? emailstudent : "",
                    $options : "i", 
                },
                phone:{
                    $regex:phonestudent ? phonestudent : "",
                    $options : "i", 
                }
            }).sort({updatedAt:1})
        
        if(!student){
            return res.status(200).send({
                success: false,
                message: "no student find",
                
              });
        }

        return res.status(200).send({
            success: true,
            message: "Student Fetched Successfully",
            student,
          });

    }catch(error){
        return res.status(500).send({
            success: true,
            message: "unable to get ",
            
          });
    }


}

const addController   =   async(req,res)=>{
    
    try {
        const exisitingStudent = await studentModel.findOne({ email: req.body.email });
        //validation
        if (exisitingStudent) {
          return res.status(200).send({
            success: false,
            message: "User ALready exists",
          });
        }
        if (req.body.phone.length!=10) {
          return res.status(200).send({
            success: false,
            message: "wrong phone no.",
          });
        }
    
    
        //rest data
        const student = new studentModel(req.body);
        await student.save();
        return res.status(201).send({
          success: true,
          message: "Student Registerd Successfully",
          student,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error In Register API",
          error,
        });
      }

}


const updateController = async (req,res)=>{
    
    try {
        const student = await studentModel.findById(req.params._id);
        if (!student) {
            return res.status(404).json({ 
                success: false,
                message: "Student not found",
             });
          }
        const { name, email, phone } = req.body;
        // validation + Update
        if (name) student.name = name;
        if (email && email != student.email) {
            
        const students = await studentModel.find({email});
        if (students) {
            return res.status(200).json({ 
                success: false,
                message: "email allready exist",
             });
          }
          student.email = email;
        }
        if (phone) student.phone = phone;
        //save user
        await student.save();
        res.status(200).send({
          success: true,
          message: "Student Profile Updated",
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error In update profile API",
          error,
        });
      }

}

const deleteController = async(req,res) => {
    try {
        const student = await studentModel.findById(req.params._id);
        if (!student) {
            return res.status(404).json({ 
                success: false,
                message: "Student not found",
             });
          }
        
            
            await studentModel.findByIdAndDelete(req.params._id);
        
            return res.status(200).json({ 
                success: true,
                message: "student deleted",
             });
          
         
       
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error In delete profile API",
          error,
        });
      }
}

const singleController = async(req,res) => {
  try {
      const student = await studentModel.findById(req.params._id);
      if (!student) {
          return res.status(400).json({ 
              success: false,
              message: "Student not found",
           });
        }
      
          
          
      
          return res.status(200).json({ 
              success: true,
              message: "Student Fetched Successfully",
              student
           });
        
       
     
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error In get single details profile API",
        error,
      });
    }
}

module.exports = { allController , addController , updateController, deleteController , singleController};