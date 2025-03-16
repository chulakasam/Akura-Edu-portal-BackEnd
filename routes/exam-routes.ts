import express from "express";
import {ExamAdd} from "../database/mongoose-exam-data-store";

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
router.get('/get',async (req, res) => {

});

export  default router;