// src/App.js (updated)
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoUploadForm from './components/VideoUploadForm';
import Loader from './pages/Loader';
import Result from './pages/Result';
import CallbackPopup from './components/CallbackPopup';
import SuccessMessage from './components/SuccessMessage';
import Navigation from './components/Navigation';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={VideoUploadForm} />
          <Route path="/loader" component={Loader} />
          <Route path="/result" component={Result} />
          <Route path="/callback" component={CallbackPopup} />
          <Route path="/success" component={SuccessMessage} />
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;
