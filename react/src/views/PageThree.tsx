// material
import {
  Box,
  Container,
  Card,
  Typography,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Button
} from '@material-ui/core';
import styled, { css } from 'styled-components';

// components
import Page from '../components/Page';

const Section = styled(Box)`
  display: flex;
  flex-direction: row;
  max-width: 1080px;
  margin: 30px auto;
  font-weight: 500;
`;

const ContentsCard = styled(Card)`
  padding: 50px;
  height: 100%;
  width: 100%;
  ul {
    padding-left: 20px;
    font-size: 16px;
    margin: 25px 0;
  }
  ol {
    list-style: none;
    font-size: 16px;
  }
  li {
    font-size: 20px;
    line-height: 36px;
  }
`;

const QRTitle = styled(Typography)`
  font-size: 18px;
  line-height: 28px;
  font-weight: bold;
`;

const QRCard = styled(Card)`
  margin-left: 20px;
`;

const QRText = styled(Typography)`
  font-size: 18px;
  line-height: 24px;
  color: #4c5fef;
  font-weight: bold;
`;

const Title = styled.h2`
  font-size: 28px;
`;

export default function PageThree() {
  return (
    <Page title="aris, 내 손안의 학술대회">
      <Container maxWidth="xl">
        <Section>
          <Box width="100%">
            <ContentsCard>
              <Title>위치안내</Title>
              <ul>
                <li>
                  장소 : 인하대학교 60주년기념관(온/오프라인 병행) : 인천
                  미추홀구 인하로 100, 수인분당선 인하대역 4번 출구 981m
                </li>
                <li>https://zoom.us/koses_2021_spring</li>
              </ul>
              <Box
                component="img"
                alt="logo"
                src="/static/brand/koses-map.svg"
              />
            </ContentsCard>
          </Box>
        </Section>
        <Section>
          <Box width="100%">
            <ContentsCard>
              <Box display="flex">
                <Box marginRight="auto">
                  <QRTitle>
                    모바일에서도 한국감성과학회를 만날 수 있습니다.
                  </QRTitle>
                  <Box display="flex">
                    <Box
                      component="img"
                      alt="logo"
                      src="/static/brand/aris-logo-text.svg"
                    />
                    <QRTitle>,내 손안의 학술대회</QRTitle>
                  </Box>
                </Box>
                <Box display="flex">
                  <QRCard>
                    <Box display="flex">
                      <Box display="flex" flexDirection="column" padding="20px">
                        <QRText>구글플레이</QRText>
                        <QRText>다운로드</QRText>
                        <Box
                          component="img"
                          alt="logo"
                          src="/static/icons/ic-playstore.svg"
                          width="20px"
                          height="20px"
                          marginTop="10px"
                        />
                      </Box>
                      <Box
                        component="img"
                        alt="logo"
                        src="/static/icons/ic-qr-google.svg"
                      />
                    </Box>
                  </QRCard>
                  <QRCard>
                    <Box display="flex">
                      <Box display="flex" flexDirection="column" padding="20px">
                        <QRText>앱스토어</QRText>
                        <QRText>다운로드</QRText>
                        <Box
                          component="img"
                          alt="logo"
                          src="/static/icons/ic-appstore.svg"
                          width="20px"
                          height="20px"
                          marginTop="10px"
                        />
                      </Box>
                      <Box
                        component="img"
                        alt="logo"
                        src="/static/icons/ic-qr-apple.svg"
                      />
                    </Box>
                  </QRCard>
                </Box>
              </Box>
            </ContentsCard>
          </Box>
        </Section>
      </Container>
    </Page>
  );
}
