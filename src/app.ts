//Initialize the express app
import express, {Request, Response} from "express";
import productRoutes from "./routes/product.routes";
import cors from 'cors';
import contactRoutes from "./routes/contact-routes";
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
app.use("/api/products",productRoutes);
app.use("/api/contact",contactRoutes);
export default app;