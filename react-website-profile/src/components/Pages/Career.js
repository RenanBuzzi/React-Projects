import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Experiences from "../Pages/Experiences";
import Education from "../Pages/Education";
import "../Pages/Career.css";
import "../Pages/Experiences.css";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Career = () => {
  const routes = ["/Experiences", "/Education"];
  const activityTab = "/Experiences";

  return (
    <>
      <BrowserRouter>
        <Route
          path="/"
          render={(history) => (
            <Paper square>
              <Tabs
                initialSelectedIndex={activityTab}
                value={
                  history.location.pathname !== "/"
                    ? history.location.pathname
                    : false
                }
                aria-label="full width tabs example"
                variant="fullWidth"
              >
                <Tab
                  label="Experiences"
                  value={routes[0]}
                  component={Link}
                  to={routes[0]}
                />
                <Tab
                  label="Education"
                  value={routes[1]}
                  component={Link}
                  to={routes[1]}
                />
              </Tabs>
            </Paper>
          )}
        ></Route>
        <Switch>
          <Route path="/Experiences" component={Experiences} />
          <Route path="/Education" component={Education} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Career;
