import { ChangeEvent, useEffect, useState } from 'react';

const INVALID = [null, undefined, ''];

const useInput = (required = false, regex = undefined): any[] => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (required && value === '') {
      setIsValid(false);
    }
    if (!required || value !== '') {
      setIsValid(true);
    }
  }, [value]);

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setValue(target.value);

    if (regex !== undefined && target.value.match(regex) === null) {
      setIsValid(false);
      return;
    }
    if (required && INVALID.includes(target.value)) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  };

  return [value, setValue, isValid, handleOnChange];
};
export default useInput;
