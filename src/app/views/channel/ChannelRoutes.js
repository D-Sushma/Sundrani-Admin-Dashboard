// import { lazy } from 'react';
// import Loadable from 'app/components/Loadable';

// const Channel = Loadable(lazy(() => import('./Channel')));
// const OnMainVideo = Loadable(lazy(() => import('./button/OnMainVideo')));
// const ViewAllButton = Loadable(lazy(() => import('./button/ViewAllButton')));/

import Channel from "./Channel";
import OnMainVideo from './button/OnMainVideo';
import ViewAllButton from './button/ViewAllButton';

const materialRoutes = [
    { path: '/channel/Channel', element: <Channel /> },
    { path: '/channel/button/OnMainVideo', element: <OnMainVideo /> },
    { path: '/channel/button/ViewAllButton', element: <ViewAllButton /> },

];

export default materialRoutes;

