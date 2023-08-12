import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true,
    },
    classAttend: {
        type: Number,
        required: true
    },
    totalClass: {
        type: Number,
        required: true
    }
}, {timestamps: true}, {strict: false})

export default mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema)