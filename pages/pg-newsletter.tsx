import React, {PropsWithChildren} from 'react';
import {Box, Flex} from 'rebass';
import request from 'axios';
import {
  // beta
  H2,
} from '../components/common';
import Layout from '../components/layout';

const Text = ({
  children,
  className = '',
  style = {},
  danger = false,
}: PropsWithChildren<{className?: string; style?: any; danger?: boolean}>) => {
  return (
    <span
      className={`text-sm ${className} ${danger ? 'text-red-500' : ''}`}
      style={style}
    >
      {children}
    </span>
  );
};

const Paragraph = ({
  children,
  className = '',
  style = {},
}: PropsWithChildren<{className?: string; style?: any}>) => {
  return (
    <p className={`text-base leading-relaxed mb-4 ${className}`} style={style}>
      {children}
    </p>
  );
};

const DEFAULT_ERROR_MESSAGE =
  'Something went wrong. Please try again in a few minutes or contact us for help.';

const subscribe = async (email: string) => {
  return request.post('https://app.papercups.io/api/newsletters/pg/subscribe', {
    email,
  });
};

const PgNewsletter = () => {
  const [email, setEmail] = React.useState('');
  const [isPending, setPending] = React.useState(false);
  const [error, setErrorMessage] = React.useState<string | null>(null);
  const [hasSuccessfullySubscribed, setSuccessfullySubscribed] = React.useState(
    false
  );

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);

    subscribe(email)
      .then((res) => {
        if (res.data.ok) {
          setSuccessfullySubscribed(true);
        } else {
          const err = res.data.error || DEFAULT_ERROR_MESSAGE;

          setErrorMessage(err);
        }
      })
      .catch((err) => {
        console.error('Failed to subscribe:', err);

        setErrorMessage(DEFAULT_ERROR_MESSAGE);
      })
      .finally(() => setPending(false));
  };

  if (hasSuccessfullySubscribed) {
    return (
      <Layout width={560}>
        <Flex
          flexDirection="column"
          justify-content="center"
          paddingBottom="20px"
        >
          <H2>Thanks for subscribing!</H2>

          <Paragraph>
            You should start receiving the newsletter within 24 hours.
          </Paragraph>
        </Flex>
      </Layout>
    );
  }

  return (
    <Layout width={560}>
      <Flex
        flexDirection="column"
        justify-content="center"
        paddingBottom="20px"
      >
        <H2>Subscribe to the newsletter</H2>

        <Paragraph>
          Enter your email to receive one of Paul Graham's essays in your inbox
          on a daily basis.
        </Paragraph>

        <form onSubmit={handleSubscribe}>
          <Flex my={2}>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="me@company.com"
              onChange={handleChangeEmail}
            />

            <Box ml={1}>
              {/* TODO: handle loading/isPending state */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-400 text-white text-base py-2 px-5 rounded"
              >
                Subscribe
              </button>
            </Box>
          </Flex>
        </form>

        {error && (
          <Box my={3}>
            <Text danger>{error}</Text>
          </Box>
        )}
      </Flex>
    </Layout>
  );
};

export default PgNewsletter;
