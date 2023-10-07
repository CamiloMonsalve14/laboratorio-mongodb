const connectDB = require("./src/db");

const createUser = async (user)=>{
  try {
    const db = await connectDB();
    const collectionUsers = db.collection("users");
    const result = await collectionUsers.insertOne(user);
    return result;
  } catch (error) {
    return error;
  }
};

// const findUsers = undefined;

// const findUserById = undefined;

// const deleteUserById = undefined;

// const updateUser = undefined;

const CRUD = {
  createUser,
  // findUsers,
  // findUserById,
  // deleteUserById,
  // updateUser,
};

module.exports = CRUD;
