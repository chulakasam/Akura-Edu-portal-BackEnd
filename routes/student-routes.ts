import express from "express";
import {StudentAdd} from "../database/mongoose-student-data-store";

const router = express.Router();

router.post('/add',async (req,res)=>{
    const new_student = req.body;
    try{
        const adding_student = await StudentAdd(new_student);
        res.json(adding_student);
    }catch (error) {
        console.log('error adding student',error);
    }
})

export  default router;