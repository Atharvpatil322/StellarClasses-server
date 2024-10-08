import { User } from "../models/userModel.js";

export const CreateUserHandler = async (req,res) => {
    const user = req.body;
    const response = await User.create(user);
    console.log(response);
    res.json({message: "loda lasan", user:user}).status(200);
}

export const GetUserHandler = async (req,res) => {
    const email = req.params.email
    const user = await User.find({email: email});
    res.json({message: "user Found", user: user})
}

export const GetAllUsersHandler = async (req,res) => {
    const users = await User.find({});
    res.json({message: "user Found", users: users})
}