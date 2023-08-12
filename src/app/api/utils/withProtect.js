const { jwtVerify } = require("jose")
const { NextResponse, NextRequest } = require("next/server")
import User from "@/app/api/models/userModel"


const withProtect = async (token) => {

    try {

        if (!token) {
            return ({
                succcess: false,
                message: "Please log in to get access."
            })

        }

        const decoded = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY))

        const currentUser = await User.findById(decoded.payload.userExists._id)

        if(!currentUser) {
            return ({
                succcess: false,
                message: "The user belonging to this token no longer exist"
            })
        }

        return currentUser

    } catch (error) {

        return ({
            succcess: false,
            message: "Please login to get acceess"
        })
    }

}

export default withProtect