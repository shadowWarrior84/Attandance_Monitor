import { NextResponse } from "next/server"


export  async function POST(req) {

    try {

        let res = NextResponse.json({success: true})

        res.headers.delete("Set-Cookie");
        res.cookies.set("user-token", "", { maxAge: 0})

        return res
        
    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}