import React from 'react';
import {Box, Flex} from 'rebass';
import {ChatBuilder, ChatBody, ChatFooter} from '@papercups-io/chat-builder';

const config = {
  title: 'Welcome to Papercups!',
  subtitle: 'Ask us anything below',
  primaryColor: '#1890ff',
  accountId: 'eb504736-0f20-4978-98ff-1a82ae60b266',
  greeting:
    'Hi! This is a live demo of our custom chat builder. Feel free to send us a message :)',
};

const ChatDemo = () => {
  return (
    <ChatBuilder config={config}>
      {({config, state, scrollToRef, onSendMessage}) => {
        return (
          <Box
            sx={{
              height: 480,
              width: '100%',
              border: '1px solid rgb(230, 230, 230)',
              borderRadius: 4,
            }}
          >
            <Flex
              style={{
                background: '#fff',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                flex: 1,
              }}
            >
              <Box
                style={{
                  flex: 1,
                  overflowY: 'scroll',
                }}
              >
                <ChatBody
                  config={config}
                  state={state}
                  scrollToRef={scrollToRef}
                />
              </Box>

              <ChatFooter
                config={config}
                state={state}
                onSendMessage={onSendMessage}
              />
            </Flex>
          </Box>
        );
      }}
    </ChatBuilder>
  );
};

export default ChatDemo;
