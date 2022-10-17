import { Router } from "express";

import createUserController from "../controllers/createUserController";
import deleteUserController from "../controllers/deleteUser.controller";
import listUserController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import verifyAuth from "../middlewares/verifyAuth.middleware";
import verifyEmailExists from "../middlewares/verifyEmailExists.middleware";
import verifyUserAdm from "../middlewares/verifyUserAdm.middleware";

const routes = Router();

routes.post("", verifyEmailExists, createUserController);
routes.get("", verifyAuth, verifyUserAdm, listUserController);
routes.patch("/:id", verifyAuth, verifyUserAdm, updateUserController);
routes.delete("/:id", verifyAuth, deleteUserController);

export default routes;
