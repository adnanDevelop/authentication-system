import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const registerUser = async (req, res) => {
  try {
    let { name, userName, email, password, confirmPassword, gender } = req.body;
    console.log(req.body);

    // If fields are empty
    if (
      !name ||
      !userName ||
      !email ||
      !password ||
      !confirmPassword ||
      !gender
    ) {
      res.status(400).json({
        message: "All fields are required",
        status: 400,
      });
    }

    // If password does not match
    if (password !== confirmPassword) {
      res.status(400).json({
        message: "Passwords do not match",
        status: 400,
      });
    }

    const user_name = await User.findOne({ userName });
    if (user_name) {
      res.status(400).json({
        message: "Username already exists try different",
        status: 400,
      });
    }

    // Hash password
    let hashPassword = await bcrypt.hash(password, 10);

    const maleAvator = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const femaleAvator = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    const registerUser = await User.create({
      name,
      userName,
      email,
      password: hashPassword,
      profilePhoto: gender === "male" ? maleAvator : femaleAvator,
      gender,
    });

    res.status(200).json({
      status: 200,
      message: "Account created successfully",
      data: registerUser,
      token: registerUser.generateToken(registerUser._id, res),
    });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      res.status(400).json({
        message: "All fields are required",
        status: 400,
      });

      const user = await User.find({ userName });
      if (!user) {
        res.status(400).json({
          message: "Incorrect username or password",
          status: 400,
        });
      }

      res.status(200).json({
        data: user,
      });
      console.log(user);
    }
  } catch (error) {
    console.log(error);
  }
};

export { registerUser, loginUser };
