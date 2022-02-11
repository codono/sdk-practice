import { Box, Button, Container, Typography } from '@material-ui/core';
import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router';
import { isAndroid, isIOS } from 'react-device-detect';
import styled from 'styled-components';
import { Card } from '../stories/Card';
import sendiaHelpImg from '../assets/image/sendiaHelpImg.png';
import sendiaLogo from '../assets/icons/ic_sendiaLogo.svg';

const StyledContainer = styled(Container)`
  padding-top: 64px;
  height: 100%;
`;

const HeaderText = styled(Typography)`
  width: 100%;
  padding: 24px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.4000000059604645px;
  text-align: center;
`;

const CardBody = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px;
`;

const CardCaptionText = styled(Typography)`
  width: 100%;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  color: #a7a7a7;
`;

const SendiaOfficer = styled(Box)`
  display: flex;
  width: 100%;
  margin: 16px 0px;
`;

const SendiaOfficerImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
  overflow: hidden;
  background-color: #979797;
`;

const SendiaOfficerTextBox = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const SendiaOfficerName = styled(Typography)`
  font-size: 12px;
  font-weight: 700;
`;

const SendiaOfficerContent = styled(Typography)`
  font-size: 15px;
  font-weight: 400;
`;

const HelpText = styled(Typography)`
  margin-top: 32px;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
`;

const SendiaHome = (): ReactElement => {
  const history = useHistory();

  const clickTutorialImg = () => {
    history.push('/');
  };

  return (
    <>
      <StyledContainer>
        <HeaderText>제품 사용의 불편함을 비디오로 찍어 주세요!</HeaderText>
        <Card
          content={
            <CardBody>
              <CardCaptionText>비디오 문의하기</CardCaptionText>
              <SendiaOfficer>
                <SendiaOfficerImg src="" />
                <SendiaOfficerTextBox>
                  <SendiaOfficerName>김센디</SendiaOfficerName>
                  <SendiaOfficerContent>
                    안녕하세요. 편하게 문의사항을 남겨주시면 최대한 빠르게
                    답변드리겠습니다.
                  </SendiaOfficerContent>
                </SendiaOfficerTextBox>
              </SendiaOfficer>
            </CardBody>
          }
          width="100%"
        />
        <HelpText>
          센디아가 처음이시라면 아래 튜토리얼을 참고해 보세요!
        </HelpText>
        <Box onClick={clickTutorialImg}>
          <img src={sendiaHelpImg} />
        </Box>
      </StyledContainer>
    </>
  );
};

export default SendiaHome;
