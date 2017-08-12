import * as React from 'react';
import './App.css';

import { Container, Box, Title, Hero, HeroBody } from 'bloomer';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <Hero isFullHeight>
        <HeroBody hasTextAlign="centered">
          <Container className="App">
            <Box className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Title>Welcome to React</Title>
            </Box>
            <Box className="App-intro">
              To get started, edit <code>src/App.tsx</code> and save to reload.
            </Box>
          </Container>
        </HeroBody>
      </Hero>
    );
  }
}

export default App;
