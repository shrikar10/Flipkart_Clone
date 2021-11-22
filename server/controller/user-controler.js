import { request } from "express";
import User from "../model/userSchema.js";

export const userSignup = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return res.status(401).json("Username already Exists");
    }
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.status(200).json("User sucessfully registered");
  } catch (error) {
    console.log("Errors:" + error.message);
  }
};

export const userLogin = async (req, res) => {
  try {
    let user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      return res.status(200).json(`${req.body.username} Login sucessfull`);
    } else {
      return res.status(401).json("Invalid login");
    }
  } catch (error) {
    console.log("Error Login user", error.message);
  }
};
