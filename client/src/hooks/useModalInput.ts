import { ChangeEvent, useState } from 'react';
import { validate } from '@utils/validator';

const useModalInput = (
  validators: Array<(value: number | string | undefined) => string>,
  defaultValue?: number | string,
): {
  value: number | string | undefined;
  errorMessage: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} => {
  const [value, setValue] = useState<number | string | undefined>(defaultValue);
  const [errorMessage, setErrorMessage] = useState('');
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    setErrorMessage(validate(value, validators));
  };
  return { value, errorMessage, onChange };
};

export default useModalInput;
