import withProtect from "../../utils/withProtect"
import User from "../../models/userModel"
import dbConnect from "../../db/dbConnect"
const { NextResponse } = require("next/server")

export async function PATCH(req) {

    await dbConnect()

    let token

        if(req.cookies) {
            token = req.cookies.get("user-token")?.value
        }

        if(!token) {
            return NextResponse.json({
                succcess: false,
                message: "Please log in to get access."
            }, {status: 401})

        }

    try {

        const data = await req.json()
        
        const { userId, ...others} = data

        const res = await withProtect(token)

        if(!userId){
            return NextResponse.json({success: false, error: "Invalid data"}, {status: 500})
        }

        if(!res._id.equals(userId)) {
            return NextResponse.json({success: false, error: "not verified"}, {status: 500})
        }

    
        const updateData = await User.findByIdAndUpdate({_id: userId}, others, { new: true})

        delete(updateData._doc.password)

        return NextResponse.json({success: true, updateData}, { status: 200 })

    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }

}
