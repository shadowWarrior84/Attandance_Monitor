import { jwtVerify } from "jose"

export const getJwtStrategy = () => {
    const secret = process.env.JWT_SECRET_KEY

    if(!secret || secret.length === 0) {
        throw new Error("The enviroment variable JWT_SECRET_KEY is not set.")
    }

    return secret
}

export const verifyAuth = async (token) => {
    try {
        const verified = await jwtVerify(token, new TextEncoder().encode(getJwtStrategy()))
        return verified.payload
    } catch (error) {
        throw new Error("Your token has expired.")
    }
}