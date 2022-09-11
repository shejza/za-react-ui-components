const useValidators = (value, validator) => {

  const validationError = validator(value);

  return {
    valid: !validationError,
    invalid: !!validationError,
    validationText: validationError,
  };
};

//
// All validators should return false if valid
//
const validators = {
  required: (value) => {
    if (!value) {
      return "This field is required.";
    }
    return null;
  },

  email: (value) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(value)) {
      return null;
    }
    return "Email address invalid.";
  },

  phone: (value) => {
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    if (phoneRegex.test(value)) {
      return null;
    }
    return "Phone number invalid.";
  },

};

export {
  useValidators,
  validators,
};
