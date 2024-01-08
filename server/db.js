import mongoose from "mongoose";
import dotenv from "dotenv";

export class MongoDB {
    /**
     * Load environment variables and connect to database
     */
    static async init() {
        dotenv.config({ path: "../.env" });
        this.connect();
    }

    /**
     * A function to connect to the database
     */
    static connect() {
        mongoose
            .connect(process.env.MONGODB_URI)
            .then(() => console.log("SUCCESSFULLY CONNECTED TO DATABASE"))
            .catch((error) => console.log(error));
    }

    /**
     * A function to disconnect from the database
     *
     */
    static async disconnect() {
        await mongoose.disconnect();
        console.log("SUCCESSFULLY DISCONNECTED FROM DATABASE");
    }
}
