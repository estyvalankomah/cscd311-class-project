const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Student = mongoose.model('Student');

exports.register = async (req, res) => {
    let student = await Student.findOne({studentID:req.body.studentID});
    if(student){
        return res.status(400)
            .json({
                ok:false,
                error:"Student already exists",
                success:false
            });
    }

    let newStudent = new Student(req.body);

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newStudent.pin, salt, (err, hash)=>{
           if(err) throw err;
           newStudent.pin = hash;
           newStudent.save()
               .then((studentData)=>{
                   return res.status(200)
                       .json({
                           ok:true,
                           error:false,
                           success:true,
                           data:studentData,
                           auth:{
                               pin:studentPin
                           }
                       });
               })
               .catch((err) => {
               throw err;
           })
        });
     });
 };
    
 exports.sanitize_login = (req, res, next) => {
    req.sanitizeBody('id').toString();
    req.sanitizeBody('pin').toString();
    req.checkBody('id','Id field cannot be empty').notEmpty();
    req.checkBody('pin','Pin field cannot be empty').notEmpty();
    let errors = req.validationErrors();
    if(errors){
        //bad request
        return res.status(400)
            .json({
                ok:false,
                error:errors,
                success:false
            });
    }
  
    next();
  };
  
  
  exports.login = async (req, res) => {
      let student = await Student.findOne({
          studentID:req.body.studentID
      });
      if(!student){
          return res.status(401)
              .json({
                  ok:false,
                  error:"Invalid student ID or pin",
                  success:false
              });
      }
  
      bcrypt.compare(req.body.studentPin, student.studentPin, (err, isMatch) => {
         if(isMatch){
             return res.status(200)
                 .json({
                     ok:true,
                     error:false,
                     success:true,
                     data:student
                 });
         }
         return res.status(401)
             .json({
                 ok:false,
                 error:'Invalid student ID or pin',
                 success:false
             });
      });
  };