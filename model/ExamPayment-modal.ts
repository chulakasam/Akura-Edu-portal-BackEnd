

import mongoose from "mongoose";

const ExamPaymentSchema = new mongoose.Schema(
    {
        studentName: { type: String, required: true },
        studentId: { type: String, required: true },
        examName: { type: String, required: true },
        amount: { type: Number, required: true },
        paymentDate: { type: String, required: true },
    },
    { timestamps: true }
);

const ExamPaymentModel = mongoose.model("ExamPayment", ExamPaymentSchema);
export default ExamPaymentModel;
