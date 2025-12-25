import { Router } from "express";
import * as detailedMessageController from "../controllers/detailedMessageController.js";

const detailedMessageRouter = Router();

detailedMessageRouter.get("/:userId", detailedMessageController.displayView);

export default detailedMessageRouter;
