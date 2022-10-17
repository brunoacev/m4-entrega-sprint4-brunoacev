import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { IUserLogin } from "../interfaces/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config"

const userLoginService = async ({email, password} : IUserLogin): Promise<String> => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({email: email})

    if(!user) throw new Error("Wrong email or password")

    if(!bcrypt.compareSync(password, user.password)) throw new Error("Wrong email or password")

    const token = jwt.sign({id: user.id, isAdm: user.isAdm}, String(process.env.JWT_SECRET), { expiresIn: "1d",})

    return token

}

export default userLoginService;
