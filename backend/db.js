const mongoose = require ('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/pages'

const connectTomongo = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log("Connected to the database successfully");
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  };
    
  module.exports =connectTomongo;