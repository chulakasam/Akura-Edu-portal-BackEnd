import express from "express";
import {ExamPaymentAdd} from "../database/mongoose-exam-payment-data-store";

const router = express.Router();

router.post('/add',async (req,res)=>{
        const new_examPayment = req.body;
        try {
            const adding_exam_payment = await ExamPaymentAdd(new_examPayment);
            res.json(adding_exam_payment);
        }catch (err){
            console.log("error adding exam payment",err);
        }
})

export default router;