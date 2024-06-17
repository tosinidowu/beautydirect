// write
// read
// update
// delete
import { Router } from "express";
import { ReviewController } from "../controllers/review.controller.js";

const UserRoutes = Router();

/**
 * @route POST /api/review/write/:servicerId/:userId
 * @description Write a review
 * @param servicerId
 * @param userId
 */
UserRoutes.post("/write/:servicerId/:userId", ReviewController.writeReview);

/**
 * @route GET /api/review/:servicerId
 * @description Get all reviews for a servicer
 * @param servicerId
 * @returns Reviews
 */
UserRoutes.get("/:servicerId", ReviewController.getReviews);

/**
 * @route GET /api/review/:servicerId/:userId
 * @description Get a single review
 * @param servicerId
 * @param userId
 * @returns Review
 */
UserRoutes.get("/:servicerId/:userId", ReviewController.getSingleReview);

/**
 * @route PATCH /api/review/:servicerId/:userId
 * @description Update a review
 * @param servicerId
 * @param userId
 * @returns Review
 */
UserRoutes.patch("/:servicerId/:userId", ReviewController.updateReview);

/**
 * @route DELETE /api/review/:servicerId/:userId
 * @description Delete a review
 * @param servicerId
 * @param userId
 * @returns Review
 */
UserRoutes.delete("/:servicerId/:userId", ReviewController.deleteReview);

export default UserRoutes;