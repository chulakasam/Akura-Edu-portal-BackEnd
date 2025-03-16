

import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema(
    {
        examName: { type: String, required: true },
        examDate: { type: String, required: true },
        examTime:  { type: String, required: true },
        examHall: { type: String, required: true },
        duration: { type: String, required: true },
    },
    { timestamps: true }
);

const ExamModel = mongoose.model("exam", ExamSchema);
export default ExamModel;
