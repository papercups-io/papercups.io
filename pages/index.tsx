import Head from 'next/head';
import Link from 'next/link';
import {Component} from 'react';
import ReactGA from 'react-ga';
import posthog from 'posthog-js';
import {Box, Flex} from 'rebass';
import {ChatWidget, Papercups} from '@papercups-io/chat-widget';

import {RightCircleOutlined, GithubOutlined} from '../components/icons';
import {
  colors,
  Button,
  Content,
  Footer,
  Header,
  Layout,
  Menu,
  Paragraph,
  Title,
  Text,
} from '../components/common';

export default class extends Component {
  componentDidMount() {
    const {NEXT_PUBLIC_GA_TRACKING_ID} = process.env;

    if (NEXT_PUBLIC_GA_TRACKING_ID) {
      ReactGA.initialize(NEXT_PUBLIC_GA_TRACKING_ID);
      ReactGA.pageview(document.location.pathname);
    }

    posthog.init('cQo4wipp5ipWWXhTN8kTacBItgqo457yDRtzCMOr-Tw', {
      api_host: 'https://app.posthog.com',
    });
  }

  render() {
    return (
      <Layout style={{background: colors.white}}>
        <Head>
          <title>Papercups | Open Source Intercom Alternative</title>
          <link rel="icon" href="/logo-v2.svg" />
          <meta
            name="description"
            content="Papercups is an open-source live chat widget. Chat with your customers to improve conversions and customer satisfaction."
          ></meta>
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
                    href="https://github.com/papercups-io/papercups/wiki/Features"
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
          <Box mx="auto" style={{maxWidth: 960}} py={5} px={4}>
            <Flex mb={[5, 6]} mx={[0, -4]} flexDirection={['column', 'row']}>
              <Box pt={100} flex={1} mx={[0, 4]} mb={[4, 0]}>
                <Box mb={6}>
                  <Title level={1}>
                    Connect and chat with customers from your website
                  </Title>

                  <Paragraph>
                    Open source customer messaging, built for startups and
                    enterprise alike.
                  </Paragraph>

                  <Flex my={3}>
                    <Box mr={2}>
                      <a
                        href="https://github.com/papercups-io/papercups"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          type="default"
                          size="large"
                          icon={<GithubOutlined />}
                        >
                          GitHub
                        </Button>
                      </a>
                    </Box>
                    <Box mr={2}>
                      <a
                        href="https://app.papercups.io/register?redirect=/account/getting-started"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          type="primary"
                          size="large"
                          icon={<RightCircleOutlined />}
                        >
                          Get started for free
                        </Button>
                      </a>
                    </Box>
                  </Flex>
                </Box>
              </Box>

              <Box flex={1} mx={[0, 4]}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: 320,
                    }}
                    src="chatting.svg"
                  />
                </Flex>
              </Box>
            </Flex>

