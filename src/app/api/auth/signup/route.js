import { NextResponse } from "next/server"
import dbConnect from "../../db/dbConnect"
import bcrypt from "bcrypt"
import User from "@/app/api/models/userModel"


export async function POST(request) {

    await dbConnect()
    try {
        const body = await request.json()
        const {name, email , password, pic} = body

        if(!name || !email || !password){
            return new NextResponse("Missing info", {status: 500})
        }

        const userExists = await User.findOne({email})

        if(userExists){
            return NextResponse.json({error: "Email Already Exits"}, {status: 500})
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
            pic: pic
        })

    
        return NextResponse.json(user)
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Server Error", {status: 500})
    }
}