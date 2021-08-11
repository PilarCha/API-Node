import { useState } from 'react';

export const useInput = initialValue => {
  const [value,setValue] = useState(initialValue);
// https://reactjs.org/docs/hooks-custom.html
  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};
