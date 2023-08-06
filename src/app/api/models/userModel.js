import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: true,
        default: "https://www.shutterstock.com/image-vector/default-avatar-profile-trendy-style-260nw-1759726295.jpg"
    }
},{timeStamps: true})

export default mongoose.models.User || mongoose.model("User", userSchema)