import './dropdown.css';
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  TextField
} from '@material-ui/core';

interface DropdownProps {
  variant?: 'text' | 'filter' | 'select';
  list?: Array<any>;
  size?: 'sm' | 'lg';
  value?: number;
  defaultValue?: number;
  placeholder?: string;
  onChange?: () => void;
}

export const Dropdown = ({
  variant = 'select',
  list,
  size,
  value,
  defaultValue,
  placeholder,
  onChange,
  ...props
}: DropdownProps): JSX.Element => {
  return (
    <FormControl>
      <Select
        variant="outlined"
        className={['select', `select-${variant}`].join(' ')}
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          }
        }}
        value={value}
        defaultValue={defaultValue ? defaultValue : placeholder ? 0 : undefined}
        sx={{
          height: size === 'sm' ? '36px' : '48px',
          fontSize: size === 'sm' ? '14px' : '17px'
        }}
        onChange={onChange}
      >
        {placeholder && (
          <MenuItem value={0}>
            <div className={`select-${variant}-placeholder`}>{placeholder}</div>
          </MenuItem>
        )}
        {list?.map((el, idx) => (
          <MenuItem key={idx} value={idx + 1}>
            {el}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
