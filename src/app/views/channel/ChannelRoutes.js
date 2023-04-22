// import { lazy } from 'react';
// import Loadable from 'app/components/Loadable';

// const Channel = Loadable(lazy(() => import('./Channel')));

import Channel from "./Channel";

const materialRoutes = [
    { path: '/channel/Channel', element: <Channel /> },

];

export default materialRoutes;

