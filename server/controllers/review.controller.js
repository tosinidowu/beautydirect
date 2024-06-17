import ReviewModel from "../models/review.model.js";

export class ReviewController {
    static async writeReview(req, res) {
        const response = await ReviewModel.create({
            ...req.body,
            userId: req.params.userId,
            servicerId: req.params.servicerId,
        });
        res.status(201).json({ review: response });
    }

    static async getReviews(req, res) {
        const response = await ReviewModel.find({ servicerId: req.params.servicerId });
        res.status(200).json({ reviews: response });
    }

    static async getSingleReview(req, res) {
        const response = await ReviewModel.findOne({
            userId: req.params.userId,
            servicerId: req.params.servicerId,
        });
        res.status(200).json({ review: response });
    }

    static async updateReview(req, res) {
        const response = await ReviewModel.findOneAndUpdate(
            {
                userId: req.params.userId,
                servicerId: req.params.servicerId,
            },
            req.body,
            { new: true }
        );
        res.status(200).json({ review: response });
    }

    static async deleteReview(req, res) {
        const response = await ReviewModel.findOneAndDelete({
            userId: req.params.userId,
            servicerId: req.params.servicerId,
        });
        res.status(200).json({ review: response });
    }
}
