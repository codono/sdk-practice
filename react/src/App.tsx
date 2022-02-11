import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';
// routes
import routes, { renderRoutes } from './routes';
// theme
import ThemeConfig from './theme';
// components
import Settings from './components/settings';
import RtlLayout from './components/RtlLayout';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import { initFbt } from './utils/fbt';

initFbt();

const history = createBrowserHistory();

export default function App() {
  return (
    <HelmetProvider>
      <RecoilRoot>
        <ThemeConfig>
          <RtlLayout>
            <Router history={history}>
              <Settings />
              <ScrollToTop />
              {renderRoutes(routes)}
            </Router>
          </RtlLayout>
        </ThemeConfig>
      </RecoilRoot>
    </HelmetProvider>
  );
}
