import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MenuComponent } from './components/menu/menu';
import { WelcomeComponent } from './components/welcome/welcome';
import { ProjectCarousel } from './components/projects-carousel/projects-carousel';
import { Footer } from './components/footer/footer';
import { FigurePage } from './components/figure-page/figure-page';

function App() {
  return (
    <div className="App">
      <MenuComponent/>
      {/* <WelcomeComponent />
      <ProjectCarousel /> */}

      <FigurePage></FigurePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
