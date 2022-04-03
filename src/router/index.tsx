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
  Wave5,
  Girls
} from "../styles/styles";



const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Wave2 />
      <GlobalLinkRight href="https://discord.gg/nvMKWZC8Gb" target="_blank">

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
