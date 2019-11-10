import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import routerList, { IRoute } from './routers';

class App extends React.Component<{}, {}> {
  getRouterDom = (routers: Array<IRoute>, level: number) => {
    const levelKey = String(level);
    return routers.map((route: IRoute, index: number) => {
      if (route.subRoutes) {
        return (
          <Switch key={levelKey + index}>
            {this.getRouterDom(route.subRoutes, index)}
          </Switch>
        );
      } else {
        return (
          <Route
            key={levelKey + index}
            exact={route.exact}
            path={route.path}
            component={route.comp}
          />
        );
      }
    });
  };
  render() {
    return (
      <Router>
        <Switch>{this.getRouterDom(routerList, 0)}</Switch>
      </Router>
    );
  }
}

export default App;
