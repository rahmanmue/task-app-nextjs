import Joi from "joi";
import { RequestLogin } from "@/types/login";
import { RequestRegister } from "@/types/register";
import validateSchema from "../validateSchema";

const PostRegisterSchema = Joi.object({
  username: Joi.string().required(),
  fullname: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().valid("LEAD", "TEAM").default("TEAM"),
});

const PostLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const AuthenticationValidator = {
  validatePostRegisterPayload: (payload: RequestRegister) => {
    validateSchema(PostRegisterSchema, payload);
  },

  validatePostLoginPayload: (payload: RequestLogin) => {
    validateSchema(PostLoginSchema, payload);
  },
};

export default AuthenticationValidator;
