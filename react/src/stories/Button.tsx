import React from 'react';
import './button.css';

interface ButtonProps {
  icon?: 'left' | 'right' | 'none';
  iconSrc?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'text'
    | 'tertiary'
    | 'danger'
    | 'dash'
    | 'ghost';
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  width?: string;
  backgroundColor?: string;
  round?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  icon = 'none',
  iconSrc = '',
  variant = 'primary',
  disabled = false,
  size = 'md',
  width = 'fit-content',
  backgroundColor,
  round = false,
  label,
  ...props
}: ButtonProps): JSX.Element => {
  const disabledState = disabled ? 'disabled' : '';
  return (
    <button
      type="button"
      className={[
        'button',
        `button-${size}`,
        `button-${
          disabledState ? `${variant}-${disabledState}` : `${variant}`
        }`,
        round ? 'button-round' : ''
      ].join(' ')}
      style={{ width, backgroundColor }}
      {...props}
    >
      {icon === 'left' ? (
        <img
          src={iconSrc}
          className={`leftIcon-${size}`}
          alt="buttonLeftIcon"
        />
      ) : null}
      {label}
      {icon === 'right' ? (
        <img
          src={iconSrc}
          className={`rightIcon-${size}`}
          alt="buttonRightIcon"
        />
      ) : null}
    </button>
  );
};
