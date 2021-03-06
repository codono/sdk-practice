import {
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogContent,
  FormControlLabel,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { sendMessage } from '../../apis';
import { device } from '../../theme';
import { phoneNumberValidation } from '../../utils/validate';

const StyledIconButton = styled(IconButton)`
  position: absolute !important;
  top: 8px;
  right: 10px;
`;

const StyledDialogContent = styled(DialogContent)`
  padding: 0 !important;
  & > img {
    width: 100%;
  }
`;

const StyledContainer = styled(Container)`
  min-height: 230px;
  margin: 30px 0;
  padding-left: 33px;
  padding-right: 33px;
  @media ${device.sMobile} {
    padding-left: 16px;
    padding-right: 16px;
  }
  h2,
  p {
    margin-bottom: 10px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTextField = styled(TextField)`
  width: 70%;
  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #4c5fef;
  }
`;

const StyledButton = styled(Button)<{ valid: boolean }>`
  width: 25%;
  background: red;
  color: white;
  padding: 4px 8px;
  background: ${({ valid }) => (valid ? '#4C5FEF' : '#323c47')};
  &:hover {
    background: ${({ valid }) => (valid ? '#4C5FEF' : '#323c47')};
  }
`;

const CheckboxLabel = styled(FormControlLabel)`
  justify-content: flex-start;
  .Mui-checked {
    color: #4c5fef;
  }
`;

const StyledTable = styled(Table)`
  font-size: 11px;
`;

const StyledTableCell = styled(TableCell)`
  padding: 0 !important;
  border: solid 1px #000;
  box-shadow: none !important;
`;

const DialogSendDownloadUrl = ({
  isOpen,
  handleClose
}: {
  isOpen: boolean | false;
  handleClose: any;
}) => {
  const [isValid, setIsValid] = useState(false);
  const [phone, setPhone] = useState<string>('');
  const [isChecked, setIsChecked] = useState(false);
  const [isShowTerms, setIsShowTerms] = useState(false);

  useEffect(() => {
    setIsValid(false);
    setPhone('');
    setIsChecked(false);
    setIsShowTerms(false);
  }, [isOpen]);

  const onChange = (e: any) => {
    let { value } = e.target;
    value = value.split('-').join('');

    if (isNaN(value)) {
      console.log('is not number');
    } else {
      setPhone(value);
      setIsValid(false);

      if (value.length == 10 || value.length == 11) {
        setIsValid(true);
      }
    }
  };

  const onChangeCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const showTerms = () => {
    setIsShowTerms(!isShowTerms);
  };

  const onClickSendMessage = async () => {
    if (!phoneNumberValidation(phone)) {
      return alert('??????????????? ??????????????????');
    }

    if (!isChecked) {
      return alert('???????????? ??????/????????? ??????????????????.');
    }
    const result = await sendMessage(phone);

    if (!result.error) {
      handleClose();
      return alert('????????? ????????? ?????????????????????.');
    } else if (result.error == 'exceedSmsCount') {
      return alert(
        '?????? ?????? 3?????? ???????????? ??????????????????. ?????? ?????? ??????????????????.'
      );
    } else {
      return alert('????????? ????????? ??????????????????.');
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="xs" fullWidth>
      <StyledIconButton aria-label="close" onClick={handleClose}>
        <CloseIcon />
      </StyledIconButton>
      <StyledDialogContent>
        <StyledContainer>
          <h2>?????????, ??? ????????? ????????????</h2>
          <p>??? ???????????? ????????? ???????????? ??????????????????.</p>
          <FormContainer>
            <StyledTextField
              placeholder="???????????? ?????? ??????????????????(11??????) ??????(????????? ??????)"
              type="text"
              name="phone"
              onChange={onChange}
            />
            <StyledButton valid={isValid} onClick={onClickSendMessage}>
              ????????????
            </StyledButton>
          </FormContainer>
          <CheckboxLabel
            control={
              <Checkbox
                onChange={onChangeCheckbox}
                checked={isChecked}
                name="requiredAgreement"
              />
            }
            label="???????????? ??????/????????? ???????????????."
          />
          <span
            onClick={showTerms}
            style={{
              fontSize: '12px',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            ??????{isShowTerms ? '??????' : '??????'}
          </span>
          {isShowTerms && (
            <StyledTable>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">??????</StyledTableCell>
                  <StyledTableCell align="center">????????????</StyledTableCell>
                  <StyledTableCell align="center">????????????</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <StyledTableCell align="center">??????????????????</StyledTableCell>
                  <StyledTableCell align="center">
                    SMS?????? ??? ??????????????????
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    ???????????? 1??? ??? ??????
                  </StyledTableCell>
                </TableRow>
              </TableBody>
            </StyledTable>
          )}
        </StyledContainer>
      </StyledDialogContent>
    </Dialog>
  );
};

export default DialogSendDownloadUrl;
