import React, { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
export const PageLayout = (props: Props) => {
  const { children } = props;
  return (
    <div className="page-layout">
        {children}
    </div>
  );
};
