import { Router } from "express";
import * as newMessageController from "../controllers/newMessageController.js";

const newMessageRouter = Router();

newMessageRouter.get("/", newMessageController.displayView);
newMessageRouter.post(
    "/",
    newMessageController.addNewMessage,
    newMessageController.redirectHome
);

export default newMessageRouter;
