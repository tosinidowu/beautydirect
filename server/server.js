import cors from "cors";
import express from "express";
import UserRoutes from "./routes/user.routes.js";
import ReviewRoutes from "./routes/review.routes.js";
import { MongoDB } from "./db.js";

const app = express();
const PORT = process.env.PORT || 5002; // Use the port provided by Heroku or default to 5002

// db connection
MongoDB.init();

// middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", UserRoutes);
app.use("/api/review", ReviewRoutes);

//listen
app.listen(port, () =>
    console.log(`Server running on port: http://localhost:${PORT}`)
);
