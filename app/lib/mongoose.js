import mongoose from 'mongoose';
let isConnected = false;

export async function connectToDatabase () {
  mongoose.set('strictQuery', true);

  if(!process.env.MONGODB_URL) {
    return console.log('MISSING MONGODB_URL');
  }

  if (isConnected) {
    return console.log('MongoDB is already connected');
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'nextjs14admin'
    })

    isConnected = true;

    console.log('MongoDB is connected');
  } catch (error) {
    console.log('MongoDB connection failed', error)
  }
}