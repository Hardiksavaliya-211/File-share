import mongoose from "mongoose";


const DBConnection = async () => {
    const PASSWORD = "Hardik@123";

    const MONGO_URI = `mongodb+srv://hardik:Hardik@123@cluster0.ao1kwsq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect("mongodb+srv://hardik:Hardik@123@cluster0.ao1kwsq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;