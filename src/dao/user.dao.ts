import { UserRequest } from "@/dto/models.dto";
import userModel from "@/models/user.model";

export default class UserDao {
  public static async getUserById(id: string) {
    return userModel.findById(id);
  }

  public static async getUserByEmail(email: string) {
    try {
      const user = await userModel.findOne({ email });
      if (user) {
        return user.toObject();
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      throw error;
    }
  }

  public static async createUser(user: UserRequest) {
    try {
      const newUser = await userModel.create(user);
      return newUser.toObject();
    } catch (error) {
      throw error;
    }
  }
}
