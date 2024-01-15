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
}
