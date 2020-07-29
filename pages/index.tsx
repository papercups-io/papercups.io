import Head from 'next/head';
import Link from 'next/link';
import { Box, Flex } from 'rebass';
import { RightCircleOutlined } from '../components/icons';

import ChatWidget from '@papercups-io/chat-widget';
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

export default function Home() {
  return (
    <Layout style={{ background: colors.white }}>
      <Head>
        <title>Papercups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header style={{ background: 'transparent' }}>
        <Flex>
          <Box flex={1}>
            <Link href="/">
              <a>
                <img src="papercups.svg" style={{ height: 50, width: 100 }} />
              </a>
            </Link>
          </Box>

          <Box>
            <Menu style={{ borderBottom: 'none' }} mode="horizontal">
              <Menu.Item style={{ margin: '0 1em' }} key="home">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </Menu.Item>
              <Menu.Item style={{ margin: '0 1em' }} key="github">
                <a
                  href="https://github.com/papercups-io/papercups"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </Menu.Item>
              <Menu.Item style={{ margin: '0 1em' }} key="Sign up">
                <a
                  href="https://app.papercups.io/register"
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

        <Box mx="auto" style={{ maxWidth: 960 }} py={6} px={4}>
          <Flex mb={[5, 6]} mx={[0, -4]} flexDirection={['column', 'row']}>
            <Box pt={100} flex={1} mx={[0, 4]} mb={[4, 0]}>
              <Box mb={6}>
                <Title level={1}>
                  Open Source Customer Messaging <br />
                  Built for Startups
            </Title>

                <Paragraph>Join hundreds of companies using Papercups</Paragraph>

                <Flex my={3}>
                  <Box mr={3}>

                    <a
                      href="https://app.papercups.io/register"
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
                  <Box>
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
                  // minHeight: 320,
                }}
              >
                <img style={{
                  width: '100%',
                  height: '100%',
                  minHeight: 320,

                }}
                  src="chatting.svg" />
              </Flex>
            </Box>
          </Flex>

          <Flex
            mb={[5, 6]}
            mx={[0, -4]}
            flexDirection={['column', 'row']}
          >
            <Box flex={1} mx={[0, 4]} mb={[4, 0]}>

              <Flex
                alignItems="center"
                justifyContent="center"
                style={{
                  // minHeight: 320,
                  width: '100%',
                  height: '100%',
                }}
              >
                <img style={{
                  width: '100%',
                  height: '100%',
                  minHeight: 320,

                }}
                  src="setup.svg" />
              </Flex>
            </Box>

            <Box flex={1} mx={[0, 4]} my={[4, 0]}>
              <Title level={3}>Chat directly with your users</Title>
              <Paragraph>
                Embed our chat feature directly in your website. Customize it as
                much as you'd like to match your existing designs.
              </Paragraph>
            </Box>
          </Flex>


          <Flex mb={[5, 6]} mx={[0, -4]} flexDirection={['column-reverse', 'row']}>
            <Box flex={1} mx={[0, 4]} mb={[4, 0]}>
              <Title level={3}>Highly customizable widget</Title>
              <Paragraph>
                We let you easily setup the widget as well as providing a React component
                for easy customization.
              </Paragraph>
            </Box>

            <Box flex={1} mx={[0, 4]}>
              <Flex
                alignItems="center"
                justifyContent="center"
                style={{
                  // minHeight: 320,
                  width: '100%',
                  height: '100%',
                }}
              >
                <img style={{
                  width: '100%',
                  height: '100%',
                  minHeight: 320,

                }}
                  src="customize.svg" />
              </Flex>
            </Box>
          </Flex>
          <Flex mb={[5, 6]} mx={[0, -4]} flexDirection={['column', 'row']}>

            <Box flex={1} mx={[0, 4]}>
              <Flex
                alignItems="center"
                justifyContent="center"
                style={{
                  // minHeight: 320,
                  width: '100%',
                  height: '100%',
                }}
              >
                <img style={{
                  width: '100%',
                  height: '100%',
                  minHeight: 320,

                }}
                  src="secure.svg" />
              </Flex>
            </Box>
            <Box pt={100} flex={1} mx={[0, 4]} mb={[4, 0]}>
              <Title level={3}>Integrate with your favorite tools</Title>
              <Paragraph>
                Connect Papercups to Slack, Airtable, Gmail, and many more of
                your favorite tools. Do you want to connect to a platform we
                don't currently support? Get in touch!
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
                benefits of self-hosting with the reliability and scalability of
                the cloud.
              </Paragraph>
            </Flex>
          </Flex>

          <Flex
            mb={5}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Title level={1}>What's new?</Title>

            <Box my={4}>
              <Button size="large">Find out on Github</Button>
            </Box>
          </Flex>
        </Box>
      </Content>

      <ChatWidget
        title='Welcome to Papercups!'
        subtitle='Ask us anything in the chat window below 😊'
        primaryColor='#13c2c2'
        accountId='eb504736-0f20-4978-98ff-1a82ae60b266'
      />

      <Footer style={{ backgroundColor: '#001529' }}>
        <Box p={5}>
          <Text style={{ color: colors.white }}>
            Made with ❤️ in SF &amp; NYC
          </Text>
        </Box>
      </Footer>
    </Layout>
  );
}
