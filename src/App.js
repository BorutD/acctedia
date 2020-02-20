import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./util/theme";
import jwtDecode from "jwt-decode";
import withStyles from "@material-ui/core/styles/withStyles";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser } from "./redux/actions/userActions";

// Pages
import home from "./components/pages/home";
import login from "./components/pages/login";
import signup from "./components/pages/signup";
import projects from "./views/Projects";
import users from "./views/Users";
import calendar from "./views/Calendar";
import settings from "./views/Settings";
import newProject from "./components/project/NewProject";

// Components
import Navbar from "./components/layout/Navbar/Navbar";
import AuthRoute from "./util/AuthRoute";
import axios from "axios";
import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme(themeFile);

const styles = {
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
};

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    // store.dispatch(getUserData())
  }
}

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <Router>
              <Navbar />
              <main className={classes.content}>
                <div className="container">
                  <Switch>
                    <Route exact path="/" component={home} />
                    <AuthRoute exact path="/login" component={login} />
                    <AuthRoute exact path="/signup" component={signup} />
                    <Route exact path="/projects" component={projects} />
                    <Route exact path="/users" component={users} />
                    <Route exact path="/calendar" component={calendar} />
                    <Route exact path="/settings" component={settings} />
                    <Route exact path="/newProject" component={newProject} />
                  </Switch>
                </div>
              </main>
            </Router>
          </Provider>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
