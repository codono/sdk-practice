// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: 22, height: 22 }}
  />
);

const ICONS = {
  page: getIcon('ic_page'),
  dashboard: getIcon('ic_dashboard')
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      {
        title: '홈',
        href: PATH_DASHBOARD.general.pageOne,
        icon: ICONS.page
      },
      {
        title: '프로그램',
        href: PATH_DASHBOARD.general.pageTwo,
        icon: ICONS.page
      },
      {
        title: '장소',
        href: PATH_DASHBOARD.general.pageThree,
        icon: ICONS.page
      }
    ]
  }

  // APP
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'app',
  //   items: [
  //     {
  //       title: 'Drop',
  //       href: PATH_DASHBOARD.app.root,
  //       icon: ICONS.dashboard,
  //       items: [
  //         {
  //           title: 'page Four',
  //           href: PATH_DASHBOARD.app.pageFour
  //         },
  //         {
  //           title: 'Page Five',
  //           href: PATH_DASHBOARD.app.pageFive
  //         },
  //         {
  //           title: 'Page Six',
  //           href: PATH_DASHBOARD.app.pageSix
  //         }
  //       ]
  //     }
  //   ]
  // }
];

export default sidebarConfig;
