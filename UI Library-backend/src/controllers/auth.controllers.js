import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";

async function googleAuth(req, res) {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "All fields are required",
         success:false,
      });
    }

    const userexist = await userModel.findOne({ email });

    if (userexist) {
      return res.status(400).json({
        message: "User already exists",
         success:false,
      });
    }

    const user = await userModel.create({
      name,
      email
    });

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    return res.status(200).json({
      message: "User created",
      success:true,
      user
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      success:false
    });
  }
}

async function logout(req, res) {
  res.clearCookie("token");

  return res.status(200).json({
    message: "User logout"
  });
}

export default { googleAuth, logout };