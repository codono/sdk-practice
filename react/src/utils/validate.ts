const phoneNumber = new RegExp(/^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);

export const phoneNumberValidation = (value: string): boolean => {
  if (!phoneNumber.test(value)) {
    return false;
  } else {
    return true;
  }
};
