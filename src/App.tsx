import React from "react";
import { Diophant } from "./Diophant/Diophant";
import { GlobalStyles } from "./global.styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./constants";
import { StyledAppContainer } from "./App.styles";

export const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <StyledAppContainer>
        <Switch>
          <Route exact path={routes.base} component={Diophant} />
        </Switch>
      </StyledAppContainer>
    </Router>
  );
};
