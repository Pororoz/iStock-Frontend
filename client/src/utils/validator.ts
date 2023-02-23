export const validate = (
  value: string | undefined,
  validators: Array<(value: string | undefined) => string>,
): string => {
  for (const validator of validators) if (validator(value) !== '') return validator(value);
  return '';
};

export const required = (value: string | undefined): string => {
  if (value === undefined || value === null || value === '') return '필수 항목 입니다.';
  return '';
};

export const lengthValidator = (min: number, max: number) => {
  return (target: string | undefined): string => {
    return target === undefined || target.length > max || target.length < min ? `${min}자 ~ ${max}자여야 합니다` : '';
  };
};
