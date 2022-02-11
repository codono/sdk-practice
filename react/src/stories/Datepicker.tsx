import { TextField } from '@material-ui/core';
import './datepicker.css';
import React from 'react';

interface DatepickerProps {
  variant?: 'filled' | 'outlined' | 'standard';
  label?: string;
}

export const Datepicker = ({
  variant = 'outlined',
  label = '',
  ...props
}: DatepickerProps): JSX.Element => {
  return (
    <TextField
      className="datepicker"
      variant={variant}
      label={label}
      type="date"
      size="small"
      InputProps={{
        sx: {
          fontSize: '13px'
        }
      }}
      InputLabelProps={{
        sx: {
          width: '80px',
          backgroundColor: 'white',
          '&.Mui-focused': {
            width: 'fit-content'
          }
        }
      }}
    />
  );
};
