import ExamPayment from "../model/ExamPayment";
import ExamPaymentModel from "../model/ExamPayment-modal";

export async function ExamPaymentAdd(new_examPayment:ExamPayment){
    console.log("received data",new_examPayment);
    try {
        const new_exam_Payment=await ExamPaymentModel.create({
            studentName:new_examPayment.studentName,
            studentId: new_examPayment.studentId,
            examName: new_examPayment.examName,
            amount:new_examPayment.amount,
            paymentDate: new_examPayment.paymentDate
        });
        console.log('exam payment adding successfully',new_exam_Payment);
        return new_exam_Payment;
    }catch (err){
        console.log("error adding exam payment",err);
    }
}