//Initialize the express app
import express, {Request, Response} from "express";
import productRoutes from "./routes/product.routes";
import cors from 'cors';
import contactRoutes from "./routes/contact-routes";
import authRoutes from "./routes/auth.routes";
import {authenticateToken} from "./middleware/auth.middleware";
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
const allowedOrigins = [
    'http://localhost:5173',
]
// app.use(cors());
const corsOptions = {
    origin: (origin: string | undefined,
             callback: (err: Error | null,
                        allow?:boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
app.use(cors(corsOptions));
app.use("/api/auth",authRoutes)
app.use("/api/products",authenticateToken,productRoutes);
app.use("/api/contact",contactRoutes);
export default app;