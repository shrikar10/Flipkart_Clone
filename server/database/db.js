import mongoose from "mongoose";

const Connection = async (DB_PASS) => {
  const URL = `mongodb+srv://shrikar:${DB_PASS}@flipkart-data.wyzx9.mongodb.net/FlipkartDatabase?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      //   useNewUrlParser: true,
      //   useunifiedTopology: true,
      //   useFindAndModify: false,
    });
    console.log("db connected!!!!");
  } catch (error) {
    console.log("Db Error:" + error.message);
  }
};
export default Connection;
