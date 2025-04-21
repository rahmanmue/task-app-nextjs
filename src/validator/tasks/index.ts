import Joi from "joi";
import validateSchema from "../validateSchema";
import { RequestTask } from "@/types/tasks";

const PostTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string()
    .valid("NOT_STARTED", "ON_PROGRESS", "DONE", "REJECT")
    .default("NOT_STARTED"),
  groupId: Joi.string().guid().required(),
  userTeamId: Joi.string().guid().required(),
});

const PutTeamTaskSchema = Joi.object({
  description: Joi.string(),
  status: Joi.string().valid("NOT_STARTED", "ON_PROGRESS", "DONE", "REJECT"),
});

const PutLeadTaskSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  status: Joi.string().valid("NOT_STARTED", "ON_PROGRESS", "DONE", "REJECT"),
  groupId: Joi.string().guid(),
  userTeamId: Joi.string().guid(),
});

const ParamsTaskSchema = Joi.object({
  id: Joi.string().guid().required(),
});

const ParamsGroupIdSchema = Joi.object({
  groupId: Joi.string().guid().required(),
});

const TaskValidator = {
  validatePostTaskPayload: (payload: RequestTask) => {
    validateSchema(PostTaskSchema, payload);
  },

  validateParams: (id: string) => {
    validateSchema(ParamsTaskSchema, { id });
  },

  validateParamsGroupId: (groupId: string) => {
    validateSchema(ParamsGroupIdSchema, { groupId });
  },

  validatePutLeadTaskPayload: (payload: RequestTask) => {
    validateSchema(PutLeadTaskSchema, payload);
  },

  validatePutTeamTaskPayload: (payload: RequestTask) => {
    validateSchema(PutTeamTaskSchema, payload);
  },
};

export default TaskValidator;
