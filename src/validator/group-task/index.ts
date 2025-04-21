import Joi from "joi";
import validateSchema from "../validateSchema";
import { RequestGroupTask } from "@/types/group-task";

const PostGroupTaskSchema = Joi.object({
  name: Joi.string().required(),
  leadId: Joi.string().guid().required(),
});

const PutGroupTaskSchema = Joi.object({
  name: Joi.string().required(),
});

const ParamsGroupTaskSchema = Joi.object({
  id: Joi.string().guid().required(),
});

const GroupTaskValidator = {
  validatePostGroupTaskPayload: (payload: RequestGroupTask) => {
    validateSchema(PostGroupTaskSchema, payload);
  },

  validateParams: (id: string) => {
    validateSchema(ParamsGroupTaskSchema, { id });
  },

  validatePutGroupTaskPayload: (payload: RequestGroupTask) => {
    validateSchema(PutGroupTaskSchema, payload);
  },
};

export default GroupTaskValidator;
