export const validate = <T>(value: T | undefined, validators: Array<(value: T | undefined) => string>): string => {
  if (value === undefined) return '';
  for (const validator of validators) if (validator(value) !== '') return validator(value);
  return '';
};
