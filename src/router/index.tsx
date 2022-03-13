import { lazy, Suspense } from "react";

import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import {
  Styles,
  GlobalLinkRight,
  Wave1,
  Wave2,
  Wave3,
  Wave4,
} from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Wave1 />
      <Wave2 />
      <Wave4 />
      <Wave3 />

      <GlobalLinkRight href="https://youtu.be/7IoMG_NN7lA" target="_blank">

          Join Discrod

      </GlobalLinkRight>
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
