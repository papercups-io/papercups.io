import {PropsWithChildren} from 'react';

export const H1 = ({
  children,
  className = '',
}: PropsWithChildren<{className?: string}>) => {
  return (
    <h1 className={`text-5xl font-semibold dark:text-white mb-4 ${className}`}>
      {children}
    </h1>
  );
};

export const H2 = ({
  children,
  className = '',
}: PropsWithChildren<{className?: string}>) => {
  return (
    <h2 className={`text-3xl font-bold dark:text-white mb-4 ${className}`}>
      {children}
    </h2>
  );
};

export const H3 = ({
  children,
  className = '',
}: PropsWithChildren<{className?: string}>) => {
  return (
    <h3 className={`text-2xl font-bold dark:text-white mb-4 ${className}`}>
      {children}
    </h3>
  );
};

export const H4 = ({
  children,
  className = '',
}: PropsWithChildren<{className?: string}>) => {
  return (
    <h3 className={`text-xl font-bold dark:text-white mb-4 ${className}`}>
      {children}
    </h3>
  );
};

export const P = ({
  children,
  className = '',
  style = {},
}: PropsWithChildren<{className?: string; style?: any}>) => {
  return (
    <p
      className={`text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-4 ${className}`}
      style={style}
    >
      {children}
    </p>
  );
};
