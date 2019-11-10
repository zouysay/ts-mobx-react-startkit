import * as React from 'react';
import { Home, Test } from '@components/index';

export type IRoute = {
  path: string;
  exact?: boolean;
  name: string;
  icon?: string;
  comp?: any;
  subRoutes?: Array<IRoute>;
};

const routes: Array<IRoute> = [
  {
    path: '/',
    exact: true,
    name: '主页',
    icon: 'home',
    comp: () => <Home name="homepage" />
  },
  {
    path: '/test',
    exact: true,
    name: '测试',
    icon: 'test',
    comp: () => <Test name="test" />
  }
];

export default routes;
