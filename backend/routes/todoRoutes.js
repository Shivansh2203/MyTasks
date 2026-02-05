import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
} from "../controllers/todoController.js";

const router = express.Router();

router.use(authMiddleware); // protect all routes

router.post("/", createTodo);
router.get("/", getTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;