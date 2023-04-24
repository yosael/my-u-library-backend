import { verifyToken } from "@/controller/security.controller";
import { getUserById, login, updateUser } from "@/controller/user.controller";
import { createUser } from "@/controller/user.controller";
import { findAllUsers } from "@/controller/user.controller";
import { findUserByRole } from "@/controller/user.controller";
import { Router } from "express";

const router = Router();

router.get("/users/:id", verifyToken, getUserById);
router.get("/users", verifyToken, findAllUsers);
router.post("/users", verifyToken, createUser);
router.put("/users/:id", verifyToken, updateUser);
router.get("/users/find/:role", verifyToken, findUserByRole);
router.post("/auth/login", login);

export default router;
