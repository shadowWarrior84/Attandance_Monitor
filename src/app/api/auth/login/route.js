import { NextResponse } from "next/server"
import dbConnect from "../../db/dbConnect"
import bcrypt from "bcrypt"
import { SignJWT } from "jose"
import cookie from "cookie"
import User from "@/app/api/models/userModel"

export async function POST(req) {

    await dbConnect()

    try {

        const body = await req.json()

        const { email, password } = body

        const userExists = await User.findOne({ email })

        if (!userExists) {
            return NextResponse.json({ error: "Invalid email or password" })
        }

        const verifyPassword = await bcrypt.compare(password, userExists.password)

        if (!verifyPassword) {
            return NextResponse.json({ password: verifyPassword, error: "Invalid password" })
        }

        delete userExists._doc.password

        let response = NextResponse.json({success: true, user: userExists}, {status: 200})

        const iat = Math.floor(Date.now() / 1000);
        const exp = iat + 60* 60; // one hour

        const token = await new SignJWT({}).setProtectedHeader({ alg: "HS256" })
            .setIssuedAt(iat)
            .setExpirationTime(exp)
            .setNotBefore(iat)
            .sign(new TextEncoder().encode(process.env.JWT_SECRET_KEY))


        response.headers.set("Set-Cookie", cookie.serialize("user-token",token, {
            httpOnly: true,
            path: "/",
            secure: process.env.NODE_ENV === "production"
        }))
        // res.setHeader("Set-Cookie", cookie.serialize("user-token", token, {
        //     httpOnly: true,
        //     path: "/",
        //     secure: process.env.NODE_ENV === "production"
        // }))

        return response

        // return NextResponse.json({ success: true }, { status: 200 })

    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }

}

