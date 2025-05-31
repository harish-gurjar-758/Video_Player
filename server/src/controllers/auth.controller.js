import User from "../models/users.model.js";
import bcrypt from 'bcryptjs';
import { generateToken } from "../lib/utils.js";


// Create a NEw Account
export const createAccount = async (req, res) => {
    const {
        username,
        email,
        password
    } = req.body;

    try {
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters"
            });
        }

        const user = await User.findOne({ email });
        if (user) return res.status(400).json({
            message: "Email already exists"
        });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        if (newUser) {
            // generate jwt token here
            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                profilePic: newUser.profilePic,
                channelBanner: newUser.channelBanner,
            });

        } else {
            res.status(400).json({
                message: "Invalid user data"
            });
        }

    } catch (error) {
        console.log("Error in Signup controller", error.message);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};