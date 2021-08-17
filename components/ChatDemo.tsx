import React from 'react';
import {Box, Flex} from 'rebass';
import {ChatBuilder} from '@papercups-io/chat-builder';

const config = {
  title: 'Welcome to Papercups!',
  subtitle: 'Ask us anything below',
  primaryColor: '#1890ff',
  accountId: 'eb504736-0f20-4978-98ff-1a82ae60b266',
  greeting:
    'Hi! This is a live demo of our custom chat builder. Feel free to send us a message :)',
};

const Header = ({
  title = 'Welcome to Papercups!',
  color = 'rgb(24, 144, 255)',
}) => {
  return (
    <div
      className="p-4 text-white"
      style={{
        background: color,
        transition: 'background 0.4s ease',
      }}
    >
      <h2 className="text-xl my-2 text-white font-medium">{title}</h2>
      <p className="text-white text-sm text-opacity-90">
        Questions? Feedback? Let us know below!
      </p>
    </div>
  );
};

const CustomerMessage = ({message, color, isNextSameSender}: any) => {
  return (
    <div
      style={{
        display: 'flex',
        paddingBottom: isNextSameSender ? 8 : 16,
        paddingLeft: 48,
        paddingRight: 0,
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          fontSize: 14,
          borderRadius: 5,
          padding: '12px 16px',
          background: color || 'rgb(24, 144, 255)',
          color: '#fff',
          whiteSpace: 'pre-wrap',
          transition: 'background 0.4s ease',
        }}
      >
        {message.body}
      </div>
    </div>
  );
};

const AgentMessage = ({message, isNextSameSender}: any) => {
  const profilePhotoUrl =
    message.user?.profile_photo_url ||
    'https://avatars.slack-edge.com/2021-01-13/1619416452487_002cddd7d8aea1950018_192.png';
  const shouldDisplayAvatar = !isNextSameSender;

  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        paddingBottom: isNextSameSender ? 8 : 16,
        paddingLeft: 44,
        paddingRight: 48,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
      }}
    >
      {shouldDisplayAvatar && (
        <div
          style={{
            height: 32,
            width: 32,
            position: 'absolute',
            left: 0,
            bottom: 20,

            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',

            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${profilePhotoUrl})`,
          }}
        />
      )}

      <div
        style={{
          fontSize: 14,
          borderRadius: 5,
          padding: '12px 16px',
          background: 'rgb(245, 245, 245)',
          color: 'rgba(0,0,0,.65)',
          whiteSpace: 'pre-wrap',
        }}
      >
        {message.body}
      </div>
    </div>
  );
};

const Body = ({state, color, scrollToRef}) => {
  const {customerId, messages = []} = state;

  return (
    <div className="p-4">
      {messages.map((message: any, idx: number) => {
        const isCustomer =
          message.customer_id === customerId ||
          (!!message.sent_at && message.type === 'customer');
        const next = messages[idx + 1];
        const isNextMessageCustomer =
          next &&
          (next.customer_id === customerId ||
            (!!next.sent_at && next.type === 'customer'));
        const isNextSameSender = isCustomer === isNextMessageCustomer;

        if (isCustomer) {
          return (
            <CustomerMessage
              key={message.id || idx}
              message={message}
              color={color}
              isNextSameSender={isNextSameSender}
            />
          );
        } else {
          return (
            <AgentMessage
              key={message.id || idx}
              message={message}
              isNextSameSender={isNextSameSender}
            />
          );
        }
      })}

      <div key="scroll-el" ref={scrollToRef} />
    </div>
  );
};

const ChatFooter = ({config, onSendMessage}) => {
  const [body, setMessageBody] = React.useState('');
  const {newMessagePlaceholder = 'Start typing...'} = config;

  const handleChange = (e: any) => setMessageBody(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSendMessage({body});
    setMessageBody('');
  };

  return (
    <div
      className="p-2 border-t"
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 100px 0px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          className="border-none w-full p-2 outline-none text-sm text-gray-700"
          style={{
            boxSizing: 'border-box',
          }}
          value={body}
          placeholder={newMessagePlaceholder}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

const ChatDemo = ({
  height,
  width,
}: {
  height?: number | string;
  width?: number | string;
}) => {
  const colors = [
    '#3B82F6',
    '#6366F1',
    '#8B5CF6',
    '#EC4899',
    '#EF4444',
    '#F59E0B',
    '#10B981',
  ];
  const titles = [
    'Welcome to Papercups 👋',
    // 'Welcome to Papercups 👋🏽',
    // 'Welcome to Papercups 👋🏼',
    // 'Welcome to Papercups 👋🏾',
    // 'Welcome to Papercups 👋🏿',
  ];

  const [primaryColor, setPrimaryColor] = React.useState(colors[0]);
  const [title, setHeaderTitle] = React.useState(titles[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const idx = colors.indexOf(primaryColor);

      setPrimaryColor(colors[(idx + 1) % colors.length]);
      setHeaderTitle(titles[(idx + 1) % titles.length]);
    }, 2000);

    return () => clearInterval(interval);
  }, [colors, primaryColor]);

  return (
    <ChatBuilder config={config}>
      {({config, state, scrollToRef, onSendMessage}) => {
        return (
          <Box
            className="border rounded"
            sx={{
              height: height || 560,
              width: width || 376,
              overflow: 'hidden',
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
              <Header title={title} color={primaryColor} />

              <Box
                style={{
                  flex: 1,
                  overflowY: 'scroll',
                }}
              >
                <Body
                  color={primaryColor}
                  state={state}
                  scrollToRef={scrollToRef}
                />
              </Box>

              <ChatFooter config={config} onSendMessage={onSendMessage} />
            </Flex>
          </Box>
        );
      }}
    </ChatBuilder>
  );
};

export default ChatDemo;
