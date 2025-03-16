import express from "express";
import {ExamAdd, ExamView} from "../database/mongoose-exam-data-store";
import Exam from "../model/Exam";

const router = express.Router();

router.post('/add',async (req,res)=>{
    const new_exam = req.body;
    try{
        const adding_exam   = await ExamAdd(new_exam);
        res.json(adding_exam);
    }catch (error){
        console.log('error adding new exam',error);
    }
});
router.get('/view',async (req, res) => {
    const exam_details = req.body;
    try{
        const loading_exam = await ExamView(exam_details);
        res.json(loading_exam);
    }catch (error){
        console.log('error fetching exam',error);
    }
});

export  default router;