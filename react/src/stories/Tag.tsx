import React from 'react';
import './tag.css';

interface TagProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'round' | 'roundOutline';
  backgroundColor?: string;
  size?: 'lg' | 'md' | 'sm';
  button?: boolean;
  buttonFunc?: () => void;
  label: string;
  onClick?: () => void;
}

export const Tag = ({
  variant = 'primary',
  backgroundColor = '',
  label = 'tag',
  size = 'md',
  button = true,
  buttonFunc = () => {
    // buttonFunc here
  },
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={[
        'tag',
        `tag-${variant}`,
        variant === 'round' || variant === 'roundOutline'
          ? `tag-round-${size}`
          : `tag-${size}`
      ].join(' ')}
      style={{
        backgroundColor: variant === 'primary' ? backgroundColor : '',
        color: variant === 'outline' ? backgroundColor : '',
        borderColor: variant === 'outline' ? backgroundColor : ''
      }}
      {...props}
    >
      {label}
      {button && (variant === 'round' || variant === 'roundOutline') && (
        <button className="tag-button" onClick={buttonFunc}>
          <img
            src="/static/icons/ic_close.svg"
            className={`tag-icon-${size}`}
          />
        </button>
      )}
    </div>
  );
};
