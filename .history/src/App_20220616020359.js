import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {IntlProvider} from 'react-intl';
import Project from "./views/Project";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import HomePage from './views/HomePage';

const App = () => {


  //getItem localstorage : getting stored items
  const getInitialLocal = () => {
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.ENGLISH;
  }

  //getItem localstorage : storing locale in the localstorage
  const handleChange = (value) => {
    setCurrentLocale(value);
    localStorage.setItem("locale", value);
  };


  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());
  
  return (
    <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.ENGLISH}>
        <BrowserRouter>
          <Switch>
            <Route path={"/"} exact>
              <HomePage handleChange={handleChange} currentLocale={currentLocale} />
            </Route>
            <Route path={"/project/:projectId"}>
              <Project currentLocale={currentLocale}/>
            </Route>
          </Switch>
        </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
