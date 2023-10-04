import mongoose, { mongo } from "mongoose";

export type User = {
    username: String | undefined,
    password: String | undefined
}

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

const user = mongoose.model('User', userSchema)

export { user }