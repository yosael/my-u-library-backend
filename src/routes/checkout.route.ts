import { getCheckoutById } from "@/controller/checkout.controller";
import { getAllCheckouts } from "@/controller/checkout.controller";
import { createCheckout } from "@/controller/checkout.controller";
import { returnBook } from "@/controller/checkout.controller";
import { Router } from "express";

const router = Router();

router.get("/checkouts:id", getCheckoutById);
router.get("/checkouts", getAllCheckouts);
router.post("/checkouts", createCheckout);
router.put("/checkouts/return/:id", returnBook);

export default router;
