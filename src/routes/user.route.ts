import { getUserById } from "@/controller/user.controller";
import { getUserByEmail } from "@/controller/user.controller";
import { createUser } from "@/controller/user.controller";
import { findAllUsers } from "@/controller/user.controller";
import { findUserByRole } from "@/controller/user.controller";
import { Router } from "express";

const router = Router();

router.get("/users:id", getUserById);
router.get("/users", getUserByEmail);
router.post("/users", createUser);
router.put("/users", findAllUsers);
router.post("/users/find", findUserByRole);

export default router;
