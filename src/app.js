// src/app.js
import express from "express";
import cors from "cors";
import authRouter from './routes/auth.js'; // always include .js in ES modules
// import db from './config/db.js'
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/auth', authRouter);

// ✅ Export using ES module default export
export default app;
