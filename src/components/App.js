import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import About from "./About";
import Contact from "./Contact";
import Estimate from "./Estimate";
import ProjectManager from "./ProjectManager";

function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIdx={selectedIdx}
          setSelectedIdx={setSelectedIdx}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIdx={setSelectedIdx}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <Services
                {...props}
                setValue={setValue}
                setSelectedIdx={setSelectedIdx}
              />
            )}
          />
          <Route
            exact
            path="/customsoftware"
            render={(props) => (
              <CustomSoftware
                {...props}
                setValue={setValue}
                setSelectedIdx={setSelectedIdx}
              />
            )}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>Mobile App</div>}
          />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>Revolution</div>}
          />
          <Route
            exact
            path="/about"
            render={(props) => (
              <About
                {...props}
                setValue={setValue}
                setSelectedIdx={setSelectedIdx}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            render={(props) => (
              <Contact
                {...props}
                setValue={setValue}
                setSelectedIdx={setSelectedIdx}
              />
            )}
          />
          <Route
            exact
            path="/estimate"
            render={(props) => (
              <Estimate
                {...props}
                setValue={setValue}
                setSelectedIdx={setSelectedIdx}
              />
            )}
          />
          <Route
            exact
            path="/manager"
            render={(props) => (
              <ProjectManager
                {...props}
                setValue={setValue}
                setSelectedIdx={setSelectedIdx}
              />
            )}
          />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIdx={selectedIdx}
          setSelectedIdx={setSelectedIdx}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
