import React, {PropsWithChildren} from 'react';
import {Box, Flex} from 'rebass';
import {
  // beta
  H1,
  H2,
  H3,
  H4,
} from '../components/common';
import FadeIn from '../components/FadeIn';
import Layout from '../components/layout';

const STARTER_PRICE = 49;
const LITE_PRICE = 99;
const TEAM_PRICE = 249;

const Text = ({
  children,
  className = '',
  style = {},
  strong = false,
}: PropsWithChildren<{className?: string; style?: any; strong?: boolean}>) => {
  return (
    <span
      className={`text-sm ${className} ${strong ? 'font-bold' : ''}`}
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
    <p
      className={`text-sm leading-relaxed mb-4 text-gray-800 dark:text-gray-200 ${className}`}
      style={style}
    >
      {children}
    </p>
  );
};

const CheckCircleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

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
    <div className="flex-1 m-2 p-4 border rounded shadow-md dark:border-gray-500">
      <H3>{title}</H3>
      <Paragraph style={{minHeight: 44}}>{description}</Paragraph>
      <Box my={3}>{cta}</Box>
      <Box style={{fontSize: 16}}>{pricing}</Box>
      <hr className="border-t border-gray-100 my-4" />
      {features}
    </div>
  );
};

export const FAQ = () => {
  return (
    <Flex flexDirection="column" justify-content="center" alignItems="center">
      <Box mb={4}>
        <H2>Why use Papercups?</H2>
      </Box>

      <Flex mx={-4} flexDirection={['column', 'row']}>
        <FadeIn delay={0}>
          <Box mx={4} sx={{flex: 1}}>
            <H4>Open source</H4>
            <Paragraph>
              We've built Papercups open source and in the public since day one.
              Our source code is available and accessible on GitHub so anyone
              can read it and verify what we do with your data.
            </Paragraph>
          </Box>
        </FadeIn>
        <FadeIn delay={100}>
          <Box mx={4} sx={{flex: 1}}>
            <H4>Cookie free</H4>
            <Paragraph>
              Papercups is built with privacy first. We don't use any cookies so
              you don't need the cookies consent banners in your chat widget.
            </Paragraph>
          </Box>
        </FadeIn>
        <FadeIn delay={200}>
          <Box mx={4} sx={{flex: 1}}>
            <H4>Reply from Slack</H4>
            <Paragraph>
              Our Slack integration lets you reply directly from Slack in a
              single channel. Other integrations spam your Slack with links to
              their website or open a new channel everytime.
            </Paragraph>
          </Box>
        </FadeIn>
        <FadeIn delay={300}>
          <Box mx={4} sx={{flex: 1}}>
            <H4>10 minute installation</H4>
            <Paragraph>
              Papercups is made by and for developers. We make sure that the
              installation process is frictionless for your development team so
              they can set it up quickly and go back to building their features.
            </Paragraph>
          </Box>
        </FadeIn>
      </Flex>
    </Flex>
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
            <button className="w-full border border-blue-500 hover:border-blue-400 text-blue-500 hover:text-blue-400 text-base py-2 px-5 rounded">
              Start my free trial
            </button>
          </a>
        }
        pricing={
          <Text>
            <Text strong>${STARTER_PRICE}</Text>/month
          </Text>
        }
        features={
          <>
            <Paragraph>Comes with:</Paragraph>

            <Paragraph>
              <li>2 seats included</li>
              <li>1,000 messages/month</li>
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
            <button className="w-full bg-blue-500 hover:bg-blue-400 text-white text-base py-2 px-5 rounded">
              Start my free trial
            </button>
          </a>
        }
        pricing={
          <Text>
            <Text strong>${LITE_PRICE}</Text>/month
          </Text>
        }
        features={
          <>
            <Paragraph>
              Everything in <Text strong>Starter</Text> plus:
            </Paragraph>

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
            <button className="w-full border border-blue-500 hover:border-blue-400 text-blue-500 hover:text-blue-400 text-base py-2 px-5 rounded">
              Start my free trial
            </button>
          </a>
        }
        pricing={
          <Text>
            <Text strong>${TEAM_PRICE}</Text>/month
          </Text>
        }
        features={
          <>
            <Paragraph>
              Everything in <Text strong>Lite</Text> plus:
            </Paragraph>

            <Paragraph>
              <li>10 seats included</li>
              <li>Unlimited data retention</li>
              <li>Multiple inboxes</li>
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
            <button className="w-full border border-blue-500 hover:border-blue-400 text-blue-500 hover:text-blue-400 text-base py-2 px-5 rounded">
              Contact sales
            </button>
          </a>
        }
        pricing={<Text strong>Custom pricing</Text>}
        features={
          <>
            <Paragraph>
              Everything in <Text strong>Team</Text> plus:
            </Paragraph>

            <Paragraph>
              <li>Unlimited seats</li>
              <li>End to End Encryption</li>
              <li>SSO via SAML 2.0</li>
              <li>Advanced access control policy</li>
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
        <H1>Get started with Papercups</H1>

        <Flex mx={-3} my={3} justifyContent="space-between">
          <FadeIn>
            <Flex mx={3} sx={{alignItems: 'center'}}>
              <CheckCircleIcon />
              <Text className="ml-1">14 day free trial</Text>
            </Flex>
          </FadeIn>
          <FadeIn delay={500}>
            <Flex mx={3} sx={{alignItems: 'center'}}>
              <CheckCircleIcon />
              <Text className="ml-1">No credit card required</Text>
            </Flex>
          </FadeIn>
          <FadeIn delay={1000}>
            <Flex mx={3} sx={{alignItems: 'center'}}>
              <CheckCircleIcon />
              <Text className="ml-1">Cancel anytime</Text>
            </Flex>
          </FadeIn>
        </Flex>
      </Flex>

      <div className="mb-20">
        <PricingOptions />
      </div>

      <div className="mb-8">
        <FAQ />
      </div>
    </Layout>
  );
};

export default Pricing;
