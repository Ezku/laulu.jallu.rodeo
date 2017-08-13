import * as React from 'react';

import glamorous from 'glamorous';
import * as css from 'glamor';

import { Container, Box, Title, Hero, HeroBody } from 'bloomer';

const logo = require('./logo.svg');

const AppContainer = glamorous(Container)({
  textAlign: 'center'
});

const HeaderBox = glamorous(Box)({
  backgroundColor: '#222',
  height: '150px',
  padding: '20px',
  color: 'white'
});

const AppLogoSpinAnimation = css.keyframes({
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
});

const AppLogo = glamorous.img({
  animation: `${AppLogoSpinAnimation} infinite 20s linear`,
  height: '80px'
});

const IntroBox = glamorous(Box)({
  fontSize: 'large'
});

class App extends React.Component {
  render() {
    return (
      <Hero isFullHeight>
        <HeroBody hasTextAlign="centered">
          <AppContainer>
            <HeaderBox>
              <AppLogo alt="logo" src={logo} />
              <Title>Welcome to React</Title>
            </HeaderBox>
            <IntroBox>
              To get started, edit <code>src/App.tsx</code> and save to reload.
            </IntroBox>
          </AppContainer>
        </HeroBody>
      </Hero>
    );
  }
}

export default App;
