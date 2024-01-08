import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const UserRoutes = Router();

/**
 * @route POST /api/users/register
 * @description Register a user
 */
UserRoutes.post("/register", UserController.registerUser);

/**
 * @route POST /api/users/login
 * @description Login a user
 */
UserRoutes.post("/login", UserController.loginUser);

/**
 * @route GET /api/users
 * @description Get all users
 */
UserRoutes.get("/", UserController.getAllUsers);

/**
 * @route GET /api/users/:id
 * @description Get a single user
 * @param id
 * @returns User
 */
UserRoutes.get("/:id", UserController.getSingleUser);

/**
 * @route PATCH /api/users/:id
 * @description Update a user
 * @param id
 * @returns User
 */
UserRoutes.patch("/:id", UserController.updateUser);

/**
 * @route DELETE /api/users/:id
 * @description Delete a user
 * @param id
 * @returns User
 */
UserRoutes.delete("/:id", UserController.deleteUser);

export default UserRoutes;
