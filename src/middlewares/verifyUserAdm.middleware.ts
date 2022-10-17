import { Request, Response, NextFunction } from "express"
import "dotenv/config"


const verifyUserAdm = async (req: Request, res: Response, next: NextFunction) =>{

  const id = req.params.id
    if(req.user.isAdm){
       return next()
    } else {
      if(req.user.id === id) return next()
      return res.status(403).json({
        message: "You don't have admin permission"
      })
    }


}

export default verifyUserAdm;
