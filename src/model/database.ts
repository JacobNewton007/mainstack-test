import mongoose  from "mongoose";

// const  DB_URL: any = process.env.DB_URL;
const DB_URL='mongodb+srv://jakobnewthing:pa$$word@cluster0.v6xyx9x.mongodb.net/?retryWrites=true&w=majority'
export  const connect = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log('Database connected...');
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connect, 5000);
  }
};

