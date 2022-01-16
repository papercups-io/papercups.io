import React from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';
import {Box, Flex, Image} from 'rebass';
import {MDXProvider} from '@mdx-js/react';
import {ChatWidget} from '@papercups-io/chat-widget';
import NavMenu from './nav';

export type Props = {
  width?: number;
  className?: string;
  title?: string;
  dark?: boolean;
  children: any;
};
export type State = {};

export default class Container extends React.Component<Props, State> {
  storytime: any = null;
  state = {};

  componentDidMount() {
    const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
    const isStorytimeEnabled = process.env.NEXT_STORYTIME_ENABLED;

    if (gaTrackingId) {
      ReactGA.initialize(gaTrackingId);
      ReactGA.pageview(document.location.pathname);
    }

    if (typeof window !== 'undefined' && isStorytimeEnabled) {
      // NB: just testing this out, feel free to remove if anything breaks
      const {Storytime} = require('@papercups-io/storytime');

      this.storytime = Storytime.init({
        accountId: 'eb504736-0f20-4978-98ff-1a82ae60b266',
        debug: true,
      });
    }
  }

  componentWillUnmount() {
    if (this.storytime && this.storytime.finish) {
      this.storytime.finish();
    }
  }

  // TODO: find a better way to handle this?
  isWindowReady = () => {
    return typeof window !== 'undefined';
  };

  getCurrentWindowPath = (): string | null => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    } else {
      return null;
    }
  };

  shouldPopUpInitialMessage = (): number | boolean => {
    return this.getCurrentWindowPath() === '/pricing';
  };

  render() {
    const {title, width, dark = false, className = '', children} = this.props;

    return (
      <Flex
        className={`flex-auto flex-col min-h-0 ${
          dark ? 'dark bg-gray-900' : 'bg-white'
        }`}
      >
        <Head>
          <title>
            Papercups | {title || 'Open Source Intercom Alternative'}
          </title>
          <link rel="icon" href="/logo-v2.svg" />
          <meta
            name="description"
            content="Papercups is an open-source live chat widget. Chat with your customers to improve conversions and customer satisfaction."
          ></meta>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </Head>

        <NavMenu dark={dark} />

        <main className="flex-auto min-h-0 dark:text-white">
          <Box
            className={className}
            mx="auto"
            style={{maxWidth: width || 800}}
            pt={5}
            px={4}
            pb={6}
          >
            <MDXProvider components={this.state}>{children}</MDXProvider>
          </Box>
        </main>

        <footer className="bg-gray-800 flex-0">
          <div
            className="max-w-5xl mx-auto px-4"
            style={{maxWidth: width || 800}}
          >
            <Flex py={5} sx={{justifyContent: 'space-between'}}>
              <Flex sx={{alignItems: 'center'}}>
                <p className="text-white pr-3">
                  Backed by <b>Y Combinator</b>
                </p>

                <Image sx={{width: '20px', height: '20px'}} src="yc-logo.png" />
              </Flex>

              <Box>
                <a href="/privacy" className="white_link">
                  Privacy
                </a>
              </Box>
            </Flex>
          </div>
        </footer>

        {this.isWindowReady() && (
          <ChatWidget
            token="eb504736-0f20-4978-98ff-1a82ae60b266"
            inbox="364b1871-6db5-4bc0-9a88-994e06adbda6"
            title="Welcome to Papercups!"
            subtitle="Ask us anything in the chat window below 😊"
            greeting="Hi there! Send us a message and we'll get back to you as soon as we can. In the meantime, check out our [demo](https://app.papercups.io/demo)!"
            primaryColor="#1890ff"
            iconVariant="filled"
            requireEmailUpfront
            showAgentAvailability
            // Pops up initial message after 2s when `shouldPopUpInitialMessage` return `true`
            popUpInitialMessage={
              this.shouldPopUpInitialMessage() ? 2000 : false
            }
            setDefaultGreeting={(settings) => {
              const path = window.location.pathname;

              switch (path) {
                case '/pricing':
                  return "Hi there! Let us know if you have any questions about pricing :) (we're offering deals to startups and international founders)";
                default:
                  return "Hi there! Send us a message and we'll get back to you as soon as we can. In the meantime, check out our [demo](https://app.papercups.io/demo)!";
              }
            }}
          />
        )}
      </Flex>
    );
  }
}
