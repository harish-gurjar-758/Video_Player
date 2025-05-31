import User from "../models/users.model.js";


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

        const newUser = new User({
            username,
            email,
            password
        });

        await newUser.save();
    } catch (error) {
        console.log("Error in Signup controller", error.message);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}