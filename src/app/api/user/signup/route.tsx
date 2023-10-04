import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
import connectMongo from "../../database/database"
import { User } from "../../database/models/user.model"

type ResponseData = {
    success: number,
    message: string,
    data: any
}

// GET: /api/user/signup
export async function GET(
    req: Request
){  

    if(req.url == undefined){
        return NextResponse.json({
            success: 0,
            message: "Error parsing the url",
            data: undefined
        })
    }

    // extracting parameters from the request
    const { searchParams } = new URL(req.url!)  
    const username = searchParams.get('username')
    const password = searchParams.get('password')

    // verifying parameters exist
    if(password == undefined || username == undefined){
        return NextResponse.json({
            success: 0,
            message: "missing parameter password or username",
            data: undefined
        })
    }

    console.log(username, password)

    // inserting the data into mongodb
    try {   
        await connectMongo();
        const user = await User.create({
            username: username,
            password: password
        })
        return NextResponse.json({
            success: 1,
            message: "successfully added user",
            data: user
        })
    } catch(error) {
        return NextResponse.json({
            success: 0,
            message: "Database Error Failed to add user",
            data: undefined
        })
    }

}