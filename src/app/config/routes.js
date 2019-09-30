import Login from 'views/login';
import Outlets from 'views/outlets';
import WorkInProgress from 'views/workInProgress';
import Unauthorized from 'views/unauthorized';

/*
* permissions @params[string] 被允许的角色
* unauthorized @params reactEle 未被授权展示的页面
* */
const authorizedRoutes = [{
  path: '/dashboard/analysis/realtime',
  exact: true,
  permissions: ['admin', 'user'],
  redirect: '/login',
  component: WorkInProgress,
  pageTitle: '',
}, {
  path: '/outlets',
  exact: true,
  permissions: ['admin', 'user'],
  component: Outlets,
  unauthorized: Unauthorized,
  pageTitle: 'pageTitle_outlets',
  breadcrumb: ['/outlets'],
}];

const normalRoutes = [{
  path: '/',
  exact: true,
  redirect: '/outlets',
}, {
  path: '/login',
  exact: true,
  component: Login,
}];

const combineRoutes = [
  ...authorizedRoutes,
  ...normalRoutes,
];

export {
  authorizedRoutes,
  normalRoutes,
  combineRoutes,
};
