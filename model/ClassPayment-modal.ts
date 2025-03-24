

import mongoose from "mongoose";

const ClassPaymentSchema = new mongoose.Schema(
    {
        studentName: { type: String, required: true },
        studentId: { type: String, required: true },
        className: { type: String, required: true },
        amount: { type: Number, required: true },
        paymentDate: { type: String, required: true },
    },
    { timestamps: true }
);

const ClassPaymentModel = mongoose.model("classPayment", ClassPaymentSchema);
export default ClassPaymentModel;
