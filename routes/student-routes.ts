import express from "express";
import {StudentAdd, StudentView} from "../database/mongoose-student-data-store";

const router = express.Router();

router.post('/add',async (req,res)=>{
    const new_student = req.body;
    try{
        const adding_student = await StudentAdd(new_student);
        res.json(adding_student);
    }catch (error) {
        console.log('error adding student',error);
    }
});

router.get('/view',async(req, res)=>{
    const all_students = req.body;
    try{
        const load_students = await StudentView(all_students);
        res.json(load_students);
    }catch (error){
        console.log('error fetching students',error);
    }
})


export  default router;