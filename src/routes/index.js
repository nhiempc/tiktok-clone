// Layouts
import { DefaultLayout, HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Route configs
import routesConfigs from '~/configs/routes';

const publicRoutes = [
    { path: routesConfigs.home, component: Home, layout: DefaultLayout },
    { path: routesConfigs.following, component: Following, layout: DefaultLayout },
    { path: routesConfigs.profile, component: Profile, layout: DefaultLayout },
    { path: routesConfigs.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfigs.search, component: Search, layout: null },
    { path: routesConfigs.feedback, component: Home, layout: DefaultLayout },
    { path: routesConfigs.coin, component: Home, layout: DefaultLayout },
    { path: routesConfigs.analytics, component: Home, layout: DefaultLayout },
    { path: routesConfigs.setting, component: Home, layout: DefaultLayout },
    { path: routesConfigs.logout, component: Home, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
