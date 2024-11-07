import { Suspense } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';

export const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};