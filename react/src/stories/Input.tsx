import { TextField } from '@material-ui/core';
import React from 'react';

interface InputProps {
  variant?: 'filled' | 'outlined' | 'standard';
  size?: 'lg' | 'md' | 'sm';
  label?: string;
  placeholder?: string;
}

export const Input = ({
  variant = 'outlined',
  size = 'lg',
  label = '',
  placeholder = '',
  ...props
}: InputProps): JSX.Element => {
  const mdProps =
    size === 'md'
      ? {
          inputProps: {
            sx: {
              padding: '13px 16px 12px 16px'
            }
          },
          InputLabelProps: {
            sx: {
              lineHeight: '15px'
            }
          }
        }
      : {};

  return (
    <TextField
      variant={variant}
      label={label}
      size={size === 'lg' ? 'medium' : size === 'sm' ? 'small' : undefined}
      placeholder={placeholder}
      {...mdProps}
    />
  );
};
