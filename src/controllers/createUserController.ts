import { Response, Request } from "express";
import userCreateService from "../services/createUser.services";

const createUserController = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const newUser = await userCreateService(user);

    const { password, ...Rest } = newUser;

    return res.status(201).json(Rest);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default createUserController;
