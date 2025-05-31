import jwt from 'jsonwebtoken';
import User from '../models/users.model.js';

export const protect = async (req, res, next) => {
    let token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Not authorized, no token"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).select('-password');
        next();
    } catch (error) {
        console.log("Auth middleware error:", error.message);
        res.status(401).json({
            message: "Not authorized"
        });
    };
}