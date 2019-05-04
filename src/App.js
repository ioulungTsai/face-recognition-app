import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 99,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#6495ED'
    },
    line_linked: {
      color: '#66cdaa',
      shadow: {
        enable: false
      }
    },
    size: {
      value: 3,
      random: true,
    },
    move: {
      enable: true,
      speed: 3,
      random: true,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  }
};

function App() {
  return (
    <div className="App">
      <Particles className='particles'
                params={particlesOptions}
              />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* {
      <FaceRecognition />} */}
    </div>
  );
}

export default App;
