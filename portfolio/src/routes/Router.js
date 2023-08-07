import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from '../pages/HomePage/Home';
import landing from '../pages/LandingPage/Landing';
import projects from '../pages/ProjectsPage/Projects';
import experience from '../pages/ExperiencePage/Experience';
import education from '../pages/EducationPage/Education';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/home" component={home} />
      <Route path="/projects" component={projects} />
      <Route path="/education" component={education} />
      <Route path="/experience" component={experience} />
      <Route path="/" component={landing} />
    </Switch>
  </Router>
);

export default Routes;
