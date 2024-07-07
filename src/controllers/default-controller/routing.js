import express from 'express';
import defaultController from './main-controller.js';
const DefaultRouter = express.Router();

DefaultRouter.get('/', defaultController)

export default DefaultRouter;