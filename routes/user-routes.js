import express from 'express';
import { getAllUser } from '../controllers/user-controller';

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup",)
export default router;
