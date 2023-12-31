import withProtect from "@/app/api/utils/withProtect"
import dbConnect from "../../../db/dbConnect"
import Teacher from "@/app/api/models/teacherModel"
const { NextResponse } = require("next/server")

export async function PATCH(req) {

    console.log("first")

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

        const { id , userId, classAttend, totalClass } = data
        
        const res = await withProtect(token)

        if(!res._id.equals(userId)) {
            return NextResponse.json({success: false, error: "not verified"}, {status: 500})
        }

    
        const updateData = await Teacher.findByIdAndUpdate({_id: id}, { classAttend: classAttend, totalClass}, { new: true})

        return NextResponse.json(updateData, { status: 200 })

    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }

}
