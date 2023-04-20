import UserDao from "@/dao/user.dao";
import { UserRequest, UserResponse } from "@/dto/models.dto";

export default class UserService {
  public static async getUserById(id: string) {
    try {
      const user = await UserDao.getUserById(id);
      const result = {
        id: user._id.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      };
      return result;
    } catch (error) {
      throw error;
    }
  }

  public static async getUserByEmail(email: string) {
    try {
      const user = await UserDao.getUserByEmail(email);
      const result = {
        id: user._id.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      };
      return result;
    } catch (error) {
      throw error;
    }
  }

  public static async createUser(user: UserRequest) {
    try {
      const newUser = await UserDao.createUser(user);
      const result = {
        id: newUser._id.toString(),
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        role: newUser.role,
      };
      return result;
    } catch (error) {
      throw error;
    }
  }

  public static async findAllUsers(): Promise<UserResponse[]> {
    try {
      const users = await UserDao.findAllUsers();
      const result = users.map((user) => {
        return {
          id: user._id.toString(),
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
        };
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  public static async findUsersByRole(role: string) {
    try {
      const users = await UserDao.findUsersByRole(role);
      const result = users.map((user) => {
        return {
          id: user._id.toString(),
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
        };
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
