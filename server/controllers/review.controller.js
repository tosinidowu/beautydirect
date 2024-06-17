import ReviewModel from "../models/review.model.js";

export class ReviewController {
    static async writeReview(req, res) {
        try {
            const { userId, servicerId } = req.params;
            const review = new ReviewModel({
                ...req.body,
                userId,
                servicerId,
            });
            const savedReview = await review.save();
            res.status(201).json({ review: savedReview });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getReviews(req, res) {
        try {
            const { servicerId } = req.params;
            const reviews = await ReviewModel.find({ servicerId });
            res.status(200).json({ reviews });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getSingleReview(req, res) {
        try {
            const { userId, servicerId } = req.params;
            const review = await ReviewModel.findOne({ userId, servicerId });
            res.status(200).json({ review });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateReview(req, res) {
        try {
            const { userId, servicerId } = req.params;
            const updatedReview = await ReviewModel.findOneAndUpdate(
                { userId, servicerId },
                req.body,
                { new: true }
            );
            res.status(200).json({ review: updatedReview });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteReview(req, res) {
        try {
            const { userId, servicerId } = req.params;
            const deletedReview = await ReviewModel.findOneAndDelete({ userId, servicerId });
            res.status(200).json({ review: deletedReview });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
