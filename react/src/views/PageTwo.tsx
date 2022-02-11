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
    list-style: none;
    padding-left: 20px;
    font-size: 16px;
  }
  ol {
    list-style: none;
    font-size: 16px;
  }
  li {
    line-height: 36px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
`;

const TitleGuide = styled(Typography)`
  margin-left: 20px;
  margin-bottom: 5px;
`;

const PeopleBox = styled(Box)`
  width: 100%;
`;

const PeopleList = styled(Box)`
  display: flex;
  margin-top: 40px;
`;

const People = styled(Box)`
  margin-right: 64px;
  &:last-child {
    margin-right: 0px;
  }
`;

const Name = styled(Typography)`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
`;

const Description = styled(Typography)`
  text-align: center;
  font-size: 14px;
  color: #222b34;
`;

const StyledTable = styled(Table)`
  margin-top: 35px;
  margin-bottom: 25px;
`;

const StyledTableCell = styled(TableCell)<{ type?: string }>`
  border: 1px solid #9f303d;
  align-items: flex-start;
  justify-content: flex-start;
  &:first-child {
    border-left: none;
  }
  &:last-child {
    border-right: none;
  }
  ${({ type }) => {
    if (type === 'background') {
      return css`
        background-color: rgba(159, 48, 61, 0.08);
        color: #686868;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
      `;
    }
    if (type === 'bold') {
      return css`
        font-weight: bold;
      `;
    }
    if (type === 'title') {
      return css`
        font-weight: bold;
        background-color: #9f303d;
        color: #fff;
        text-align: center;
        padding-top: 0;
        padding-bottom: 0;
        height: 36px;
        line-height: 36px;
        font-size: 18px;
      `;
    }
    return css`
      color: #686868;
    `;
  }}
`;

const CellText = styled(Typography)<{ type?: string }>`
  ${({ type }) => {
    if (type === 'black-sm') {
      return css`
        font-size: 16px;
        font-weight: bold;
        color: #212b36;
      `;
    }
    if (type === 'black-md') {
      return css`
        font-size: 18px;
        font-weight: bold;
        color: #212b36;
      `;
    }
    if (type === 'black-lg') {
      return css`
        font-size: 20px;
        font-weight: bold;
        color: #212b36;
      `;
    }
    if (type === 'black-xl') {
      return css`
        font-size: 24px;
        font-weight: bold;
        color: #212b36;
      `;
    }
    if (type === 'red') {
      return css`
        font-size: 14px;
        font-weight: bold;
        color: #9f303d;
      `;
    }
    if (type === 'red-lg') {
      return css`
        font-size: 18px;
        font-weight: bold;
        color: #9f303d;
      `;
    }
    if (type === 'grey') {
      return css`
        margin-top: 26px;
        font-size: 12px;
        font-weight: 400;
        color: #333f4b;
      `;
    }
    return css``;
  }}
`;

export default function PageTwo() {
  return (
    <Page title="aris, 내 손안의 학술대회">
      <Container maxWidth="xl">
        <Section>
          <PeopleBox>
            <ContentsCard>
              <Title>주요연사</Title>
              <PeopleList>
                <People>
                  <Box
                    component="img"
                    alt="logo"
                    src="/static/brand/koses-professor-1.png"
                  />
                  <Name>김경일 교수</Name>
                  <Description>아주대학교 심리학과</Description>
                </People>
                <People>
                  <Box
                    component="img"
                    alt="logo"
                    src="/static/brand/koses-professor-2.png"
                  />
                  <Name>김원식 박사</Name>
                  <Description>전 한국표준과학연구원</Description>
                </People>
                <People>
                  <Box
                    component="img"
                    alt="logo"
                    src="/static/brand/koses-professor-3.png"
                  />
                  <Name>김강화 대표</Name>
                  <Description>인터보그인터네셔널</Description>
                </People>
                <People>
                  <Box
                    component="img"
                    alt="logo"
                    src="/static/brand/koses-professor-4.png"
                  />
                  <Name>오승우 대표</Name>
                  <Description>3D CLO</Description>
                </People>
              </PeopleList>
            </ContentsCard>
          </PeopleBox>
        </Section>
        <Section>
          <Box width="100%">
            <ContentsCard>
              <Box display="flex" alignItems="flex-end">
                <Title>세부일정</Title>
                <TitleGuide>
                  각 강연을 클릭하시면 해당 강연링크로 연결됩니다. (zoom 등)
                </TitleGuide>
              </Box>
              <StyledTable>
                <colgroup>
                  <col width="20%" />
                </colgroup>
                <TableBody>
                  <TableRow>
                    <StyledTableCell colSpan={5} type="title">
                      5월 21일
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      09:30 ~ 10:30
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="black-lg">개회 및 총회</CellText>
                      <CellText type="grey">
                        사회 : 김춘정 (연세대학교)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      10:30 ~ 11:15
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="red-lg">주제 강연 1 : 감성심리</CellText>
                      <CellText type="black-xl">
                        김경일 교수 (아주대학교 심리학과)
                      </CellText>
                      <CellText type="grey">
                        사회 : 박미숙 (한양대학교, 춘계학술대회 조직위원장)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      11:15 ~ 12:00
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="red-lg">
                        주제 강연 2 : 감성과학 마법에로의 초대 - '코로나19
                        위기를 기회로 변혁'
                      </CellText>
                      <CellText type="black-xl">
                        김원식 박사 (전 한국표준과학연구원)
                      </CellText>
                      <CellText type="grey">
                        사회 : 박재희 (한경대학교)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      12:00 ~ 13:00
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="black-sm">
                        Break / 이사회 / 포스터 발표 관람
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      13:00 ~ 13:45
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="red-lg">
                        Special topic 1 : AI 기획 감성의 예측 - ‘일본의 AI MD의
                        성공사례를 중심으로’
                      </CellText>
                      <CellText type="black-xl">
                        김강화 대표 (인터보그인터네셔널)
                      </CellText>
                      <CellText type="grey">
                        사회 : 이경선 (부산가톨릭대학교)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      13:45 ~ 14:30
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="red-lg">
                        Special topic 2 : 입체디자인 CAD - New Design Tool
                      </CellText>
                      <CellText type="black-xl">오승우 대표 (3D CLO)</CellText>
                      <CellText type="grey">
                        사회 : 이은주 (제주대학교)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      14:30 ~ 15:50
                    </StyledTableCell>
                    <StyledTableCell>
                      <CellText type="red">Oral Session 1</CellText>
                      <CellText type="black-md">감성심리/생리</CellText>
                      <CellText type="grey">
                        좌장 : 장은혜 (한국전자통신연구원)
                      </CellText>
                    </StyledTableCell>
                    <StyledTableCell>
                      <CellText type="red">Oral Session 2</CellText>
                      <CellText type="black-md">감성측정/평가</CellText>
                      <CellText type="grey">
                        좌장 : 이경희 (동서대학교)
                      </CellText>
                    </StyledTableCell>
                    <StyledTableCell>
                      <CellText type="red">Oral Session 3</CellText>
                      <CellText type="black-md">감성콘텐츠/디자인</CellText>
                      <CellText type="grey">
                        좌장 : 차명훈 (연세대학교)
                      </CellText>
                    </StyledTableCell>
                    <StyledTableCell>
                      <CellText type="red">Oral Session 4</CellText>
                      <CellText type="black-md">감성의류/산업/환경</CellText>
                      <CellText type="grey">
                        좌장 : 이국희 (경기대학교)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      15:50 ~ 16:00
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="black-sm">Break</CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      16:00 ~ 17:00
                    </StyledTableCell>
                    <StyledTableCell colSpan={2}>
                      <CellText type="red">
                        캡스톤디자인경진대회 Session 1
                      </CellText>
                      <CellText type="grey">
                        사회 : 허정윤 (국민대학교)
                      </CellText>
                    </StyledTableCell>
                    <StyledTableCell colSpan={2}>
                      <CellText type="red">
                        캡스톤디자인경진대회 Session 2
                      </CellText>
                      <CellText type="grey">
                        사회 : 음영지 (한국기초과학지원연구원)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      17:00 ~ 17:30
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="black-lg">
                        포스터 논문 발표 및 질의 응답
                      </CellText>
                      <CellText type="grey">
                        사회 : 황정미 (인하대학교)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      17:30 ~ 18:00
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="black-lg">시상식 및 폐회식</CellText>
                      <CellText type="grey">
                        사회 : 김선희 (인천대학교)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell colSpan={5} type="title">
                      5월 22일
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      10:00 ~ 11:00
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="black-sm">이사회</CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      11:00 ~ 12:00
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="black-sm">편집위원회</CellText>
                    </StyledTableCell>
                  </TableRow>
                </TableBody>
              </StyledTable>
            </ContentsCard>
          </Box>
        </Section>
      </Container>
    </Page>
  );
}
