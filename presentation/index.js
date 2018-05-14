// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Appear,
  Image,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import utils
import preloader from 'spectacle/lib/utils/preloader';

// Import CodeSlide
import CodeSlide from 'spectacle-code-slide';

// Require CSS
require('normalize.css');

const images = {
  v8: require('../assets/v8.png'),
  nodejs: require('../assets/nodejs.svg'),
  chrome: require('../assets/chrome.svg'),
  electronFlow: require('../assets/electron-flow.svg'),
  electronRender: require('../assets/electron-spawn-render.svg'),
};

preloader(images);

const theme = createTheme({
  primary: '#ff7200',
  secondary: '#4a2100',
  tertiary: '#343434',
  quarternary: '#CECECE',
  quinary: '#b65100'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            JS in Desktop
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            committing the dangerous sin of using web technologies for desktop applications
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Text margin="0 0 10px" textColor="quarternary" size={1}>But of course, a little introduction about myself</Text>
          <Appear fid={1}>
            <Heading size={1} transition={['fade']} textColor="primary" caps>I'm Dan!</Heading>
          </Appear>
          <List>
            <Appear fid={2}>
              <ListItem textColor="quarternary">A Software Developer</ListItem>
            </Appear>
            <Appear fid={3}>
              <ListItem textColor="quarternary">SplitmediaLabs, Inc.</ListItem>
            </Appear>
            <Appear fid={4}>
              <ListItem textColor="quarternary">Main developer for Player.me Desktop Application</ListItem>
            </Appear>
            <Appear fid={4}>
              <ListItem textColor="quarternary">github.com/dcefram - code</ListItem>
            </Appear>
            <Appear fid={5}>
              <ListItem textColor="quarternary">twitter.com/dcefram - rants</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="quarternary">
            Did you know that you can use JavaScript to create a website?
          </Heading>
          <List>
            <Appear fid={1}>
              <ListItem textColor="quarternary"><strong>React.js</strong> - Facebook, Player.me, Microsoft Outlook, etc.</ListItem>
            </Appear>
            <Appear fid={2}>
              <ListItem textColor="quarternary"><strong>Vue.js</strong> - newsfeed.fb.com, Alibaba, Baidu, Line, etc.</ListItem>
            </Appear>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="jsx"
          code={require('raw-loader!../assets/react.example')}
          ranges={[
            { title: 'An Example (React)' },
            { loc: [10, 14] },
            { loc: [9, 15], note: 'Oh lookie! HTML inside a JS Function!' },
            { loc: [4, 8], note: 'What? CSS in JS??' },
            { loc: [10, 11] },
          ]}
        />
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="quarternary">
            Did you know that you can use JavaScript to create a server?
          </Heading>
          <Appear fid={1}>
            <List>
              <ListItem textColor="quarternary">Express - https://expressjs.com</ListItem>
              <ListItem textColor="quarternary">Koa - https://koajs.com</ListItem>
              <ListItem textColor="quarternary">Sails - https://sailsjs.com</ListItem>
              <ListItem textColor="quarternary">Meteor - https://www.meteor.com</ListItem>
              <ListItem textColor="quarternary">Micro - https://github.com/zeit/micro</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} margin="0 0 50px" textColor="quarternary">
            Google's V8 JavaScript Engine
          </Heading>
          <Image width="10%" margin="0 auto 50px" src={images.v8} />
          <Image width="10%" margin="0 auto 50px" src={images.nodejs} />
          <Image width="10%" margin="0 auto 50px" src={images.chrome} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="quarternary">
            What else can you do using JavaScript???
          </Heading>
          <Appear fid={1}>
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Desktop Applications!
            </Heading>
          </Appear>
          <Appear fid={2}>
            <Text margin="10px 0 0" textColor="quinary" size={1} fit bold>
              ... Cross-platform desktop applications
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="quarternary">
            Apps that you probably use that use Web technologies...
          </Heading>
          <Appear fid={1}>
            <List>
              <ListItem textColor="quarternary">Visual Studio Code</ListItem>
              <ListItem textColor="quarternary">Atom</ListItem>
              <ListItem textColor="quarternary">Brackets</ListItem>
              <ListItem textColor="quarternary">Spotify</ListItem>
              <ListItem textColor="quarternary">Discord</ListItem>
              <ListItem textColor="quarternary">Slack</ListItem>
              <Appear fid={2}>
                <ListItem textColor="quarternary">... Player.me Desktop App (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</ListItem>
              </Appear>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Electron JS
          </Heading>
          <Text textColor="quinary" size={1} bold>
            https://electronjs.org
          </Text>
          <List>
            <Appear fid={1}>
              <ListItem textColor="tertiary">Created by Github</ListItem>
            </Appear>
            <Appear fid={2}>
              <ListItem textColor="tertiary">Created as the framework for Atom</ListItem>
            </Appear>
            <Appear fid={3}>
              <ListItem textColor="tertiary">Chromium + NodeJS</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            How does it work?
          </Heading>
          <List>
            <Appear fid={1}>
              <ListItem textColor="quarternary">Electron provides a runtime to build desktop applications with pure JavaScript.</ListItem>
              {/* Remember what we said, it's Chromium + NodeJS? This is important and a clear distinction between other CEF apps and Electron. */}
            </Appear>
            <Appear fid={2}>
              <ListItem textColor="quarternary">You instantiate a browser process using JavaScript... We call that as the render process.</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Text textColor="quarternary">Electron is the middleman</Text>
          <Image width="100%" margin="0 auto 50px" src={images.electronFlow} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Image width="100%" margin="0 auto 50px" src={images.electronRender} />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="jsx"
          code={require('raw-loader!../assets/electron-render.example')}
          ranges={[
            { title: 'Creating a new window in Electron' },
            { loc: [4, 10] },
            { loc: [4, 5], note: 'BrowserWindow is an Electron method to create a new... browser. duh' },
            { loc: [11, 12], note: 'This line specifies the HTML file to load, which would be our UI' },
            { loc: [0, 13] },
          ]}
        />
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            UI -> Main Process communication
          </Heading>
          <List>
            <Appear fid={1}>
              <ListItem textColor="tertiary">Communication between the 2 process is through messages</ListItem>
            </Appear>
            <Appear fid={2}>
              <ListItem textColor="tertiary">IPC - Inter-process communication</ListItem>
            </Appear>
            <Appear fid={2}>
              <ListItem textColor="tertiary">It allows a process to subscribe and/or send messages to a channel</ListItem>
            </Appear>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="jsx"
          code={require('raw-loader!../assets/electron-messages.example')}
          ranges={[
            { loc: [0, 8] },
            { loc: [9, 16] },
          ]}
        />
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            https://electronjs.org/docs/api
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
