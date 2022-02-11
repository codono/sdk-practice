import './tooltip.css';
import React from 'react';
import { Tooltip as MuiTooltip } from '@material-ui/core';

interface TooltipProps {
  placement?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'left-start'
    | 'left'
    | 'left-end';
  target?: any;
  body?: any;
}

export const Tooltip = ({
  placement = 'right',
  target,
  body = 'tootip',
  ...props
}: TooltipProps): JSX.Element => {
  return (
    <MuiTooltip title={body} placement={placement} arrow>
      {target || <img src="/static/icons/ic_tooltip.svg" />}
    </MuiTooltip>
  );
};
