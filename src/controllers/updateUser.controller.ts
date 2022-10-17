import { Request, Response } from "express";
import userUpdateService from "../services/updateUser.services";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const keys = Object.keys(user);

    const notChange = keys.find(
      (key) => key === "isActive" || key === "isAdm" || key === "id"
    );

    if (notChange)
      res.status(401).json({
        message: `${notChange} cannot be changed`,
      });

    const id = req.params.id;
    await userUpdateService(id, user);

    res.status(200).json({
      message: "user successfully updated",
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        message: error.message,
      });
    }
  }
};

export default updateUserController;
