import { Request, Response } from "express";
import userLoginService from "../services/loginUser.services";

const loginController = async (req: Request, res: Response) => {
  const user = req.body;

  try {
    const token = await userLoginService(user);

    return res.status(200).json({ token });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(403).json({
        message: error.message,
      });
    }
  }
};

export default loginController;
