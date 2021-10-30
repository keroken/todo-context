import React, { useReducer } from 'react';

export const Checkbox = () => {
  const [checked, handleToggle] = useReducer(checked => !checked, false);

  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
      />
    </>
  );
};