import { IUserUpdate } from "../interfaces/users";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import bcrypt from "bcrypt"

const userUpdateService = async (id: string, {name, email, password}: IUserUpdate): Promise<User> => {

  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find()

  if(users.find(user => user.email === email)) throw new Error("This email has already been used")


  const user = users.find(user => user.id === id)
  if(!user) throw new Error("Id not found")

  if(password){
    if(bcrypt.compareSync(password, user.password)) throw new Error("This password has already been used")
    password = bcrypt.hashSync(password, 10)
  }

  await userRepository.update( id, { email: email, name: name , password: password})

  const userUpdate = await userRepository.findOneBy({id})

   return userUpdate!;

}


export default userUpdateService;
