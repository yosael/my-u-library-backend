import { getCheckoutsByUserId } from "./../controller/checkout.controller";
import { getCheckoutById } from "@/controller/checkout.controller";
import { getAllCheckouts } from "@/controller/checkout.controller";
import { createCheckout } from "@/controller/checkout.controller";
import { returnBook } from "@/controller/checkout.controller";
import { verifyToken } from "@/controller/security.controller";
import { Router } from "express";

const router = Router();

router.get("/checkouts/:id", verifyToken, getCheckoutById);
router.get("/checkouts/user/:id", verifyToken, getCheckoutsByUserId);
router.get("/checkouts", verifyToken, getAllCheckouts);
router.post("/checkouts", verifyToken, createCheckout);
router.put("/checkouts/return/:id", verifyToken, returnBook);

export default router;
