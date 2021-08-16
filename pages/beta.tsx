import Head from 'next/head';
import Link from 'next/link';
import {Component} from 'react';
import ReactGA from 'react-ga';
import posthog from 'posthog-js';
import {Box, Flex, Image} from 'rebass';
import {ChatWidget, Papercups} from '@papercups-io/chat-widget';

import {H1, H2, H3, P} from '../components/common';
import ChatDemo from '../components/ChatDemo';

const NavMenu = () => {
  // TODO: figure out how to make this responsive!
  // See https://tailwindui.com/components/application-ui/navigation/navbars

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex flex-grow items-center text-white mr-6">
        <img src="/papercups-v2.svg" style={{height: 40, width: 160}} />
      </div>

      <div className="block lg:hidden">
        <button className="flex justify-start items-center px-3 py-2 border rounded text-gray-700 border-blue-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-grow justify-center lg:flex lg:items-center lg:w-auto">
        <div className="text-sm">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 mx-6"
          >
            Blog
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 mx-6"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 mx-6"
          >
            Features
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 mx-6"
          >
            GitHub
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 mx-6"
          >
            Pricing
          </a>
        </div>
      </div>

      <div className="flex flex-grow justify-end">
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm hover:text-white py-2 px-4 rounded-full transition-colors"
        >
          Get started
        </a>
      </div>
    </nav>
  );
};

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
      <Flex className="flex-auto flex-col min-h-0 bg-white">
        <Head>
          <title>Papercups | Open Source Intercom Alternative</title>
          <link rel="icon" href="/logo-v2.svg" />
          <meta
            name="description"
            content="Papercups is an open-source live chat widget. Chat with your customers to improve conversions and customer satisfaction."
          ></meta>
        </Head>

        <NavMenu />

        <main className="flex-auto min-h-0">
          <Box mx="auto" style={{maxWidth: 960}} py={5} px={4}>
            <Flex mb={[5, 6]} mx={[0, -4]} flexDirection={['column', 'row']}>
              <Box pt={100} flex={1} mx={[0, 4]} mb={[4, 0]}>
                <Box mb={6}>
                  <H1>Connect and chat with customers from your website</H1>

                  <p className="leading-relaxed text-xl text-gray-700 font-light">
                    Open source customer messaging, built for startups and
                    enterprise alike.
                  </p>

                  <Flex my={3}>
                    <Box mr={2}>
                      <a
                        href="https://app.papercups.io/demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-white hover:bg-gray-100 text-base py-2 px-5 rounded border">
                          Demo
                        </button>
                      </a>
                    </Box>
                    <Box mr={2}>
                      <a
                        href="https://app.papercups.io/register?redirect=/account/getting-started"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-blue-500 hover:bg-blue-700 text-white text-base py-2 px-5 rounded">
                          Sign up for free
                        </button>
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
                  <ChatDemo />
                </Flex>
              </Box>
            </Flex>

            <Box mb={[4, 6]}>
              <Flex
                mb={4}
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <H2>One powerful dashboard</H2>
                <P>
                  Streamline customer support and feedback with our feature-rich
                  dashboard.
                </P>
              </Flex>

              <Box>
                {/* TODO: find better images/screenshots! */}
                <Image
                  sx={{width: '100%'}}
                  src="images/demo-conversations.png"
                />
              </Box>
            </Box>
            <Box mx={[4, 6]} pb={50}>
              <Flex
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <H2>Our customers</H2>

                <Box flex={1}>
                  <Flex
                    mx={-5}
                    justifyContent="space-between"
                    flexDirection={['column', 'row']}
                  >
                    <Box pt={60} flex={1} mx={[0, 4]}>
                      <img
                        style={{
                          width: '100%',
                          height: '30px',
                        }}
                        src="batch-logo.svg"
                      />
                    </Box>
                    <Box pt={60} mx={[0, 4]}>
                      <img
                        style={{
                          height: '35px',
                        }}
                        src="ycombinator-logo.svg"
                      />
                    </Box>
                    <Box pt={60} mx={[0, 4]}>
                      <img
                        style={{
                          height: '35px',
                        }}
                        src="posthog-logo.svg"
                      />
                    </Box>
                    <Box pt={68} mx={[0, 4]}>
                      <img
                        style={{
                          width: '100%',
                          height: '30px',
                        }}
                        src="pry-logo.svg"
                      />
                    </Box>
                  </Flex>
                  <Flex
                    mx={-3}
                    justifyContent="space-between"
                    mb={0}
                    flexDirection={['column', 'row']}
                  >
                    <Box pt={60} flex={1} mx={[0, 4]}>
                      <img
                        style={{
                          width: '100%',
                          height: '30px',
                        }}
                        src="quadranteye-logo.svg"
                      />
                    </Box>
                    <Box pt={60} flex={1} mx={[0, 4]}>
                      <img
                        style={{
                          width: '100%',
                          height: '30px',
                        }}
                        src="jovian-logo.svg"
                      />
                    </Box>
                    <Box pt={60} flex={1} mx={[0, 4]}>
                      <img
                        style={{
                          width: '100%',
                          height: '30px',
                        }}
                        src="cotter-logo.svg"
                      />
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>

            <Box className="border-b" mb={[5, 6]}></Box>

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
                <H3>Reply directly from Slack</H3>
                <P>
                  Directly talk to your users from a single Slack channel.
                  Remove the friction of having to login to another dashboard.
                  Set up our Slack integration in minutes.
                </P>
              </Box>
            </Flex>

            <Flex
              mb={[5, 6]}
              mx={[0, -4]}
              flexDirection={['column-reverse', 'row']}
            >
              <Box flex={1} mx={[0, 4]} mb={[4, 0]}>
                <H3>Brand and customize your widget</H3>
                <P>
                  Our widget is highly customizable. Change your color,
                  greetings, text and more through our simple UI without needing
                  any code.
                </P>
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
                <H3>Save your developers time</H3>
                <P>
                  Papercups is open source and made with a developer in mind. We
                  support HTML, React, React Native and Flutter integrations.
                  Our integration takes minutes to setup and if you can't do it
                  in minutes we'll hop on a zoom call and do it for you!
                </P>
              </Box>
            </Flex>

            <Flex justifyContent="center" mb={[4, 5]} mt={[6, 0]}>
              <H2>Papercups for Enterprise</H2>
            </Flex>

            <Flex
              mx={-3}
              justifyContent="space-between"
              mb={6}
              flexDirection={['column', 'row']}
            >
              <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
                <H3>Self-managed</H3>
                <P>
                  Papercups can be deployed in your cloud, for painless adoption
                  and onboarding. Whether it's AWS, Docker, or Heroku, we've got
                  you covered.
                </P>
              </Flex>
              <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
                <H3>Unlimited volume</H3>
                <P>
                  Papercups is built with Elixir on top of BEAM for incredible
                  scalability. This scalability extends to our open core pricing
                  model.
                </P>
              </Flex>
              <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
                <H3>Personalized support</H3>
                <P>
                  We can manage your deployment on your infrastructure. Get the
                  benefits of self-hosting with the reliability and scalability
                  of the cloud.
                </P>
              </Flex>
            </Flex>

            <Flex justifyContent="center" mb={[3, 4]} mt={[6, 0]}>
              <H2>Connect with us</H2>
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
              <H1>What's new?</H1>

              <Flex my={4} mx={-2}>
                <Box mx={2}>
                  <a
                    href="https://github.com/papercups-io/papercups"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white hover:bg-gray-100 text-base py-2 px-5 rounded border">
                      Find out on Github
                    </button>
                  </a>
                </Box>
                <Box mx={2}>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white text-base py-2 px-5 rounded"
                    onClick={Papercups.toggle}
                  >
                    Ask us!
                  </button>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </main>

        <footer
          className=""
          style={{flex: '0 0 auto', backgroundColor: '#001529'}}
        >
          <Flex
            mx="auto"
            py={5}
            px={4}
            sx={{justifyContent: 'space-between', maxWidth: 960}}
          >
            <Flex p={3} sx={{alignItems: 'center'}}>
              <p className="text-white pr-3">
                Backed by <b>Y Combinator</b>
              </p>

              <img
                style={{
                  width: '20px',
                  height: '20px',
                }}
                src="yc-logo.png"
              />
            </Flex>

            <Box p={3}>
              <a href="/privacy" className="white_link">
                Privacy
              </a>
            </Box>
          </Flex>
        </footer>

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
      </Flex>
    );
  }
}
