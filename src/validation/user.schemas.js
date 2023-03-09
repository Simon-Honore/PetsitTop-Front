import * as Joi from 'joi';
// email
// password
// confirmPassword
// first_name
// last_name
// postal_code
// city
// availability
// availability_details
// role_petowner
// role_petsitter
export const schemas = Joi.object({
  first_name: Joi
    .string()
    .pattern(/^[a-zA-ZÀ-ÿ '-]{2,}$/)
    .required()
    .messages({
      'string.base': 'Le prénom est obligatoire',
      'string.empty': 'Le prénom est obligatoire',
      'any.required': 'Le prénom est obligatoire',
      'string.pattern.base': 'Le prénom doit contenir au moins 2 caractères',
    }),
  last_name: Joi
    .string()
    .pattern(/^[a-zA-ZÀ-ÿ '-]{2,}$/)
    .required()
    .messages({
      'string.base': 'Le nom est obligatoire',
      'string.empty': 'Le nom est obligatoire',
      'any.required': 'Le nom est obligatoire',
      'string.pattern.base': 'Le nom doit contenir au moins 2 caractères',
    }),
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
    .min(8)
    // MATCHES : minimum 8 characters,
    // at least 1 uppercase letter, 1 lowercase letter, 1 number
    // and 1 special character (@$!%*?&) :
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .required()
    .messages({
      'string.base': 'Le mot de passe est obligatoire',
      'string.empty': 'Le mot de passe est obligatoire',
      'string.min': 'Le mot de passe doit contenir au moins 8 caractères',
      'string.pattern.base': 'Le mot de passe doit contenir au moins 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial (@$!%*?&)',
      'any.required': 'Le mot de passe est obligatoire',
    }),
  confirmPassword: Joi
    .string()
    .required()
    // "confirmPassword" must match "password"
    .valid(Joi.ref('password'))
    .messages({
      'string.base': 'La confirmation du mot de passe est obligatoire',
      'string.empty': 'La confirmation du mot de passe est obligatoire',
      'any.only': 'Les mots de passe ne correspondent pas',
      'any.required': 'La confirmation du mot de passe est obligatoire',
    }),
  postal_code: Joi
    .string()
    // regex from our SQl DOMAIN "postal_code_fr" in DB
    .pattern(/(^0[1-9]\d{3}$)|(^1\d{4}$)|(^20[012]\d{2}$|^20600$|^20620$)|(^2[1-9]\d{3}$)|(^[3-8]\d{4}$)|(^9[0-5]\d{3}$)/)
    .required()
    .messages({
      'string.base': 'Le code postal est obligatoire',
      'string.empty': 'Le code postal est obligatoire',
      'string.pattern.base': 'Le code postal n\'est pas au bon format',
      'any.required': 'Le code postal est obligatoire',
    }),
  city: Joi
    .string()
    .min(2)
    .required()
    .messages({
      'string.base': 'La ville est obligatoire',
      'string.empty': 'La ville est obligatoire',
      'string.min': 'La ville doit contenir au moins 2 caractères',
      'any.required': 'La ville est obligatoire',
    }),
  availability: Joi
    .boolean()
    .required(),
  availability_details: Joi
    .string()
    .max(300)
    .allow('')
    .messages({
      'string.max': 'La description doit contenir au maximum 300 caractères',
    }),
  role_petsitter: Joi
    .boolean()
    .optional()
    .messages({
      'boolean.base': 'Vous devez choisir au moins un rôle',
      'any.required': 'Vous devez choisir au moins un rôle',
    }),
  role_petowner: Joi
    .boolean()
    .optional()
    .messages({
      'boolean.base': 'Vous devez choisir au moins un rôle',
      'any.required': 'Vous devez choisir au moins un rôle',
    }),
  // pet_type: Joi
  //   .array()
  //   .items(Joi.string()),
});

//.or('role_petsitter', 'role_petowner').valid(true)
