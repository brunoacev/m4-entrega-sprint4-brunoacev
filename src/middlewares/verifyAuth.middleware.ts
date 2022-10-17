import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import "dotenv/config"


const verifyAuth = async (req: Request, res: Response, next: NextFunction) =>{
    let token = req.headers.authorization
     token = token?.split(' ')[1] || token

     jwt.verify(
        token as string,
        String(process.env.JWT_SECRET) as string,
        (err: any, decoded: any) => {
         try {
          req.user = {
            isAdm: decoded.isAdm,
            id: decoded.id
          }

          next()
         } catch (error) {
           return res.status(401).json({
            message: err.message
           })
         }


     })




}

export default verifyAuth;
