import React from 'react';
import {Box, Flex} from 'rebass';
import request from 'axios';
import {Button, Input, Paragraph, Text, Title} from '../components/common';
import Layout from '../components/layout';

const DEFAULT_ERROR_MESSAGE =
  'Something went wrong. Please try again in a few minutes or contact us for help.';

const subscribe = async (email: string) => {
  return request.post(
    'https://alex-papercups-staging.herokuapp.com/api/newsletters/pg/subscribe',
    {email}
  );
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
          <Title level={1}>Thanks for subscribing!</Title>

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
        <Title level={1}>Subscribe to the newsletter</Title>

        <Paragraph>
          Enter your email to receive one of Paul Graham's essays in your inbox
          on a daily basis.
        </Paragraph>

        <form onSubmit={handleSubscribe}>
          <Flex my={2}>
            <Input
              id="email"
              name="email"
              type="email"
              size="large"
              placeholder="me@company.com"
              onChange={handleChangeEmail}
            />
            <Box ml={1}>
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                loading={isPending}
              >
                Subscribe
              </Button>
            </Box>
          </Flex>
        </form>

        {error && (
          <Box my={3}>
            <Text type="danger">{error}</Text>
          </Box>
        )}
      </Flex>
    </Layout>
  );
};

export default PgNewsletter;
