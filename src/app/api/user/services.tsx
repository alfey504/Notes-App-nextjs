import connectMongo from "../database/database";
import { user, User } from "../database/models/user.model";

export async function addUser(username: string, password: string):  Promise<User> {

    await connectMongo();

    const existingUser = await user.findOne({username: username})

    if(existingUser != null){
        throw new Error("Username already taken")
    }

    const newUser = await user.create({
        username: username,
        password: password
    })
    return({
        username: newUser.username,
        password: newUser.password
    })
}