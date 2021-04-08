import React from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';
import Link from 'next/link';
import {Box, Flex} from 'rebass';
import {MDXProvider} from '@mdx-js/react';
import {ChatWidget} from '@papercups-io/chat-widget';
import {
  colors,
  Content,
  Divider,
  Footer,
  Header,
  Layout,
  Menu,
  Paragraph,
  Text,
  Title,
} from '../components/common';

type Props = {width?: number; title?: string; children: any};
type State = any;

export default class Container extends React.Component<Props, State> {
  storytime: any = null;

  state = {
    h1: Title,
    h2: (props: any) => <Title level={2} {...props} />,
    h3: (props: any) => <Title level={3} {...props} />,
    ul: (props: any) => <ul className="ant-typography" {...props}></ul>,
    p: Paragraph,
    hr: Divider,
  };

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

  shouldDisplayMailchimpForm = () => {
    const path = this.getCurrentWindowPath();
    // Only display on blog pages
    return path && path?.startsWith('/blog');
  };

  render() {
    return (
      <Layout style={{background: colors.white}}>
        <Head>
          <title>
            Papercups | {this.props.title || 'Open Source Intercom Alternative'}
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

        <Header style={{background: 'transparent'}}>
          <Flex>
            <Box flex={1}>
              <Link href="/">
                <a>
                  <img
                    src="/papercups-v2.svg"
                    style={{height: 40, width: 160}}
                  />
                </a>
              </Link>
            </Box>

            <Box>
              <Menu style={{borderBottom: 'none'}} mode="horizontal">
                <Menu.Item style={{margin: '0 1em'}} key="blog">
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={{margin: '0 1em'}} key="features">
                  <a
                    href="https://docs.papercups.io/#features"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Features
                  </a>
                </Menu.Item>
                <Menu.Item style={{margin: '0 1em'}} key="pricing">
                  <Link href="/pricing">
                    <a>Pricing</a>
                  </Link>
                </Menu.Item>
                <Menu.Item style={{margin: '0 1em'}} key="github">
                  <a
                    href="https://github.com/papercups-io/papercups"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Menu.Item>
                <Menu.Item style={{margin: '0 1em'}} key="Sign up">
                  <a
                    href="https://app.papercups.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Login
                  </a>
                </Menu.Item>
              </Menu>
            </Box>
          </Flex>
        </Header>

        <Content>
          <Box
            mx="auto"
            style={{maxWidth: this.props.width || 800}}
            pt={5}
            px={4}
            pb={6}
          >
            <MDXProvider components={this.state}>
              {this.props.children}
            </MDXProvider>
          </Box>
        </Content>
        {this.shouldDisplayMailchimpForm() && (
          <div>
            {/* Begin Mailchimp Signup Form */}
            <link
              href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
              rel="stylesheet"
              type="text/css"
            />
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  '\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n',
              }}
            />
            <div id="mc_embed_signup">
              <form
                action="https://papercups.us1.list-manage.com/subscribe/post?u=3a91de52d39fe8157b80ab8cf&id=9bc2b3ce0a"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <input
                    type="email"
                    name="EMAIL"
                    className="email"
                    id="mce-EMAIL"
                    placeholder="email address"
                    required
                  />
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                  <div
                    style={{position: 'absolute', left: '-5000px'}}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_3a91de52d39fe8157b80ab8cf_9bc2b3ce0a"
                      tabIndex={-1}
                    />
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Subscribe"
                      defaultValue="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        <Footer style={{backgroundColor: '#001529'}}>
          <Box p={5}>
            <Text style={{color: colors.white}}>
              Made with ❤️ in SF &amp; NYC
            </Text>
          </Box>
        </Footer>

        {this.isWindowReady() && (
          <ChatWidget
            title="Welcome to Papercups!"
            subtitle="Ask us anything in the chat window below 😊"
            greeting="Hi there! Send us a message and we'll get back to you as soon as we can. In the meantime, check out our [demo](https://app.papercups.io/demo)!"
            primaryColor="#1890ff"
            accountId="eb504736-0f20-4978-98ff-1a82ae60b266"
            iconVariant="filled"
            requireEmailUpfront
            showAgentAvailability
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
      </Layout>
    );
  }
}
