import mongoose from "mongoose";

/**
 * Review Schema for MongoDB
 */
const ReviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Servicer",
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

export default mongoose.model("Review", ReviewSchema);
