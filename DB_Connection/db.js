const mongoose = require('mongoose');
// const redis = require("redis");

const dotenv = require('dotenv');
dotenv.config();

let uri = process.env.DB_URL;

// const redisClient = redis.createClient({
//   url: process.env.REDIS_URL
// });

// redisClient.on("connect", () => {
//   console.log("Redis connected");
// });

// redisClient.on("error", (error) => {
//   console.error("Redis error:", error);
// });

// module.exports = redisClient;



const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    

    console.log('Connected to MongoDB Atlas!');
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas:', error);
    throw error;
  }
  
};






module.exports = {
  // redisClient,
  mongoose,
  connectToDatabase,
};
