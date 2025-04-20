import jwt from "jsonwebtoken"

export const generateTokens = (userId, res) =>{
    // Generating the token
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn:"3d"
    })
    
    // Sending the Token to the user by converting into Cookie
    res.cookie("jwt", token, {
        maxAge: 3*24*60*60*1000, // MS (milliseconds)
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development"
    })

    return token;
}