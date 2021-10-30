import React, { useState } from 'react';

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(checked => !checked);
  };

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