            <Flex mb={[5, 6]} mx={[0, -4]} flexDirection={['column', 'row']}>
              <Box flex={1} mx={[0, 4]} mb={[4, 0]}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: 320,
                    }}
                    src="setup.svg"
                  />
                </Flex>
              </Box>

              <Box flex={1} mx={[0, 4]} my={[4, 0]}>
                <Title level={2}>Reply directly from Slack</Title>
                <Paragraph>
                  Directly talk to your users from a single Slack channel.
                  Remove the friction of having to login to another dashboard.
                  Set up our Slack integration in minutes.
                </Paragraph>
              </Box>
            </Flex>

            <Flex
              mb={[5, 6]}
              mx={[0, -4]}
              flexDirection={['column-reverse', 'row']}
            >
              <Box flex={1} mx={[0, 4]} mb={[4, 0]}>
                <Title level={3}>Brand and customize your widget</Title>
                <Paragraph>
                  Our widget is highly customizable. Change your color,
                  greetings, text and more through our simple UI without needing
                  any code.
                </Paragraph>
              </Box>

              <Box flex={1} mx={[0, 4]}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: 320,
                    }}
                    src="customize.svg"
                  />
                </Flex>
              </Box>
            </Flex>
            <Flex mb={[5, 6]} mx={[0, -4]} flexDirection={['column', 'row']}>
              <Box flex={1} mx={[0, 4]}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: 320,
                    }}
                    src="secure.svg"
                  />
                </Flex>
              </Box>
              <Box pt={100} flex={1} mx={[0, 4]} mb={[4, 0]}>
                <Title level={3}>Save your developer's time</Title>
                <Paragraph>
                  Papercups is open source and made with a developer in mind. We
                  support HTML, React, React Native and Flutter integrations.
                  Our integration takes minutes to setup and if you can't do it
                  in minutes we'll hop on a zoom call and do it for you!
                </Paragraph>
              </Box>
            </Flex>

            <Flex justifyContent="center" mb={[4, 5]} mt={[6, 0]}>
              <Title level={2}>Papercups for Enterprise</Title>
            </Flex>

            <Flex
              mx={-3}
              justifyContent="space-between"
              mb={6}
              flexDirection={['column', 'row']}
            >
              <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
                <Title level={3}>Self-managed</Title>
                <Paragraph>
                  Papercups can be deployed in your cloud, for painless adoption
                  and onboarding. Whether it's AWS, Docker, or Heroku, we've got
                  you covered.
                </Paragraph>
              </Flex>
              <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
                <Title level={3}>Unlimited volume</Title>
                <Paragraph>
                  Papercups is built with Elixir on top of BEAM for incredible
                  scalability. This scalability extends to our open core pricing
                  model.
                </Paragraph>
              </Flex>
              <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
                <Title level={3}>Personalized support</Title>
                <Paragraph>
                  We can manage your deployment on your infrastructure. Get the
                  benefits of self-hosting with the reliability and scalability
                  of the cloud.
                </Paragraph>
              </Flex>
            </Flex>

            <Flex justifyContent="center" mb={[3, 4]} mt={[6, 0]}>
              <Title level={2}>Connect with us</Title>
            </Flex>

            <Flex
              mx={-3}
              justifyContent="space-between"
              mb={6}
              flexDirection={['column', 'row']}
            >
              <Flex flex={1} mx={3} my={[3, 0]} justifyContent="center">
                <a
                  href="https://join.slack.com/t/papercups-io/shared_invite/zt-h0c3fxmd-hZi1Zp8~D61S6GD16aMqmg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="slack-v1.svg" style={{height: 144}} />
                </a>
              </Flex>
              <Flex flex={1} mx={3} my={[3, 0]} justifyContent="center">
                <a
                  href="https://github.com/papercups-io/papercups"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="github-v1.svg" style={{height: 144}} />
                </a>
              </Flex>
              <Flex flex={1} mx={3} my={[3, 0]} justifyContent="center">
                <a
                  href="https://discord.gg/Dq2A3eh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="discord-color.svg" style={{height: 144}} />
                </a>
              </Flex>
            </Flex>

            <Flex
              mb={5}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Title level={1}>What's new?</Title>

              <Flex my={4} mx={-2}>
                <Box mx={2}>
                  <a
                    href="https://github.com/papercups-io/papercups"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="large">Find out on Github</Button>
                  </a>
                </Box>
                <Box mx={2}>
                  <Button
                    type="primary"
                    size="large"
                    icon={<RightCircleOutlined />}
                    onClick={Papercups.toggle}
                  >
                    Ask us!
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Content>

        <Footer style={{backgroundColor: '#001529'}}>
          <Box p={3}>
            <Text style={{color: colors.white, paddingRight: '10px'}}>
              Backed by <b>Y Combinator</b>
            </Text>

            <img
              style={{
                width: '20px',
                height: '20px',
              }}
              src="yc-logo.png"
            />
          </Box>
        </Footer>

        <ChatWidget
          title="Welcome to Papercups!"
          subtitle="Ask us anything in the chat window below 😊"
          greeting="Hi there! Send us a message and we'll get back to you as soon as we can. In the meantime, check out our [demo](https://app.papercups.io/demo)!"
          emailInputPlaceholder="What's your email address?"
          newMessagesNotificationText="See new messages"
          primaryColor="#1890ff"
          accountId="eb504736-0f20-4978-98ff-1a82ae60b266"
          iconVariant="filled"
          requireEmailUpfront
          showAgentAvailability
        />
      </Layout>
    );
  }
}
