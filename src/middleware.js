import { NextResponse } from "next/server"
import { verifyAuth } from "./lib/auth"


export default async function middleware(req) {
    const token = req.cookies.get("user-token")?.value

    const verifiedToken = token && (await verifyAuth(token).catch((err) => {
        console.log(err)
    }))

    if(req.nextUrl.pathname.startsWith("/LoginandSignup") && !verifiedToken){
        return
    }

    if(req.url.includes("/LoginandSignup") && verifiedToken){
        return NextResponse.redirect(new URL("http://localhost:3000/dashboard"))
    }

    if(!verifiedToken) {
        return NextResponse.redirect(new URL("/LoginandSignup", req.url))
    }
}

export const config = {
    matcher: ["/dashboard/:path*", "/LoginandSignup"]
}