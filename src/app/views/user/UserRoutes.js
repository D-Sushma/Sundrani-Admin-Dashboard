// import { lazy } from 'react';
// import Loadable from 'app/components/Loadable';

// const User = Loadable(lazy(() => import('./User')));

import User from "./User";

const materialRoutes = [
    { path: '/user/User', element: <User /> },

];

export default materialRoutes;

