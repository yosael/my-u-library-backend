import { login } from "./../controller/user.controller";
import { UserRequest } from "@/dto/models.dto";
import userModel from "@/models/user.model";
import { compare, ncrypt } from "@/utils/cryptUtil";
import mongoose from "mongoose";

export default class UserDao {
  public static async getUserById(id: string) {
    try {
      const user = await userModel.findById({ _id: id });
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
      const hashedPassword = await ncrypt(user.password);
      const newUser = await userModel.create({
        ...user,
        password: hashedPassword,
      });
      return newUser.toObject();
    } catch (error) {
      throw error;
    }
  }

  public static async updateUser(id: string, user: UserRequest) {
    try {
      const updatedUser = await userModel.findByIdAndUpdate(
        id,
        {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
        },
        {
          new: true,
          runValidators: true,
        }
      );
      return updatedUser?.toObject();
    } catch (error) {
      throw error;
    }
  }

  public static async findAllUsers() {
    try {
      const users = await userModel.find().sort({ createdAt: -1 });
      return users.map((user) => user.toObject());
    } catch (error) {
      throw error;
    }
  }

  public static async findUsersByRole(role: string) {
    try {
      const users = await userModel.find({ role });
      return users.map((user) => user.toObject());
    } catch (error) {
      throw error;
    }
  }

  public static async login(email: string, password: string) {
    try {
      const user = await userModel.findOne({ email });

      if (!user) throw new Error("Incorrect email or password");
      const isMatch = await compare(password, user.password);
      if (!isMatch) throw new Error("Incorrect email or password");

      return user.toObject();
    } catch (error) {
      throw error;
    }
  }
}
