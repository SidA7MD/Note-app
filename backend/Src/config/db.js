import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.connect("mongodb+srv://NoteData:Sidi2233@natsu.is8djbt.mongodb.net/?retryWrites=true&w=majority&appName=Natsu");
        console.log("MONGODB CONNECTED SUCCESSFULLY");
    }catch(error){
        console.error("Error Connecting to MONGODB",error);
        process.exit(1);
    }
}