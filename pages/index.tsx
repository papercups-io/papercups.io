import Head from 'next/head';
import Link from 'next/link';
import {Box, Flex} from 'rebass';
import {RightCircleOutlined} from '../components/icons';
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
    <Layout style={{background: colors.white}}>
      <Head>
        <title>Papercups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header style={{background: 'transparent'}}>
        <Flex>
          <Box flex={1}>
            <Link href="/">
              <a>
                <img src="papercups.svg" style={{height: 50, width: 100}} />
              </a>
            </Link>
          </Box>

          <Box>
            <Menu style={{borderBottom: 'none'}} mode="horizontal">
              <Menu.Item style={{margin: '0 1em'}} key="home">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </Menu.Item>
              <Menu.Item style={{margin: '0 1em'}} key="github">
                <a
                  href="https://github.com/papercups-io/papercups"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </Menu.Item>
              <Menu.Item style={{margin: '0 1em'}} key="login">
                <a
                  href="https://app.papercups.io/login"
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
        <Box mx="auto" style={{maxWidth: 960}} py={6} px={4}>
          <Flex mb={[5, 6]} mx={[0, -4]} flexDirection={['column', 'row']}>
            <Box pt={100} flex={1} mx={[0, 4]} mb={[4, 0]}>
              <Box mb={6}>
                <Title level={1}>
                  Open Source Customer Messaging <br />
                  Built for Startups
                </Title>

                <Paragraph>
                  Join hundreds of companies using Papercups
                </Paragraph>

                <Flex my={3}>
                  <Box mr={3}>
                    <Button
                      type="primary"
                      size="large"
                      icon={<RightCircleOutlined />}
                    >
                      Get started for free
                    </Button>
                  </Box>
                  <Box>
                    <Button type="default" size="large">
                      Request a demo
                    </Button>
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
                  // minHeight: 320,
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

            <Box flex={1} mx={[0, 4]} my={[4, 0]}>
              <Title level={3}>Create amazing email campaigns</Title>
              <Paragraph>
                Quickly set up drip campaigns to keep in touch with your
                customers. Trigger emails to be sent on certain events, like
                signup or checkout.
              </Paragraph>
            </Box>
          </Flex>

          <Flex
            mb={[5, 6]}
            mx={[0, -4]}
            flexDirection={['column-reverse', 'row']}
          >
            <Box flex={1} mx={[0, 4]} mb={[4, 0]}>
              <Title level={3}>Chat directly with your users</Title>
              <Paragraph>
                Embed our chat feature directly in your website. Customize it as
                much as you'd like to match your existing designs.
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

      <Footer style={{backgroundColor: '#001529'}}>
        <Box p={5}>
          <Text style={{color: colors.white}}>
            Made with ❤️ in SF &amp; NYC
          </Text>
        </Box>
      </Footer>
    </Layout>
  );
}
