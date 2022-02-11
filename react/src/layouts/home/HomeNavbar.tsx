import { useState, useRef } from 'react';
import {
  NavLink as RouterLink,
  useHistory,
  useLocation
} from 'react-router-dom';
// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, AppBar, Toolbar, Container } from '@material-ui/core';

// icon
import ic_sendiaLogo from '../../assets/icons/ic_sendiaLogo.svg';
import ic_close from '../../assets/icons/home/ic_close.svg';
import ic_notice from '../../assets/icons/home/ic_notice.svg';
import ic_setting from '../../assets/icons/home/ic_setting.svg';
import palette from '../../theme/palette';

const APP_BAR_MOBILE = 64;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  '& .isDesktopActive': {
    color: `${theme.palette.primary.main} !important`
  },
  '& .isMobileActive': {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    )
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  backgroundColor: palette.light.secondary.lighter
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

const IconBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export default function HomeNavbar() {
  const history = useHistory();
  const clickClose = () => {
    history.push('/');
    window.parent.postMessage('close sendia', '*');
  };

  return (
    <RootStyle color="transparent">
      <ToolbarStyle disableGutters>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <RouterLink to="/">
            <img src={ic_sendiaLogo} />
          </RouterLink>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              minWidth: '70px'
            }}
          >
            <IconBox>
              <img src={ic_notice} />
            </IconBox>
            <IconBox>
              <img src={ic_setting} />
            </IconBox>
            <IconBox onClick={clickClose}>
              <img src={ic_close} />
            </IconBox>
          </Box>
        </Container>
      </ToolbarStyle>

      {/* <ToolbarShadowStyle /> */}
    </RootStyle>
  );
}
