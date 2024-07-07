import express from 'express';
import dotenv from 'dotenv';
import DefaultRouter from './src/controllers/default-controller/routing.js';
let App = express();
dotenv.config();
App.use(DefaultRouter);
App.listen(process.env.PORT, () => {
  console.log(`App Running in Port ${process.env.PORT}`);
})