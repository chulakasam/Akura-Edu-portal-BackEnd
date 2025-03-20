import Student from "../model/Student";
import StudentModel from "../model/Student-modal";

export async function StudentAdd(new_student:Student){
        console.log("Received Data:", new_student);
        try{
            const newStudent=await StudentModel.create({
                studentName:new_student.studentName,
                nic:new_student.nic,
                dob:new_student.dob,
                address:new_student.address,
                email:new_student.email,
                mobilePhone:new_student.mobilePhone,
                guardianphone:new_student.guardianphone
            });
            console.log("student added successfully:",newStudent);
            return newStudent;
        }catch (err) {
            console.log("Error Adding Student :",err);
        }
}

export async function StudentView(students:Student){
    try {
        const loadingStudents = await StudentModel.find();
        console.log('loading all students',loadingStudents);
        return loadingStudents;
    }catch (err){
        console.log('error fetching students',err);
    }

}

export async function StudentDelete(email:string){
    try {
       const deleting_student=await StudentModel.deleteOne({
            email:email
        });
       console.log('deleting student successfully',deleting_student);
       return deleting_student;
    }catch (err){
        console.log('error deleting student',err);
    }
}