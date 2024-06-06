const registerUser = require("../models/authModel");

const login = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Use the model to find an existing user
    const isUserExist = await registerUser.findOne({ email });
    if (isUserExist) {
      return res
        .status(400)
        .json({ message: "User already exists", status: 400 });
    }

    // Save user in mongodb
    const newUser = await registerUser.create({
      name,
      email,
      password,
    });

    res.status(200).json({
      status: 200,
      message: "User successfully registered",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

// Get User Data
const getUserData = async (req, res, next) => {
  try {
    const getUsers = await registerUser.find({});
    res.status(200).json({
      message: "User data",
      data: getUsers,
      status: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, signup, getUserData };
