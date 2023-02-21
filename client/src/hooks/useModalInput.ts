import { ChangeEvent, useState } from 'react';
import { validate } from '@utils/validator';

const useModalInput = (
  validators: Array<(value: number | string | undefined) => string>,
): {
  value: number | string | undefined;
  errorMessage: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} => {
  const [value, setValue] = useState<number | string>();
  const [errorMessage, setErrorMessage] = useState('');
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    setErrorMessage(validate(value, validators));
  };
  return { value, errorMessage, onChange };
};

export default useModalInput;
