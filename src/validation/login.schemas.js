import * as Joi from 'joi';

export const schemas = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.base': 'L\'adresse e-mail est obligatoire',
      'string.email': 'L\'adresse e-mail n\'est pas au bon format',
      'string.empty': 'L\'adresse e-mail est obligatoire',
      'any.required': 'L\'adresse e-mail est obligatoire',
    }),
  password: Joi
    .string()
    .required()
    .messages({
      'string.base': 'Le mot de passe est obligatoire',
      'string.empty': 'Le mot de passe est obligatoire',
      'any.required': 'Le mot de passe est obligatoire',
    }),
});
