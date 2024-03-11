import Joi from "joi";
import DTO from "../../models/meetings/dto";

export const meetingsValidator = Joi.object<DTO>({
  groupsId: Joi.number().positive().required(),
  description: Joi.string().min(4).lowercase().required(),
  meetingRoom: Joi.string().min(4).lowercase().required(),
  meetingStart: Joi.date().required().greater(Date.now()),
  meetingEnd: Joi.date().required().greater(Date.now()),
});


