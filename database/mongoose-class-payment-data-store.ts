import ClassPayment from "../model/ClassPayment";
import ClassPaymentModel from "../model/ClassPayment-modal";


export async function ClassPaymentAdd(new_classPayment:ClassPayment){
    console.log("received data",new_classPayment);
    try {
        const new_class_Payment=await ClassPaymentModel.create({
            studentName:new_classPayment.studentName,
            studentId: new_classPayment.studentId,
            className: new_classPayment.className,
            amount: new_classPayment.amount,
            paymentDate: new_classPayment.paymentDate
        });
        console.log('class payment adding successfully',new_class_Payment);
        return new_class_Payment;
    }catch (err){
        console.log('error adding Class payment',err)
    }
}