

import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema(
    {
        className: { type: String, required: true },
        teacherName: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: String, required: true },
    },
    { timestamps: true }
);

const ClassModel = mongoose.model("class", ClassSchema);
export default ClassModel;
