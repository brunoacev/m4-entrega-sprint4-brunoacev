import { User } from "../entities/user.entity";
import { IUserRequest } from "../interfaces/users";
import AppDataSource from "../data-source";
import bcrypt from "bcrypt"

const userCreateService = async ({name, email, isAdm, password}:IUserRequest): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)

      password = bcrypt.hashSync(password, 10);
      const isActive = true;

    const user =  userRepository.create({
      name,
      email,
      isAdm,
      password,
      isActive
    });

    await userRepository.save(user)

    return user;

}

export default userCreateService;
