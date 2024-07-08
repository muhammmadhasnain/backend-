import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstant = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\ MongoDB connected !! DB Host :
            ${connectionInstant.connection.host}`
        )
        
    } catch (error) {
        console.log("mongoDb connection FAIlED ", error)
        process.exit(1)
        
    }
}

export default connectDB