import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {Box, Flex} from 'rebass';
import {MDXProvider} from '@mdx-js/react';
import ChatWidget from '@papercups-io/chat-widget';
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

type Props = {children: any};
type State = any;

export default class Container extends React.Component<Props, State> {
  state = {
    h1: Title,
    h2: (props: any) => <Title level={2} {...props} />,
    h3: (props: any) => <Title level={3} {...props} />,
    p: Paragraph,
    hr: Divider,
  };

  render() {
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
                  <img
                    src="/papercups-v2.svg"
                    style={{height: 50, width: 100}}
                  />
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
          <Box mx="auto" style={{maxWidth: 800}} pt={5} px={4} pb={6}>
            <MDXProvider components={this.state}>
              {this.props.children}
            </MDXProvider>
          </Box>
        </Content>

        <Footer style={{backgroundColor: '#001529'}}>
          <Box p={5}>
            <Text style={{color: colors.white}}>
              Made with ❤️ in SF &amp; NYC
            </Text>
          </Box>
        </Footer>

        <ChatWidget
          title="Welcome to Papercups!"
          subtitle="Ask us anything in the chat window below 😊"
          primaryColor="#1890ff"
          accountId="eb504736-0f20-4978-98ff-1a82ae60b266"
        />
      </Layout>
    );
  }
}
