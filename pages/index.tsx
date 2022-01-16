import Head from 'next/head';
import {Component} from 'react';
import ReactGA from 'react-ga';
import posthog from 'posthog-js';
import {Box, Flex, Image} from 'rebass';
import {ChatWidget, Papercups} from '@papercups-io/chat-widget';

import {H1, H2, H3, P} from '../components/common';
import NavMenu from '../components/nav';
import FadeIn from '../components/FadeIn';

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

        <NavMenu dark />

        <main className="flex-auto min-h-0">
          {/* Hero section */}
          <div className="dark bg-gray-900 pb-16">
            <div className="max-w-7xl mx-auto px-4 pt-12 pb-6 dark:text-white">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 pt-24 sm:pt-36 pr-12">
                  <Box className="mb-6">
                    <H1 className="font-bold text-4xl sm:text-6xl mb-5">
                      Streamline communication with your customers
                    </H1>

                    <p className="leading-relaxed text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                      Coordinate and reply to messages over chat, email, Slack,
                      and SMS. A privacy-focused, open-source alternative to
                      Intercom, Drift, and Zendesk.
                    </p>

                    <Flex my={4}>
                      <Box mr={2}>
                        <a
                          href="https://app.papercups.io/demo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="bg-white hover:bg-gray-100 text-black text-base py-2 px-5 rounded border">
                            See the demo
                          </button>
                        </a>
                      </Box>
                      <Box mr={2}>
                        <a
                          href="https://app.papercups.io/register"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="flex items-center bg-blue-500 hover:bg-blue-400 border border-blue-500 hover:border-blue-400 text-white text-base py-2 px-5 rounded">
                            <span className="mr-2">Get started for free</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </button>
                        </a>
                      </Box>
                    </Flex>
                  </Box>
                </div>

                <div style={{flex: 1.6}}>
                  <div className="hidden sm:flex flex-col justify-center items-center py-16 sm:py-0">
                    <FadeIn direction="left">
                      <Image
                        className="w-full rounded"
                        style={{minWidth: 720, minHeight: 680}}
                        src="papercups-hero.svg"
                      />
                    </FadeIn>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Customers section */}
          <div className="dark pt-16 pb-32 border-gray-800 bg-gray-900">
            <div className="max-w-5xl mx-auto flex justify-center items-center flex-col">
              <H2 className="dark:text-white">Our customers</H2>

              <div className="flex-1">
                <Flex
                  mx={-4}
                  justifyContent="center"
                  flexDirection={['column', 'row']}
                >
                  <Box pt={60} mx={[0, 4]}>
                    <Image
                      sx={{width: '100%', height: '30px'}}
                      src="batch-logo.svg"
                    />
                  </Box>
                  <Box pt={60} mx={[0, 4]}>
                    <Image sx={{height: '35px'}} src="ycombinator-logo.svg" />
                  </Box>
                  <Box pt={60} mx={[0, 4]}>
                    <Image sx={{height: '35px'}} src="posthog-logo.svg" />
                  </Box>
                  <Box pt={68} mx={[0, 4]}>
                    <Image
                      sx={{width: '100%', height: '30px'}}
                      src="pry-logo.svg"
                    />
                  </Box>
                </Flex>
                <Flex
                  mx={-4}
                  mb={0}
                  justifyContent="center"
                  flexDirection={['column', 'row']}
                >
                  <Box pt={60} mx={[0, 4]}>
                    <Image
                      sx={{width: '100%', height: '30px'}}
                      src="quadranteye-logo.svg"
                    />
                  </Box>
                  <Box pt={60} mx={[0, 4]}>
                    <Image
                      sx={{width: '100%', height: '30px'}}
                      src="jovian-logo.svg"
                    />
                  </Box>
                  <Box pt={60} mx={[0, 4]}>
                    <Image
                      sx={{width: '100%', height: '30px'}}
                      src="cotter-logo.svg"
                    />
                  </Box>
                </Flex>
              </div>
            </div>
          </div>

          {/* Dashboard highlight section */}
          <div className="">
            <div className="max-w-5xl mx-auto px-4 pt-24 pb-16 mb-16 border-b">
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
                <FadeIn delay={200}>
                  <Image
                    sx={{
                      width: '100%',
                      borderRadius: 8,
                      boxShadow: 'rgb(0 0 0 / 16%) 0px 5px 40px',
                    }}
                    src="dashboard.png"
                  />
                </FadeIn>
              </Box>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4">
            <Flex
              mb={[5, 6]}
              mx={[0, -4]}
              alignItems="center"
              flexDirection={['column-reverse', 'row']}
            >
              <Box flex={1} mx={[0, 4]} mb={[4, 0]}>
                <FadeIn direction="right" delay={200}>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <Image
                      sx={{
                        width: '100%',
                        height: '100%',
                        minHeight: 320,
                        borderRadius: 4,
                        boxShadow: 'rgb(0 0 0 / 16%) 0px 5px 40px',
                      }}
                      src="reply-from-slack.gif"
                    />
                  </Flex>
                </FadeIn>
              </Box>

              <Box flex={1} mx={[0, 4]} my={[4, 0]}>
                <H3>Reply from where you work</H3>
                <P>
                  You can reply to conversations from Slack, our dashboard, or
                  our mobile app. Remove the friction of having to log in to
                  another dashboard.
                </P>
              </Box>
            </Flex>

            <Flex
              mb={[5, 6]}
              mx={[0, -4]}
              alignItems="center"
              flexDirection={['column', 'row']}
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
                <FadeIn direction="left" delay={200}>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <Image
                      sx={{
                        width: '100%',
                        height: '100%',
                        minHeight: 320,
                      }}
                      src="customize.gif"
                    />
                    {/* <ChatDemo /> */}
                  </Flex>
                </FadeIn>
              </Box>
            </Flex>

            <Flex
              mb={[5, 6]}
              mx={[0, -4]}
              alignItems="center"
              flexDirection={['column-reverse', 'row']}
            >
              <Box flex={1} mx={[0, 4]}>
                <FadeIn direction="right" delay={200}>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <Image
                      sx={{
                        width: '100%',
                        height: '100%',
                        minHeight: 320,
                        borderRadius: 4,
                        boxShadow: 'rgb(0 0 0 / 16%) 0px 5px 40px',
                      }}
                      src="papercups-js.png"
                    />
                  </Flex>
                </FadeIn>
              </Box>
              <Box flex={1} mx={[0, 4]} mb={[4, 0]}>
                <H3>Save your developers time</H3>
                <P>
                  Papercups is open source and made with a developer in mind. We
                  support HTML, React, React Native and Flutter integrations.
                  Our integration takes minutes to setup and if you can't do it
                  in minutes we'll hop on a zoom call and do it for you!
                </P>
              </Box>
            </Flex>
          </div>

          <div className="dark bg-gray-900 py-24">
            <div className="max-w-5xl mx-auto px-4">
              <Flex justifyContent="center" mb={[4, 5]} mt={[6, 0]}>
                <H2>Papercups for Enterprise</H2>
              </Flex>

              <Flex
                mx={-3}
                justifyContent="space-between"
                mb={6}
                flexDirection={['column', 'row']}
              >
                <FadeIn delay={100}>
                  <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
                    <H3>Self-managed</H3>
                    <P>
                      Papercups can be deployed in your cloud, for painless
                      adoption and onboarding. Whether it's AWS, Docker, or
                      Heroku, we've got you covered.
                    </P>
                  </Flex>
                </FadeIn>
                <FadeIn delay={200}>
                  <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
                    <H3>Unlimited volume</H3>
                    <P>
                      Papercups is built with Elixir on top of BEAM for
                      incredible scalability. This scalability extends to our
                      open core pricing model.
                    </P>
                  </Flex>
                </FadeIn>
                <FadeIn delay={300}>
                  <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
                    <H3>Personalized support</H3>
                    <P>
                      We can manage your deployment on your infrastructure. Get
                      the benefits of self-hosting with the reliability and
                      scalability of the cloud.
                    </P>
                  </Flex>
                </FadeIn>
              </Flex>

              <Flex
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
                      <button className="inline-flex h-10 items-center justify-center bg-white hover:bg-gray-100 text-black text-base py-2 px-5 rounded border">
                        <img src="github-v1.svg" className="h-full mr-2" />
                        <span>Find out on Github</span>
                      </button>
                    </a>
                  </Box>
                  <Box mx={2}>
                    <button
                      className="h-10 bg-blue-500 hover:bg-blue-400 text-white text-base py-2 px-5 rounded"
                      onClick={Papercups.toggle}
                    >
                      Ask us!
                    </button>
                  </Box>
                </Flex>
              </Flex>
            </div>
          </div>
        </main>

        <footer className="bg-gray-800 flex-0">
          <div className="max-w-5xl mx-auto px-4">
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

        <ChatWidget
          token="eb504736-0f20-4978-98ff-1a82ae60b266"
          inbox="364b1871-6db5-4bc0-9a88-994e06adbda6"
          title="Welcome to Papercups!"
          subtitle="Ask us anything in the chat window below 😊"
          greeting="Hi there! Send us a message and we'll get back to you as soon as we can. In the meantime, check out our [demo](https://app.papercups.io/demo)!"
          emailInputPlaceholder="What's your email address?"
          newMessagesNotificationText="See new messages"
          primaryColor="#1890ff"
          iconVariant="filled"
          requireEmailUpfront
          showAgentAvailability
          popUpInitialMessage={8000}
        />
      </Flex>
    );
  }
}
