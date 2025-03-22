import ExamRegistration from "../model/ExamRegistration";
import ExamRegModel from "../model/ExamRegistration-modal";

export async function ExamRegistrationAdd(examReg:ExamRegistration){
    console.log('receive data',examReg);
    try {
        const new_registration=await ExamRegModel.create({
            nic:examReg.nic,
            examName:examReg.examName
        });
        console.log('exam registration successfully',new_registration);
        return new_registration;
    }catch (err){
        console.log('error exam registration',err);
    }

}