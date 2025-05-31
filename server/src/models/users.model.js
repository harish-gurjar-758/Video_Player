import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
        },
        email: {
            type: String
        },
        password: {
            type: String

        },
        profilePic: {
            type: String
        },
        channelBanner: {
            type: String
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;