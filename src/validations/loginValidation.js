import joi from 'joi';

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&*])[a-zA-Z\d!#$%&*]{8, 12}/),
});

export default (value) => loginSchema.validate(value);
