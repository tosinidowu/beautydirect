// register a new business
// get all businesses
// get a single business
// get all businesses in a category
// get all businesses in a location
// update a business
// delete a business

import { Router } from "express";
import { ServicerController } from "../controllers/servicer.controller.js";

const ServicerRoutes = Router();

/**
 * @route POST /api/servicer/register
 * @description Register a business
 */
ServicerRoutes.post("/register", ServicerController.registerServicer);

/**
 * @route GET /api/servicer
 * @description Get all businesses
 */
ServicerRoutes.get("/", ServicerController.getAllServicers);

/**
 * @route GET /api/servicer/:servicerId
 * @description Get a single business
 * @param servicerId
 * @returns Servicer
 */ 
ServicerRoutes.get("/:servicerId", ServicerController.getSingleServicer);

/**
 *      
 * @route GET /api/servicer/category/:category
 * @description Get all businesses in a category
 * @param category
 * @returns Servicers
 */
ServicerRoutes.get("/category/:category", ServicerController.getServicersByCategory);

/**
 * @route GET /api/servicer/location/:location
 * @description Get all businesses in a location
 * @param location
 * @returns Servicers
 */
ServicerRoutes.get("/location/:location", ServicerController.getServicersByLocation);

/**
 * @route PATCH /api/servicer/:servicerId
 * @description Update a business
 * @param servicerId
 * @returns Servicer
 */
ServicerRoutes.patch("/:servicerId", ServicerController.updateServicer);

/**
 * @route DELETE /api/servicer/:servicerId
 * @description Delete a business
 * @param servicerId
 * @returns Servicer
 */
ServicerRoutes.delete("/:servicerId", ServicerController.deleteServicer);

export default ServicerRoutes;
