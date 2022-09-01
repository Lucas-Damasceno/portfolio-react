import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MenuComponent } from './components/menu/menu';
import { WelcomeComponent } from './components/welcome/welcome';
import { ProjectCarousel } from './components/projects-carousel/projects-carousel';

function App() {
  return (
    <div className="App">
      <MenuComponent/>
      <WelcomeComponent />
      <ProjectCarousel />
    </div>
  );
}

export default App;
