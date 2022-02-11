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
      return alert('전화번호를 확인해주세요');
    }

    if (!isChecked) {
      return alert('개인정보 수집/이용에 동의해주세요.');
    }
    const result = await sendMessage(phone);

    if (!result.error) {
      handleClose();
      return alert('메시지 발송이 완료되었습니다.');
    } else if (result.error == 'exceedSmsCount') {
      return alert(
        '하루 최대 3번의 메시지를 전송했습니다. 내일 다시 시도해주세요.'
      );
    } else {
      return alert('메시지 발송을 실패했습니다.');
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="xs" fullWidth>
      <StyledIconButton aria-label="close" onClick={handleClose}>
        <CloseIcon />
      </StyledIconButton>
      <StyledDialogContent>
        <StyledContainer>
          <h2>아리스, 내 손안의 학술대회</h2>
          <p>앱 다운로드 주소를 메시지로 보내드립니다.</p>
          <FormContainer>
            <StyledTextField
              placeholder="메시지를 받을 휴대전화번호(11자리) 입력(하이픈 제외)"
              type="text"
              name="phone"
              onChange={onChange}
            />
            <StyledButton valid={isValid} onClick={onClickSendMessage}>
              주소받기
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
            label="개인정보 수집/이용에 동의합니다."
          />
          <span
            onClick={showTerms}
            style={{
              fontSize: '12px',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            내용{isShowTerms ? '접기' : '보기'}
          </span>
          {isShowTerms && (
            <StyledTable>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">항목</StyledTableCell>
                  <StyledTableCell align="center">수집목적</StyledTableCell>
                  <StyledTableCell align="center">보유기간</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <StyledTableCell align="center">휴대전화번호</StyledTableCell>
                  <StyledTableCell align="center">
                    SMS발송 및 부정이용방지
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    목적달성 1일 후 파기
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
