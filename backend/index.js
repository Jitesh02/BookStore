import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js'
import BookRoutes from './routes/BooksRoute.js'
import cors from 'cors'

const app = express();


// MiddleWare for handling CORS POLICY

// app.use(cors());
app.use(
    cors({
        origin: 'https://bookstorejt.vercel.app',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
)
app.use(express.json());

app.get('/', (req, res) => {
    // console.log(req);
    return res.status(234).send('Hey There');
})

app.use('/books', BookRoutes)

mongoose.connect(mongoDBURL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });