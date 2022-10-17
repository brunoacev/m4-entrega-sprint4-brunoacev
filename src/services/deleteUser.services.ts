import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import ErrorMessage from "../utils/Error.message";

const userDeleteService = async (
  id: string,
  isAdm: boolean | undefined
): Promise<boolean> => {
  const userRepository = AppDataSource.getRepository(User);

  let user = await userRepository.findOneBy({ id });

  if (!isAdm) {
    throw new ErrorMessage("You don't have admin permission", 403);
  }
  if (!user) {
    throw new ErrorMessage("Id not found", 404);
  }
  if (!user.isActive) {
    throw new ErrorMessage("User has already been deleted", 400);
  }

  await userRepository.update(id, { isActive: false });

  return true;
};

export default userDeleteService;
