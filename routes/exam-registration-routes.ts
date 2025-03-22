import express from "express";
import {ExamRegistrationAdd} from "../database/mongoose-exam-registration-data-store";

const router = express.Router();
router.post('/add',async (req,res)=>{
    const new_exam_register = req.body;
    try{
      const new_registration=await ExamRegistrationAdd(new_exam_register);
      res.json(new_registration);

    }catch (error){
        console.log('error saving Exam Registration',error);
    }
});
export default router;