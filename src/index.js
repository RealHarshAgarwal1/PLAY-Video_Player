import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path:"./env"
})
console.log(process.env.MONGODB_URI)

connectDB();
/*
const app =express()
v
(async ()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRR:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is on port :${process.env.PORT}`);
        })


    } catch (error) {
        console.error("ERROT:",error)
    }
})()*/