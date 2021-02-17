import React from 'react';
import {Box, Flex} from 'rebass';
import {
  colors,
  Button,
  Divider,
  Paragraph,
  Text,
  Title,
} from '../components/common';
import {CheckCircleTwoTone} from '../components/icons';
import Layout from '../components/layout';

const PricingCard = ({
  title,
  description,
  cta,
  pricing,
  features,
}: {
  title: string;
  description: string;
  cta: React.ReactElement;
  pricing: React.ReactElement;
  features: React.ReactElement;
}) => {
  return (
    <Box
      m={2}
      p={3}
      style={{
        flex: 1,
        border: '1px solid #f5f5f5',
        borderRadius: 4,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 8px',
      }}
    >
      <Title level={3}>{title}</Title>
      <Paragraph style={{minHeight: 44}}>{description}</Paragraph>

      <Box my={3}>{cta}</Box>

      <Box style={{fontSize: 16}}>{pricing}</Box>

      <Divider />

      {features}
    </Box>
  );
};

export const PricingOptions = () => {
  return (
    <Flex mx={-2} flexDirection={['column', 'row']}>
      <PricingCard
        title="Starter"
        description="Basic live chat and inbox to get you started."
        cta={
          <a
            href="https://app.papercups.io/register?redirect=/account/getting-started&utm_source=pricing_page&plan=Starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="primary" size="large" block ghost>
              Create free account
            </Button>
          </a>
        }
        pricing={
          <Text>
            <Text strong>$0</Text> forever
          </Text>
        }
        features={
          <>
            <Paragraph>Comes with:</Paragraph>

            <Paragraph>
              <li>2 seats included</li>
              <li>100,000 messages</li>
              <li>30 day message retention</li>
              <li>Customizable chat widget</li>
            </Paragraph>
          </>
        }
      />
      <PricingCard
        title="Lite"
        description="Essential chat functionality for your business."
        cta={
          <a
            href="https://app.papercups.io/register?redirect=/account/getting-started&utm_source=pricing_page&plan=Lite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="primary" size="large" block>
              Start my free trial
            </Button>
          </a>
        }
        pricing={
          <Text>
            <Text strong>$34</Text>/month
          </Text>
        }
        features={
          <>
            Everything in <Text strong>Starter</Text> plus:
            <Paragraph>
              <li>4 seats included</li>
              <li>Unlimited messages</li>
              <li>3 months data retention</li>
              <li>Private notes</li>
              <li>Reply from Slack</li>
            </Paragraph>
          </>
        }
      />
      <PricingCard
        title="Team"
        description="Supercharge your support, sales, and marketing."
        cta={
          <a
            href="https://app.papercups.io/register?redirect=/billing&utm_source=pricing_page&plan=Team"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="primary" size="large" block ghost>
              Start my free trial
            </Button>
          </a>
        }
        pricing={
          <Text>
            <Text strong>$94</Text>/month
          </Text>
        }
        features={
          <>
            <Paragraph>
              Everything in <Text strong>Starter</Text> plus:
            </Paragraph>

            <Paragraph>
              <li>10 seats included</li>
              <li>Unlimited data retention</li>
              <li>Website screen sharing</li>
              <li>Webhooks</li>
              <li>Priority support</li>
            </Paragraph>
          </>
        }
      />

      <PricingCard
        title="Enterprise"
        description="Advanced workflows, security, and support."
        cta={
          <a href="mailto:founders@papercups.io?Subject=Papercups Enterprise Edition">
            <Button type="primary" size="large" block ghost>
              Contact sales
            </Button>
          </a>
        }
        pricing={<Text>Custom pricing</Text>}
        features={
          <>
            <Paragraph>
              Everything in <Text strong>Team</Text> plus:
            </Paragraph>

            <Paragraph>
              <li>Unlimited seats</li>
              <li>On premise deployment</li>
              <li>Custom integrations</li>
            </Paragraph>
          </>
        }
      />
    </Flex>
  );
};

const Pricing = () => {
  return (
    <Layout width={1200}>
      <Flex
        flexDirection="column"
        justify-content="center"
        alignItems="center"
        paddingBottom="20px"
      >
        <Title level={1}>Get started with Papercups</Title>

        <Flex mx={-3} mb={3} justifyContent="space-between">
          <Box mx={3}>
            <CheckCircleTwoTone style={{marginRight: 8}} />
            30 day free trial
          </Box>
          <Box mx={3}>
            <CheckCircleTwoTone style={{marginRight: 8}} />
            No credit card required
          </Box>
          <Box mx={3}>
            <CheckCircleTwoTone style={{marginRight: 8}} />
            Cancel anytime
          </Box>
        </Flex>
      </Flex>
      <PricingOptions />
    </Layout>
  );
};

export default Pricing;
