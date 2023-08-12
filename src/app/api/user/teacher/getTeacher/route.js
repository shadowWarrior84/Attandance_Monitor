import withProtect from "@/app/api/utils/withProtect"
import dbConnect from "../../../db/dbConnect"
import Teacher from "@/app/api/models/teacherModel"
const { NextResponse } = require("next/server")

export async function GET(req) {

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
        
        const res = await withProtect(token)

        const subjects = await Teacher.find({id: res._id})

        //const subjects = await Teacher.find({})
        
        return NextResponse.json(subjects, { status: 200 })

    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }

}


