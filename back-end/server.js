import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage';
import Grid from 'gridfs-stream';
import bodyParser from 'body-parser';
import path from 'path';
import Pusher from 'pusher';

//app config
const app = express();
const port = process.env.PORT || 2701;

//middlewares
app.use(bodyParser.json());
app.use(cors())
//db config

//API Routes
app.get("/", (req, res) => {
    res.status(200).send("hello world")
});

//Listener
app.listen(port, () => {
    console.log("Hello World");
});