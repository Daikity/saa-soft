import type { Validation } from "./types";

const countMaxSymbols = (str: string, maxSymbols: number): boolean => {
  return str.length <= maxSymbols;
}

export const validateTextField = (textField: string, useSymbols?: boolean): Validation => {
  if (!countMaxSymbols(textField, 100)) {
    return { message: "Text field must be between 4 and 100 characters long", isValid: false };
  }
  let textFieldRegex = /^[a-zA-Z0-9]{3,1000}$/;
  if (useSymbols) {
    textFieldRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{3,1000}$/;
  }

  if(!textFieldRegex.test(textField)) {
    return { message: `Text field must contain only letters and numbers ${useSymbols ? ' and symbols' : ''}`, isValid: false };
  }

  return { message: null, isValid: true };
}

export const validateMark = (mark: string): Validation => {
  const regexStr = /^[a-zA-Z ;]{0,1000}$/;
  if(!regexStr.test(mark)) {
    return { message: "Mark must contain only letters and semicolon", isValid: false };
  }
  return { message: null, isValid: true };
}
