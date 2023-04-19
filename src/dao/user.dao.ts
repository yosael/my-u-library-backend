import { UserRequest } from "@/dto/models.dto";
import userModel from "@/models/user.model";

export default class UserDao {
  public static async getUserById(id: string) {
    try {
      const user = await userModel.findById(id);
      if (user) {
        return user.toObject();
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      throw error;
    }
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

  public static async findAllUsers() {
    try {
      const users = await userModel.find();
      return users.map((user) => user.toObject());
    } catch (error) {
      throw error;
    }
  }

  public static async findUserByRole(role: string) {
    try {
      const users = await userModel.find({ role });
      return users.map((user) => user.toObject());
    } catch (error) {
      throw error;
    }
  }
}
