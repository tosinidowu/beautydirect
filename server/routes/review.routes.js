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

export default UserRoutes;