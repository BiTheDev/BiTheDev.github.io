import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from '../pages/HomePage/home';
import landing from '../pages/LandingPage/landing';
import projects from '../pages/ProjectsPage/projects';
import experience from '../pages/ExperiencePage/experience';
import education from '../pages/EducationPage/education';

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
