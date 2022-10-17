import { Router } from "express";
import loginController from "../controllers/loginUser.controller";

const routes = Router();

routes.post("", loginController);

export default routes;
