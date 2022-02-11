import { Alert, Snackbar as MuiSnackbar } from '@material-ui/core';
import React from 'react';
import './snackbar.css';

interface SnackbarProps {
  isOpen: boolean;
  variant?: 'info' | 'success' | 'warning' | 'error' | 'smallMsg' | 'largeMsg';
  horizontal?: 'center' | 'left' | 'right';
  vertical?: 'bottom' | 'top';
  size?: 'sm' | 'lg';
  text?: string;
  buttonFunc?: () => void;
  button?: boolean;
  onClose?: () => void;
}

export const Snackbar = ({
  isOpen = true,
  variant = 'error',
  horizontal = 'center',
  vertical = 'top',
  size = 'sm',
  text = 'Snackbar',
  buttonFunc = () => {
    // buttonFunc here
  },
  button = true,
  ...props
}: SnackbarProps): JSX.Element => {
  return (
    <MuiSnackbar
      open={isOpen}
      anchorOrigin={{ horizontal: horizontal, vertical: vertical }}
      {...props}
    >
      {variant === 'smallMsg' || variant === 'largeMsg' ? (
        <div className={['messagebox', `messagebox-${variant}`].join(' ')}>
          {text}
          {button ? (
            <button className="messagebox-button" onClick={buttonFunc}>
              확인
            </button>
          ) : null}
        </div>
      ) : (
        <Alert
          iconMapping={{
            info: <img src="/static/icons/ic_info.svg" />,
            success: <img src="/static/icons/ic_success.svg" />,
            warning: <img src="/static/icons/ic_warning.svg" />,
            error: <img src="/static/icons/ic_error.svg" />
          }}
          severity={variant}
          className={`snackbar-${size}`}
        >
          <div className="alert-body">
            {text}
            {button ? (
              <button className="alert-close-button" onClick={buttonFunc}>
                <img src={`/static/icons/ic_${variant}Close.svg`} />
              </button>
            ) : null}
          </div>
        </Alert>
      )}
    </MuiSnackbar>
  );
};
