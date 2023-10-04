import { error } from "console";
import mongoose from "mongoose";

const connectMongo = async () => {
    if(process.env.MONGO_CONNECTION_STRING == undefined) throw new Error("unable to find mongo connection string")
    mongoose.connect(process.env.MONGO_CONNECTION_STRING)
}

export default connectMongo