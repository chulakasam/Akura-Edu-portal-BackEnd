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
export async function ExamView(e:Exam){
    try {
        const loading_exam = await ExamModel.find();
        console.log('loading exam data successfully',loading_exam);
        return loading_exam;
    }catch (error) {
        console.log('error fetching exam',error);
    }
}

export async function ExamDelete(examName:string){
    try{
        const deleting_exam=await ExamModel.deleteOne({
            examName:examName
        });
        console.log('exam deleted successfully',deleting_exam);
        return deleting_exam;
    }catch (err) {
        console.log('error deleting exam',err);
    }
}