export const usernameValidation = (value) => {
  if (value.length < 5 || value.length > 25) {
    return 'red';
  }

  return 'green';
};

export const passwordValidation = (value) => {
  const pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&*])[a-zA-Z\d!#$%&*]{8,12}/;

  if (!pattern.test(value)) {
    return 'red';
  }

  return 'green';
};

export const passwordConfirmationValidation = (passwords) => {
  if (passwords[0] !== passwords[1]) {
    return 'red';
  }

  return 'green';
};

export const emailValidation = (value) => {
  const pattern = /^[a-zA-Z0-9.]+@[a-z]+(.com)$/;

  if (!pattern.test(value)) {
    return 'red';
  }

  return 'green';
};

export const validationObject = {
  username: (value) => usernameValidation(value),
  email: (value) => emailValidation(value),
  password: (value) => passwordValidation(value),
  passwordConfirmation: (value) => passwordConfirmationValidation(value),
};
