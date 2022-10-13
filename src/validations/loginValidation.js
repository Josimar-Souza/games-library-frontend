export const passwordValidation = (value) => {
  const pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&*])[a-zA-Z\d!#$%&*]{8,12}/;

  return pattern.test(value);
};

export const emailValidation = (value) => {
  const pattern = /^[a-zA-Z0-9.]+@[a-z]+(.com)$/;

  return pattern.test(value);
};
