import Joi from "joi";

/**
 * Validator for user details during registration
 * @validator
 */
export const ProductValidation: any = Joi.object({
  name: Joi.string().required(),
  descriptions: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
});

