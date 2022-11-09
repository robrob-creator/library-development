/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */

import * as React from 'react';

export interface RadioProps {
  label?: string;
  checked?: boolean;
}

export const RadioButton = ({ label, checked = false }: RadioProps) => {
  const [isChecked, setIsChecked] = React.useState(Boolean);

  React.useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <div className="form-check">
      <input
        id="default-radio-2"
        type="radio"
        value=""
        name="default-radio"
        checked={isChecked}
        onChange={() => setIsChecked(prev => !prev)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      {label && (
        <label
          className="form-check-label text-base inline-block text-gray-800"
          htmlFor="flexCheckDefault"
        >
          {label}
        </label>
      )}
    </div>
  );
};
