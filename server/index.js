import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// import routes
import itemRoutes from './routes/item.js';
import userRoutes from './routes/user.js';

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build'))

// routes
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);


const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || "8080";

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));