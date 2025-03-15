import express from "express";

import {ClassAdd} from "../database/mongoose-class-data-store";

const router = express.Router();

router.post('/add',async(req,res)=>{
    console.log(req.body)
    const new_class = req.body;
    try{
        const adding_class = await ClassAdd(new_class);
        res.json(adding_class);
    }catch (error) {
        console.log('error adding class',error);
    }
})




export  default router;

