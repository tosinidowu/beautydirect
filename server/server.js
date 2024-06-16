import cors from "cors";
import express from "express";
import UserRoutes from "./routes/user.routes.js";
import ReviewRoutes from "./routes/review.routes.js";
import { MongoDB } from "./db.js";

const app = express();
const PORT = 5002;

// db connection
MongoDB.init();

// middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", UserRoutes);
app.use("/api/review", ReviewRoutes);

//listen
app.listen(PORT, () =>
    console.log(`Server running on port: http://localhost:${PORT}`)
);
