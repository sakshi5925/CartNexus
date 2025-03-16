import mongoose from "mongoose";

const UserSchema = new mongoose(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['admin', 'user'],
            default: 'user'
        }
    },
    {timestamp: true}
);

export const User = mongoose.model("User", UserSchema);