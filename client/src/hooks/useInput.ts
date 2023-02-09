import { ChangeEvent, useEffect, useState } from 'react';

interface InputType {
  title: string;
  max?: number;
  min?: number;
  validationCheck?: Array<(title: string, target: string, max: number, min: number) => string>;
}

const useInput = ({ title, min = 1, max = 250, validationCheck = [] }: InputType): any[] => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const result = validationCheck
      .map((checkFunction) => checkFunction(title, value, min, max))
      .filter((errorMsg) => errorMsg !== '');

    setErrorMessage(result[0]);
  }, [value]);

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setValue(target.value);
  };

  return [value, setValue, errorMessage, handleOnChange];
};

export default useInput;
