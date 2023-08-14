import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(()=> console.log("MongoDB Connected"))
        .catch((err)=>console.error(`Error: ${err}`));
}

export default connectDB