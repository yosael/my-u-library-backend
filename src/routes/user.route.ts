import { getUserById, updateUser } from "@/controller/user.controller";
import { getUserByEmail } from "@/controller/user.controller";
import { createUser } from "@/controller/user.controller";
import { findAllUsers } from "@/controller/user.controller";
import { findUserByRole } from "@/controller/user.controller";
import { Router } from "express";

const router = Router();

router.get("/users/:id", getUserById);
router.get("/users", findAllUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.get("/users/find/:role", findUserByRole);

export default router;
