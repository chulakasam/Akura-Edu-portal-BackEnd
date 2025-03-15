import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
        studentName: { type: String, required: true },
        nic: { type: Number, required: true },
        dob: { type: String, required: true },
        address: { type: String, required: true },
        email: { type: String, required: true },
        mobilePhone: { type: Number, required: true },
        guardianphone: { type: Number, required: true },
    },
    { timestamps: true }
);

const StudentModel = mongoose.model("student", StudentSchema);
export default StudentModel;
