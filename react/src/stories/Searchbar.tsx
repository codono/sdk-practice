import React from 'react';
import './searchbar.css';
import { OutlinedInput, InputAdornment } from '@material-ui/core';

interface SearchbarProps {
  variant?: 'admin' | 'default';
  onClick?: () => void;
}

export const Searchbar = ({
  variant = 'default',
  onClick,
  ...props
}: SearchbarProps): JSX.Element => {
  return (
    <>
      {variant === 'admin' ? (
        <OutlinedInput
          className="input-admin"
          placeholder="Search ..."
          startAdornment={
            <InputAdornment position="start">
              <button className="input-admin-icon" onClick={onClick}>
                <img src="/static/icons/ic_find.svg" />
              </button>
            </InputAdornment>
          }
        />
      ) : (
        <div className="input-container">
          <input
            className="input-default"
            placeholder="검색어를 입력해주세요"
          ></input>
          <button className="input-default-icon" onClick={onClick}>
            <img src="/static/icons/ic_find.svg" />
          </button>
        </div>
      )}
    </>
  );
};
