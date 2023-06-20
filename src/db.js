import mongoose from 'mongoose'

export const connectDB = async() =>{
    try {
        await mongoose.connect('mongodb://admin:oi8OOLj0rbQBURDRfI5VltfK@MongoS3601A.back4app.com:27017/1e13400d9a9c4b10b12865ebb4be6d86')
        console.log ("DB CONECTADA")
    } catch (error){
        console.log(error);
    }
};


