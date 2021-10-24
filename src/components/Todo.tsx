import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Todo = ({children}: Props) => {
  return (
    <li>{children}</li>
  );
};
