import { Request, Response } from "express";
import listUsersService from "../services/listUser.services";

const listUserController = async (req: Request, res: Response) => {
  try {
    const listAllUsers = await listUsersService();

    return res.status(200).json(listAllUsers);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(403).json({
        message: error.message,
      });
    }
  }
};

export default listUserController;
