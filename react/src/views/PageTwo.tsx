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
    <Page title="aris, ??? ????????? ????????????">
      <Container maxWidth="xl">
        <Section>
          <PeopleBox>
            <ContentsCard>
              <Title>????????????</Title>
              <PeopleList>
                <People>
                  <Box
                    component="img"
                    alt="logo"
                    src="/static/brand/koses-professor-1.png"
                  />
                  <Name>????????? ??????</Name>
                  <Description>??????????????? ????????????</Description>
                </People>
                <People>
                  <Box
                    component="img"
                    alt="logo"
                    src="/static/brand/koses-professor-2.png"
                  />
                  <Name>????????? ??????</Name>
                  <Description>??? ???????????????????????????</Description>
                </People>
                <People>
                  <Box
                    component="img"
                    alt="logo"
                    src="/static/brand/koses-professor-3.png"
                  />
                  <Name>????????? ??????</Name>
                  <Description>???????????????????????????</Description>
                </People>
                <People>
                  <Box
                    component="img"
                    alt="logo"
                    src="/static/brand/koses-professor-4.png"
                  />
                  <Name>????????? ??????</Name>
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
                <Title>????????????</Title>
                <TitleGuide>
                  ??? ????????? ??????????????? ?????? ??????????????? ???????????????. (zoom ???)
                </TitleGuide>
              </Box>
              <StyledTable>
                <colgroup>
                  <col width="20%" />
                </colgroup>
                <TableBody>
                  <TableRow>
                    <StyledTableCell colSpan={5} type="title">
                      5??? 21???
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      09:30 ~ 10:30
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="black-lg">?????? ??? ??????</CellText>
                      <CellText type="grey">
                        ?????? : ????????? (???????????????)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      10:30 ~ 11:15
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="red-lg">?????? ?????? 1 : ????????????</CellText>
                      <CellText type="black-xl">
                        ????????? ?????? (??????????????? ????????????)
                      </CellText>
                      <CellText type="grey">
                        ?????? : ????????? (???????????????, ?????????????????? ???????????????)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      11:15 ~ 12:00
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="red-lg">
                        ?????? ?????? 2 : ???????????? ??????????????? ?????? - '?????????19
                        ????????? ????????? ??????'
                      </CellText>
                      <CellText type="black-xl">
                        ????????? ?????? (??? ???????????????????????????)
                      </CellText>
                      <CellText type="grey">
                        ?????? : ????????? (???????????????)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      12:00 ~ 13:00
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="black-sm">
                        Break / ????????? / ????????? ?????? ??????
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      13:00 ~ 13:45
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="red-lg">
                        Special topic 1 : AI ?????? ????????? ?????? - ???????????? AI MD???
                        ??????????????? ???????????????
                      </CellText>
                      <CellText type="black-xl">
                        ????????? ?????? (???????????????????????????)
                      </CellText>
                      <CellText type="grey">
                        ?????? : ????????? (????????????????????????)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      13:45 ~ 14:30
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="red-lg">
                        Special topic 2 : ??????????????? CAD - New Design Tool
                      </CellText>
                      <CellText type="black-xl">????????? ?????? (3D CLO)</CellText>
                      <CellText type="grey">
                        ?????? : ????????? (???????????????)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      14:30 ~ 15:50
                    </StyledTableCell>
                    <StyledTableCell>
                      <CellText type="red">Oral Session 1</CellText>
                      <CellText type="black-md">????????????/??????</CellText>
                      <CellText type="grey">
                        ?????? : ????????? (???????????????????????????)
                      </CellText>
                    </StyledTableCell>
                    <StyledTableCell>
                      <CellText type="red">Oral Session 2</CellText>
                      <CellText type="black-md">????????????/??????</CellText>
                      <CellText type="grey">
                        ?????? : ????????? (???????????????)
                      </CellText>
                    </StyledTableCell>
                    <StyledTableCell>
                      <CellText type="red">Oral Session 3</CellText>
                      <CellText type="black-md">???????????????/?????????</CellText>
                      <CellText type="grey">
                        ?????? : ????????? (???????????????)
                      </CellText>
                    </StyledTableCell>
                    <StyledTableCell>
                      <CellText type="red">Oral Session 4</CellText>
                      <CellText type="black-md">????????????/??????/??????</CellText>
                      <CellText type="grey">
                        ?????? : ????????? (???????????????)
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
                        ?????????????????????????????? Session 1
                      </CellText>
                      <CellText type="grey">
                        ?????? : ????????? (???????????????)
                      </CellText>
                    </StyledTableCell>
                    <StyledTableCell colSpan={2}>
                      <CellText type="red">
                        ?????????????????????????????? Session 2
                      </CellText>
                      <CellText type="grey">
                        ?????? : ????????? (?????????????????????????????????)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      17:00 ~ 17:30
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="black-lg">
                        ????????? ?????? ?????? ??? ?????? ??????
                      </CellText>
                      <CellText type="grey">
                        ?????? : ????????? (???????????????)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      17:30 ~ 18:00
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="black-lg">????????? ??? ?????????</CellText>
                      <CellText type="grey">
                        ?????? : ????????? (???????????????)
                      </CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell colSpan={5} type="title">
                      5??? 22???
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      10:00 ~ 11:00
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="black-sm">?????????</CellText>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell type="background">
                      11:00 ~ 12:00
                    </StyledTableCell>
                    <StyledTableCell colSpan={4}>
                      <CellText type="black-sm">???????????????</CellText>
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
