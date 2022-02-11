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
    <Page title="aris, 내 손안의 학술대회">
      <Container maxWidth="xl">
        <Section>
          <IntroBox>
            <ContentsCard>
              <Title>인사말</Title>
              <Typography fontSize="18px" marginTop="30px" lineHeight="36px">
                2021년 한국감성과학회 춘계학술대회가 ‘온택트 시대의
                감성터치’라는 주제로 5 월 21 일부터 22 일까지 양일간 인하대학교
                60주년기념관에서 개최됩니다. COVID-19 바이러스의 전세계 확산으로
                인해 우리사회는 Untact(비대면∙비접촉)를 넘어 Ontact(온라인 접촉)
                사회로 변화하고 있습니다. 시대적 흐름에 발맞추어 온라인으로
                다양한 분야에 계신 여러분의 감성을 터치하고, 학계와 산업계가
                서로 공유할 수 있는 내용으로 이번 학술대회를 준비하였습니다.
                모쪼록 건강 조심하시고 한국감성과학회 회원 여러분의 적극적인
                참여와 협조를 함께 부탁드립니다.
              </Typography>
              <Typography fontSize="12px" marginTop="45px" textAlign="right">
                춘계학술대회 조직위원장 <Bold>박미숙</Bold>
              </Typography>
              <Typography fontSize="12px" textAlign="right">
                한국감성과학회 회장 <Bold>나영주</Bold>
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
              <Title>발표신청</Title>
              <SubTitle>구두 발표 안내(대면, 비대면)</SubTitle>
              <ol>
                <li>
                  1. 신청 기한
                  <ul>
                    <li>a. 초록 접수 : 4/10(토)</li>
                    <li>b. 2차 접수 마감 : 4/24(토)</li>
                  </ul>
                </li>
                <li>2. 발표 시간 : 발표 시간 15분, 질의 응답 5분</li>
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
              <Title>발표신청</Title>
              <SubTitle>포스터 발표 안내(비대면)</SubTitle>
              <ol>
                <li>
                  1. 포스터 제출 : 전지(80*120) 1장, PDF 파일 이메일 제출
                  <ul>
                    <li>a. 이메일 : gamsung@gmail.com</li>
                  </ul>
                </li>
                <li>
                  2. 신청 기한
                  <ul>
                    <li>a. 초록 접수 : 4/10(토)</li>
                    <li>b. 2차 접수 마감 : 4/24(토)</li>
                    <li>c. 포스터 제출 : 5/14(금)</li>
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
              <Title>발표신청</Title>
              <SubTitle>캡스톤 디자인 콘테스트 참가 안내</SubTitle>
              <ol>
                <li>
                  1. 참가 대상 : 대한민국 대학(원)생의 재학(휴학)생으로 2인 이상
                  단체팀
                </li>
                <li>2. 발표 시간 : 10분</li>
                <li>
                  3. 신청 방법 : 초록 접수(팀별)/사전 등록(개인)
                  <ul>
                    <li>a. 참가 신청서 제출(팀별) : gamsung@gmail.com</li>
                  </ul>
                </li>
                <li>
                  4. 신청 기한
                  <ul>
                    <li>a. 초록 접수 : 4/30(금)</li>
                    <li>b. 참가신청서 제출 : 4/30(금)</li>
                  </ul>
                </li>
              </ol>
            </ContentsCard>
          </NormalBox>
          <NormalBox type="right">
            <ContentsCard>
              <Title>사전등록 안내</Title>
              <StyledTable>
                <TableBody>
                  <TableRow>
                    <StyledTableCell rowSpan={2} />
                    <StyledTableCell colSpan={2} type="background-top">
                      ~4/30(금) 등록
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} type="background-top">
                      5/1(토) ~ 5/21(금) 등록
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="black">회원</StyledTableCell>
                    <StyledTableCell type="black">비회원</StyledTableCell>
                    <StyledTableCell type="black">회원</StyledTableCell>
                    <StyledTableCell type="black">비회원</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background-left">
                      교수 및 일반
                    </StyledTableCell>
                    <StyledTableCell>45,000</StyledTableCell>
                    <StyledTableCell>55,000</StyledTableCell>
                    <StyledTableCell>50,000</StyledTableCell>
                    <StyledTableCell>60,000</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background-left">
                      대학원생
                    </StyledTableCell>
                    <StyledTableCell>35,000</StyledTableCell>
                    <StyledTableCell>45,000</StyledTableCell>
                    <StyledTableCell>40,000</StyledTableCell>
                    <StyledTableCell>55,000</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background-left">
                      학부생
                    </StyledTableCell>
                    <StyledTableCell />
                    <StyledTableCell>10,000</StyledTableCell>
                    <StyledTableCell />
                    <StyledTableCell>10,000</StyledTableCell>
                  </TableRow>
                </TableBody>
              </StyledTable>
              <InfoMessegeList>
                <InfoMessege>결제시 인터넷 익스플로러 사용 권장</InfoMessege>
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
                  사전 등록 바로가기
                </GoToPreregistration>
              </Box>
            </ContentsCard>
          </NormalBox>
        </Section>
      </Container>
    </Page>
  );
}
