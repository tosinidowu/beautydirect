import mongoose from "mongoose";
import dotenv from "dotenv";

export class MongoDB {
    /**
     * Load environment variables and connect to database
     */
    static async init() {
        if (process.env.NODE_ENV !== 'production') {
            dotenv.config({ path: "../.env" });
        }
        this.connect();
    }

    /**
     * A function to connect to the database
     */
    static connect() {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            console.error("MongoDB URI is not defined in environment variables");
            process.exit(1);
        }

                mongoose
            .connect(mongoUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => console.log("SUCCESSFULLY CONNECTED TO DATABASE"))
            .catch((error) => {
                console.error("Error connecting to database:", error);
                process.exit(1);
            });
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
