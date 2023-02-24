import { ChangeEvent, useEffect, useState } from 'react';
import { validate } from '@utils/validator';

const useModalInput = (
  validators: Array<(value: string | undefined) => string>,
  defaultValue?: string,
): {
  value: string | undefined;
  errorMessage: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} => {
  const [value, setValue] = useState<string | undefined>(defaultValue);
  const [errorMessage, setErrorMessage] = useState(validate(defaultValue, validators));

  useEffect(() => {
    setErrorMessage(() => validate(value, validators));
  }, [value]);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(() => event.target.value);
  };
  return { value, errorMessage, onChange };
};

export default useModalInput;
