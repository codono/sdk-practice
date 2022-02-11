import { ReactNode, useEffect } from 'react';
import { Link as RouterLink, useLocation, matchPath } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import {
  Box,
  Link,
  List,
  Drawer,
  Hidden,
  Typography,
  ListSubheader,
  Button
} from '@material-ui/core';
// components
import Logo from '../../components/Logo';
// import Scrollbar from '../../components/Scrollbar';
//
import MenuLinks from './SidebarConfig';
import SidebarItem from './SidebarItem';
import KosesLogo from '../../components/KosesLogo';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  margin: theme.spacing(1, 2.5, 5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.info.main
}));

// ----------------------------------------------------------------------

type TNavItem = {
  icon?: ReactNode;
  info?: ReactNode;
  href: string;
  title: string;
  items?: TNavItem[];
};

type ReduceChildParams = {
  array: ReactNode[];
  item: TNavItem;
  pathname: string;
  level: number;
};

function reduceChild({ array, item, pathname, level }: ReduceChildParams) {
  const key = item.href + level;

  if (item.items) {
    const match = matchPath(pathname, {
      path: item.href,
      exact: false
    });

    return [
      ...array,
      <SidebarItem
        key={key}
        level={level}
        icon={item.icon}
        // info={item.info}
        href={item.href}
        title={item.title}
        open={Boolean(match)}
      >
        {renderSidebarItems({
          pathname,
          level: level + 1,
          items: item.items
        })}
      </SidebarItem>
    ];
  }
  return [
    ...array,
    <SidebarItem
      key={key}
      level={level}
      href={item.href}
      // icon={item.icon}
      info={item.info}
      title={item.title}
    />
  ];
}

type renderNavItemParams = {
  items: TNavItem[];
  pathname: string;
  level?: number;
};

function renderSidebarItems({
  items,
  pathname,
  level = 0
}: renderNavItemParams) {
  return (
    <List disablePadding>
      {items.reduce<ReactNode[]>(
        (array, item) => reduceChild({ array, item, pathname, level }),
        []
      )}
    </List>
  );
}

type NavBarProps = {
  isOpenSidebar?: boolean;
  onCloseSidebar?: VoidFunction;
};

export default function DashboardSidebar({
  isOpenSidebar,
  onCloseSidebar
}: NavBarProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpenSidebar && onCloseSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box sx={{ px: 2.5, py: 3 }}>
        <RouterLink to="./">
          <Logo />
        </RouterLink>
      </Box>

      <Box sx={{ px: 2.5, py: 3 }}>
        <RouterLink to="./">
          <KosesLogo />
        </RouterLink>
      </Box>

      {MenuLinks.map((list) => (
        <List
          disablePadding
          key={list.subheader}
          subheader={
            <ListSubheader
              disableSticky
              disableGutters
              sx={{
                mt: 3,
                mb: 2,
                pl: 5,
                color: 'text.primary',
                typography: 'overline'
              }}
            >
              {list.subheader}
            </ListSubheader>
          }
        >
          {renderSidebarItems({
            items: list.items,
            pathname
          })}
        </List>
      ))}
      <Box display="flex" flexDirection="column" flex="1 auto">
        <Box display="flex" flexDirection="column" marginTop={5} marginX={3}>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              window.location.href = 'http://www.koses.or.kr/html/sub03_01.asp';
            }}
          >
            사전 등록
          </Button>
        </Box>
        <Box display="flex" flexDirection="column" marginTop={2} marginX={3}>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              window.location.href = 'http://www.koses.or.kr/html/sub03_01.asp';
            }}
          >
            초록 접수
          </Button>
        </Box>

        <Box marginTop="auto">
          <Link underline="none" component={RouterLink} to="#">
            <AccountStyle>
              <Box display="flex" flexDirection="column" width="100%">
                <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                  모바일에서 감성과학회를
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  aris, 내 손안의 학술대회
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  marginTop={2}
                  width="100%"
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      window.location.href =
                        'https://play.google.com/store/apps/details?id=com.networkdefines.aris.android';
                    }}
                  >
                    App Download
                  </Button>
                </Box>
              </Box>
            </AccountStyle>
          </Link>
        </Box>
      </Box>
    </Box>
  );

  return (
    <RootStyle>
      <Hidden lgUp>
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: { width: DRAWER_WIDTH, bgcolor: 'background.default' }
          }}
        >
          {renderContent}
        </Drawer>
      </Hidden>
    </RootStyle>
  );
}
