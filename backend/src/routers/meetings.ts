import { Router } from "express";
import validate from "../middlewares/input-validation";
import { meetingsValidator } from "../controllers/meetings/validator";
import { add, getByGroups } from "../controllers/meetings/controller";

const router = Router();

router.get("/:groupsId", getByGroups);
router.post("/", validate(meetingsValidator), add);

export default router;
