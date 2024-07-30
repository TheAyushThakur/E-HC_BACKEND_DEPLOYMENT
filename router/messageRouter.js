import express from "express";
import {getAllMessages, sendmessage} from "../controller/messageController.js";
import {isAdminAuthenticated} from "../middleWares/auth.js";
const router = express.Router();

router.post("/send", sendmessage);
router.get("/getall",isAdminAuthenticated, getAllMessages );

export default router;