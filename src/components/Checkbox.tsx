import React, { useState } from 'react';

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(checked => !checked)}
      />
    </>
  );
};