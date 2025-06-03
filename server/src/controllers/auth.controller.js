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

// Login User
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials Email is invalid"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "Invalid credentials Password is invalid"
            });
        }

        generateToken(user._id, res);

        res.status(200).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            profilePic: newUser.profilePic,
            channelBanner: newUser.channelBanner,
        });
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

// Get Logged In User

export const getLoggedInUser = async (req, res) => {
    try {
        const userId = req.user?._id;

        if (!userId) {
            return res.status(401).json({ message: "Not authorized" });
        }

        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ user }); // wrapped in { user } for consistent frontend access
    } catch (error) {
        console.log("Error in getLoggedInUser controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Check Auth
export const CheckAuth = async (req, res) => {
    try {
        res.status(200).json({ user: req.user });
    } catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};