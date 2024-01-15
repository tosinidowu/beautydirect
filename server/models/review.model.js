import mongoose from "mongoose";

/**
 * Review Schema for MongoDB
 */
const ReviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: "Rating is required",
    },
    serviceReceived: {
        type: String,
        required: "Service Received is required",
    },
    location: {
        type: String,
    },
    cost: {
        type: Number,
    },
    comment: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    servicerId: {
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
