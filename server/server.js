
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

// Basic route to verify the server is running
app.get("/", (req, res) => {
    res.send("Server is running!");
});

//routes
app.use("/api/users", UserRoutes);
app.use("/api/reviews", ReviewRoutes);

//listen
app.listen(PORT, () =>
    console.log(`Server running on port: http://localhost:${PORT}`)
);
