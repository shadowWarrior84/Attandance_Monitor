import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
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
    classHeld: {
        type: String,
        required: true
    },
    totalClass: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model.Teacher || mongoose.model("Teacher", teacherSchema)