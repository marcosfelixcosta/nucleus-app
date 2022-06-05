import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  console.log(err.inner);
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    if (error.path) {
    validationErrors[error.path] = error.message;
    }
  });
  return validationErrors;
}

