import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { IUser } from "../interfaces/users";

const listUsersService = async () :Promise<IUser[]> => {
    const userRepository = AppDataSource.getRepository(User)
    const users = (await userRepository.find()).map(user => {
      const { password, ...userRest } = user
      return userRest;
    })


    return users;
}

export default listUsersService;
