import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'

const connectDB=async ()=>{ 
     
    try {
        
        const connectionInstance=  await mongoose.connect(`${process.env.DATABASEURL}`)
        console.log(`Mongo Connected !!!  `)

    } catch (error) {
        // console.log(`${process.env.DATABASEURL}`)
        console.log("Mongo connection Failed :",error )
        process.exit(1)
    }

}


export default connectDB