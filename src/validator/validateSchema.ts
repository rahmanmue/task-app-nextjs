import Joi from "joi";
import { InvariantError } from "@/exceptions/InvariantError";

const validateSchema = (schema: Joi.ObjectSchema, payload: unknown) => {
  const { error } = schema.validate(payload);
  if (error) {
    throw new InvariantError(error.message.replace(/['"]/g, ""));
  }
};

export default validateSchema;
