import express from "express";
import Class from "../model/Class";
import ClassPayment from "../model/ClassPayment";
import {ClassPaymentAdd} from "../database/mongoose-class-payment-data-store";

const router = express.Router();

router.post('/add',async (req,res)=>{
    const new_classPayment = req.body;
    try {
        const adding_class_payment = await ClassPaymentAdd(new_classPayment);
    }catch (err){
        console.log('error adding class payment',err);
    }
})

export default router;