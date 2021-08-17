import {Box, Flex} from 'rebass';
import {Papercups} from '@papercups-io/chat-widget';
import {
  // beta
  H1,
  H2,
  H3,
  P as Paragraph,
} from '../components/common';
import Layout from '../components/layout';

export const Storytime = () => {
  const displayDemoAsGif = true; // TODO

  return (
    <Layout title="Storytime" width={960}>
      <Box pt={80} mx={[0, 4]} mb={5}>
        <Box mb={5} sx={{textAlign: 'center'}}>
          <H2>View and chat with your users in real time.</H2>

          <Paragraph>
            Open source customer messaging with built-in screen sharing through
            the browser. Get started in minutes.
          </Paragraph>

          <Flex my={3} sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Box mr={2}>
              <a
                href="https://github.com/papercups-io/papercups"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white hover:bg-gray-100 text-base py-2 px-5 rounded border">
                  GitHub
                </button>
              </a>
            </Box>
            <Box mr={2}>
              <a
                href="https://app.papercups.io/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center bg-blue-500 hover:bg-blue-400 text-white text-base py-2 px-5 rounded">
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
      </Box>

      <Box mx={[0, 4]} mb={6}>
        <Flex
          alignItems="center"
          justifyContent="center"
          style={{
            width: '100%',
            height: 400,
          }}
        >
          {displayDemoAsGif ? (
            <img
              style={{
                width: '100%',
                boxShadow: '0 24px 48px rgba(17, 16, 62, 0.12)',
              }}
              src="https://user-images.githubusercontent.com/5264279/96898977-56c27d00-145e-11eb-907b-ca8db13a0fa0.gif"
            />
          ) : (
            <iframe
              src="https://player.vimeo.com/video/471072025?autoplay=1&loop=1&muted=1"
              style={{boxShadow: '0 24px 48px rgba(17, 16, 62, 0.12)'}}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          )}
        </Flex>
      </Box>

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
              src="online-collab.svg"
            />
          </Flex>
        </Box>
        <Box flex={1} mx={[0, 4]} my={[4, 0]}>
          <H3>View and collaborate in real time</H3>
          <Paragraph>
            Watch how your users are interacting with your website and chat with
            them in real time. See exactly what they're seeing and help them
            with anything they need.
          </Paragraph>
        </Box>
      </Flex>

      <Flex mb={[5, 6]} mx={[0, -4]} flexDirection={['column-reverse', 'row']}>
        <Box flex={1} mx={[0, 4]} my={[4, 0]}>
          <H3>Built with security in mind</H3>
          <Paragraph>
            Password inputs, iframes, and other sensitive data are blocked by
            default. Customize which elements are blocked with simple CSS class
            tags to protect user privacy.
          </Paragraph>
        </Box>

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
              src="secure-v2.svg"
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
              src="online-message.svg"
            />
          </Flex>
        </Box>

        <Box flex={1} mx={[0, 4]} my={[4, 0]}>
          <H3>Chat directly with your users</H3>
          <Paragraph>
            Convert more website visitors into customers with real-time chat.
            Don't lose out on prospects because of unanswered questions!
          </Paragraph>
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
          <Paragraph>
            Papercups can be deployed in your cloud, for painless adoption and
            onboarding. Whether it's AWS, Docker, or Heroku, we've got you
            covered.
          </Paragraph>
        </Flex>
        <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
          <H3>Unlimited volume</H3>
          <Paragraph>
            Papercups is built with Elixir on top of BEAM for incredible
            scalability. This scalability extends to our open core pricing
            model.
          </Paragraph>
        </Flex>
        <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
          <H3>Personalized support</H3>
          <Paragraph>
            We can manage your deployment on your infrastructure. Get the
            benefits of self-hosting with the reliability and scalability of the
            cloud.
          </Paragraph>
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
              className="bg-blue-500 hover:bg-blue-400 text-white text-base py-2 px-5 rounded"
              onClick={Papercups.toggle}
            >
              Ask us!
            </button>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Storytime;
