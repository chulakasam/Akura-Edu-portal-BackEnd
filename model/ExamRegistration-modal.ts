import mongoose from "mongoose";

const ExamRegistrationSchema=new mongoose.Schema(
    {
            nic:{ type: Number, required: true },
            examName: { type: String, required: true },
    },
    {timestamps:true}
);

const ExamRegModel = mongoose.model("examRegistrationDetails",ExamRegistrationSchema);
export default ExamRegModel;