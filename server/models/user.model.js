import mongoose from "mongoose";

/**
 * User Schema for MongoDB
 */
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: "Email is required",
        unique: true,
    },
    firstName: {
        type: String,
        required: "First name is required",
    },
    lastName: {
        type: String,
        required: "Last name is required",
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("User", UserSchema);
