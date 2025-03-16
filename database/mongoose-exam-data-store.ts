import Exam from "../model/Exam";
import ExamModel from "../model/Exam-modal";

export async function ExamAdd(e:Exam){
    console.log('received data',e);

    try{
        const newExam=await ExamModel.create({
            examName:e.examName,
            examDate:e.examDate,
            examTime:e.examTime,
            examHall:e.examHall,
            duration:e.duration
        })
        console.log('exam added successfully',newExam);
        return newExam;
    }catch (err){
        console.log('error adding new Exam',err);
    }
}