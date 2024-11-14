import express from 'express';
import db from './config/connection.js';

import { User, Thought, Response } from './models/index.js';// import the Book model from the models folder

const PORT = process.env.PORT || 3001;// set the port to 3001 if the environment variable PORT is not set
const app = express();// create an instance of the express server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());