import { Request, Response } from "express";
import userDeleteService from "../services/deleteUser.services";
import ErrorMessage from "../utils/Error.message";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const isAdm = req.user.isAdm;
    await userDeleteService(id, isAdm);

    res.status(204).send();
  } catch (error) {
    if (error instanceof ErrorMessage) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};
export default deleteUserController;
