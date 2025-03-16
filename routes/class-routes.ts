import express from "express";

import {ClassAdd, ClassDelete, ClassView} from "../database/mongoose-class-data-store";
import {addAbortSignal} from "node:stream";

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

router.get('/view',async (req, res) => {
    const all_classes = req.body;
    try{
     const loadAllClass = await ClassView(all_classes);
     res.json(loadAllClass);
    }catch (error){
        console.log('error fetching data',error);
    }
})

router.delete('/delete/:className',async (req,res)=>{
    const className = req.params.className;
    try {
        const selected_class = await ClassDelete(className);
        res.json(selected_class);
    }catch (error){
        console.log('error deleting class',error);
    }
})

export  default router;

