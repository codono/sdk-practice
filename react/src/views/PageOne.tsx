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
import KosesPoster from '../components/KosesPoster';

const Section = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1080px;
  margin: 30px auto;
  font-weight: 500;
`;

const IntroBox = styled(Box)`
  margin-right: 30px;
`;

const PosterCard = styled(Card)`
  width: 344px;
`;

const NormalBox = styled(Box)<{ type: string }>`
  width: 50%;
  ${({ type }) => {
    if (type === 'left') {
      return css`
        margin-right: 30px;
      `;
    }
    return css`
      margin-right: 0px;
    `;
  }}
`;

const ContentsCard = styled(Card)`
  padding: 50px;
  height: 100%;
  ul {
    list-style: none;
    padding-left: 20px;
    font-size: 16px;
  }
  ol {
    list-style: none;
    font-size: 16px;
  }
  li {
    line-height: 34px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  color: #9f303d;
  margin-bottom: 30px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const StyledTable = styled(Table)`
  margin-top: 35px;
  margin-bottom: 25px;
`;

const StyledTableCell = styled(TableCell)<{ type?: string }>`
  border: 1px solid #9f303d;
  padding-left: 16px !important;
  padding-right: 16px !important;
  padding-top: 0;
  padding-bottom: 0;
  height: 36px;
  line-height: 36px;
  text-align: center;
  &:first-child {
    border-left: none;
  }
  &:last-child {
    border-right: none;
  }
  ${({ type }) => {
    if (type === 'background-top') {
      return css`
        font-size: 14px;
        font-weight: bold;
        background-color: rgba(159, 48, 61, 0.08);
        height: 32px;
        line-height: 32px;
      `;
    }
    if (type === 'background-left') {
      return css`
        font-size: 14px;
        font-weight: bold;
        background-color: rgba(159, 48, 61, 0.08);
        text-align: left;
        color: #686868;
      `;
    }
    if (type === 'black') {
      return css`
        font-size: 18px;
        font-weight: bold;
        text-align: center;
      `;
    }
    return css`
      color: #686868;
    `;
  }}
`;

const InfoMessegeList = styled.ul`
  list-style: unset !important;
  margin-left: 25px;
`;

const InfoMessege = styled.li`
  margin-bottom: 64px;
  font-size: 20px;
  font-weight: 500;
`;

const GoToPreregistration = styled(Button)`
  margin-left: auto;
`;

export default function PageOne() {
  return (
    <Page title="aris, ??? ????????? ????????????">
      <Container maxWidth="xl">
        <Section>
          <IntroBox>
            <ContentsCard>
              <Title>?????????</Title>
              <Typography fontSize="18px" marginTop="30px" lineHeight="36px">
                2021??? ????????????????????? ????????????????????? ???????????? ?????????
                ????????????????????? ????????? 5 ??? 21 ????????? 22 ????????? ????????? ???????????????
                60????????????????????? ???????????????. COVID-19 ??????????????? ????????? ????????????
                ?????? ??????????????? Untact(?????????????????????)??? ?????? Ontact(????????? ??????)
                ????????? ???????????? ????????????. ????????? ????????? ???????????? ???????????????
                ????????? ????????? ?????? ???????????? ????????? ????????????, ????????? ????????????
                ?????? ????????? ??? ?????? ???????????? ?????? ??????????????? ?????????????????????.
                ????????? ?????? ??????????????? ????????????????????? ?????? ???????????? ????????????
                ????????? ????????? ?????? ??????????????????.
              </Typography>
              <Typography fontSize="12px" marginTop="45px" textAlign="right">
                ?????????????????? ??????????????? <Bold>?????????</Bold>
              </Typography>
              <Typography fontSize="12px" textAlign="right">
                ????????????????????? ?????? <Bold>?????????</Bold>
              </Typography>
            </ContentsCard>
          </IntroBox>
          <Box display="flex" flexDirection="column">
            <PosterCard>
              <KosesPoster />
            </PosterCard>
          </Box>
        </Section>
        <Section>
          <NormalBox type="left">
            <ContentsCard
              onClick={() => {
                window.location.href =
                  'http://www.koses.or.kr/html/sub03_01.asp';
              }}
            >
              <Title>????????????</Title>
              <SubTitle>?????? ?????? ??????(??????, ?????????)</SubTitle>
              <ol>
                <li>
                  1. ?????? ??????
                  <ul>
                    <li>a. ?????? ?????? : 4/10(???)</li>
                    <li>b. 2??? ?????? ?????? : 4/24(???)</li>
                  </ul>
                </li>
                <li>2. ?????? ?????? : ?????? ?????? 15???, ?????? ?????? 5???</li>
              </ol>
            </ContentsCard>
          </NormalBox>
          <NormalBox type="right">
            <ContentsCard
              onClick={() => {
                window.location.href =
                  'http://www.koses.or.kr/html/sub03_01.asp';
              }}
            >
              <Title>????????????</Title>
              <SubTitle>????????? ?????? ??????(?????????)</SubTitle>
              <ol>
                <li>
                  1. ????????? ?????? : ??????(80*120) 1???, PDF ?????? ????????? ??????
                  <ul>
                    <li>a. ????????? : gamsung@gmail.com</li>
                  </ul>
                </li>
                <li>
                  2. ?????? ??????
                  <ul>
                    <li>a. ?????? ?????? : 4/10(???)</li>
                    <li>b. 2??? ?????? ?????? : 4/24(???)</li>
                    <li>c. ????????? ?????? : 5/14(???)</li>
                  </ul>
                </li>
              </ol>
            </ContentsCard>
          </NormalBox>
        </Section>
        <Section>
          <NormalBox type="left">
            <ContentsCard
              onClick={() => {
                window.location.href =
                  'http://www.koses.or.kr/html/sub03_01.asp';
              }}
              style={{ cursor: 'pointer' }}
            >
              <Title>????????????</Title>
              <SubTitle>????????? ????????? ???????????? ?????? ??????</SubTitle>
              <ol>
                <li>
                  1. ?????? ?????? : ???????????? ??????(???)?????? ??????(??????)????????? 2??? ??????
                  ?????????
                </li>
                <li>2. ?????? ?????? : 10???</li>
                <li>
                  3. ?????? ?????? : ?????? ??????(??????)/?????? ??????(??????)
                  <ul>
                    <li>a. ?????? ????????? ??????(??????) : gamsung@gmail.com</li>
                  </ul>
                </li>
                <li>
                  4. ?????? ??????
                  <ul>
                    <li>a. ?????? ?????? : 4/30(???)</li>
                    <li>b. ??????????????? ?????? : 4/30(???)</li>
                  </ul>
                </li>
              </ol>
            </ContentsCard>
          </NormalBox>
          <NormalBox type="right">
            <ContentsCard>
              <Title>???????????? ??????</Title>
              <StyledTable>
                <TableBody>
                  <TableRow>
                    <StyledTableCell rowSpan={2} />
                    <StyledTableCell colSpan={2} type="background-top">
                      ~4/30(???) ??????
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} type="background-top">
                      5/1(???) ~ 5/21(???) ??????
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="black">??????</StyledTableCell>
                    <StyledTableCell type="black">?????????</StyledTableCell>
                    <StyledTableCell type="black">??????</StyledTableCell>
                    <StyledTableCell type="black">?????????</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background-left">
                      ?????? ??? ??????
                    </StyledTableCell>
                    <StyledTableCell>45,000</StyledTableCell>
                    <StyledTableCell>55,000</StyledTableCell>
                    <StyledTableCell>50,000</StyledTableCell>
                    <StyledTableCell>60,000</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background-left">
                      ????????????
                    </StyledTableCell>
                    <StyledTableCell>35,000</StyledTableCell>
                    <StyledTableCell>45,000</StyledTableCell>
                    <StyledTableCell>40,000</StyledTableCell>
                    <StyledTableCell>55,000</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background-left">
                      ?????????
                    </StyledTableCell>
                    <StyledTableCell />
                    <StyledTableCell>10,000</StyledTableCell>
                    <StyledTableCell />
                    <StyledTableCell>10,000</StyledTableCell>
                  </TableRow>
                </TableBody>
              </StyledTable>
              <InfoMessegeList>
                <InfoMessege>????????? ????????? ??????????????? ?????? ??????</InfoMessege>
              </InfoMessegeList>
              <Box display="flex" justifyContent="flex-end">
                <GoToPreregistration
                  variant="contained"
                  size="medium"
                  onClick={() => {
                    window.location.href =
                      'http://www.koses.or.kr/regist/write.asp';
                  }}
                >
                  ?????? ?????? ????????????
                </GoToPreregistration>
              </Box>
            </ContentsCard>
          </NormalBox>
        </Section>
      </Container>
    </Page>
  );
}
