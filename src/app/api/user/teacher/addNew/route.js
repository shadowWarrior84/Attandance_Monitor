import withProtect from "@/app/api/utils/withProtect"
import dbConnect from "../../../db/dbConnect"
import Teacher from "@/app/api/models/teacherModel"
const { NextResponse } = require("next/server")

export async function POST(req) {

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

        const { userId, name, subject, classAttend, totalClass } = data

        if( !userId || !name || !subject || !classAttend || !totalClass ){
            return NextResponse.json({
                success: false,
                message: "All the parameters are required"
            })
        }
        
        const res = await withProtect(token)

        // console.log(res)

        // console.log(res._id.equals(userId) + " local " + userId)

        if(!res._id.equals(userId)) {
            return NextResponse.json({success: false, error: "not verified"}, {status: 500})
        }
        
    
        const newTeacher = await Teacher.create({
            id: userId,
            name: name,
            subject: subject,
            classAttend: classAttend,
            totalClass: totalClass
        })

        return NextResponse.json({success: true}, { status: 200 })

    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }

}


