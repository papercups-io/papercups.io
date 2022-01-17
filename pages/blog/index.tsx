import React from 'react';
import Link from 'next/link';
import {Box, Flex} from 'rebass';
import Layout from '../../components/layout';
import {H2} from '../../components/common';

export const BlogPost = ({post}: {post: any}) => {
  const {title, date, href, snippet, author = {}} = post;

  return (
    <Box p={4} className="border-b">
      <p className="text-gray-500 text-xs mb-3 uppercase">{date}</p>
      <Link href={href}>
        <a>
          <H2>{title}</H2>
        </a>
      </Link>

      <p className="text-base">{snippet}</p>

      <Flex my={4} sx={{justifyContent: 'space-between', alignItems: 'center'}}>
        <Flex sx={{alignItems: 'center'}}>
          <Box
            className="items-center justify-center rounded-full"
            style={{
              height: 40,
              width: 40,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: `url(${author.avatar})`,
            }}
          />

          <Box mx={3}>
            <p className="text-sm">{author.name}</p>
            <p className="text-xs text-gray-400">{author.position}</p>
          </Box>
        </Flex>

        {/* TODO: use proper link */}
        <Link href={href}>
          <a className="hover:bg-gray-50 hover:text-blue-500 opacity-80 hover:opacity-100 font-medium py-2 px-4 rounded inline-flex items-center transition-all">
            <span>Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 transform translate-y-px"
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
          </a>
        </Link>
      </Flex>
    </Box>
  );
};

export const Blog = () => {
  return (
    <Layout title="Blog">
      {getSortedPosts().map((post) => (
        <BlogPost key={post.date} post={post} />
      ))}
    </Layout>
  );
};

function getSortedPosts() {
  return [
    {
      title: 'Papercups is in maintenance mode',
      date: 'January 17, 2022',
      href: '/blog/papercups-maintenance',
      snippet:
        'As some of you might have seen Papercups is currently in maintenance mode',
      author: {
        name: 'Kam Leung',
        position: 'Cofounder and CEO',
        avatar:
          'https://ca.slack-edge.com/T0129C08QV8-U013SUTQB9A-ddd642397af2-512',
      },
    },
    {
      title: 'Announcing Papercups Functions',
      date: 'July 16, 2021',
      href: '/blog/papercups-functions',
      snippet:
        'How a series of pivots & failed experiments led to our latest feature.',
      author: {
        name: 'Kam Leung',
        position: 'Cofounder and CEO',
        avatar:
          'https://ca.slack-edge.com/T0129C08QV8-U013SUTQB9A-ddd642397af2-512',
      },
    },
    {
      title: 'Getting started with bash',
      date: 'May 21, 2021',
      href: '/blog/favorite-bash',
      snippet: 'Quick bash commands to try.',
      author: {
        name: 'Kam Leung',
        position: 'Cofounder and CEO',
        avatar:
          'https://ca.slack-edge.com/T0129C08QV8-U013SUTQB9A-ddd642397af2-512',
      },
    },
    {
      title: 'Is remote YC worth it?',
      date: 'March 24, 2021',
      href: '/blog/remote-yc',
      snippet:
        "Papercups went through YC summer of 2020. I've had a lot of friends and people reaching out asking about our experiences and was it worth it. They are mostly worried about two things how big YC has gotten and the remote nature of YC. We had the same worries and wanted to share my thoughts and experiences of it.",
      author: {
        name: 'Kam Leung',
        position: 'Cofounder and CEO',
        avatar:
          'https://ca.slack-edge.com/T0129C08QV8-U013SUTQB9A-ddd642397af2-512',
      },
    },
    {
      title: 'Lessons from StarCraft 2',
      date: 'December 14, 2020',
      href: '/blog/lessons-from-sc2-for-a-startup',
      snippet:
        'During the holidays I had some downtime and revisited Starcraft 2 (SC2). I played some matches and was relearning a lot of the basics and noticed a lot of parallels with starting a company and playing SC2. Thought this might be worth a share.',
      author: {
        name: 'Kam Leung',
        position: 'Cofounder and CEO',
        avatar:
          'https://ca.slack-edge.com/T0129C08QV8-U013SUTQB9A-ddd642397af2-512',
      },
    },
    {
      title: "Learning Elixir's `GenServer` with a real-world example",
      date: 'December 10, 2020',
      href: '/blog/genserver',
      snippet:
        "I started learning Elixir a few months ago, mostly through hacking on Papercups. I'm ashamed to say most of my Elixir education has been through trial and error, figuring things out as I go along. So this past week I decided to take some time off from Papercups to go a bit deeper into the language.",
      author: {
        name: 'Alex Reichert',
        position: 'Cofounder and CTO',
        avatar: 'https://i.imgur.com/dNy8biD.jpg',
      },
    },
    {
      title: 'What remote YC demo day looked like',
      date: 'December 8, 2020',
      href: '/blog/what-remote-demo-day-looked-like',
      snippet:
        'YC Summer 2020 was the first fully remote batch. The demo day format was a 1 minute pitch in semi alphabetical order over Zoom. Once the order was set we all memorized the 10-15 people going before us and got ready to present virtually.',
      author: {
        name: 'Kam Leung',
        position: 'Cofounder and CEO',
        avatar:
          'https://ca.slack-edge.com/T0129C08QV8-U013SUTQB9A-ddd642397af2-512',
      },
    },
    {
      title: 'Turning a maybe into a yes after the YC interview',
      date: 'October 15, 2020',
      href: '/blog/yc-application',
      snippet:
        'We applied to YC back in February under a different idea than Papercups (an open core Intercom alternative). It was supposed to be expedia but for booking ocean freight. Currently to make a freight booking you have to call multiple procurement teams at a shipping company...',
      author: {
        name: 'Kam Leung',
        position: 'Cofounder and CEO',
        avatar:
          'https://ca.slack-edge.com/T0129C08QV8-U013SUTQB9A-ddd642397af2-512',
      },
    },
    {
      title: 'Building an FAQ Chatbot',
      date: 'October 8, 2020',
      href: '/blog/chatbot',
      snippet:
        "We recently launched our open source Papercups FAQ chatbot in beta mode. It's a simple chatbot that you can “train” by feeding it questions and answers.",
      author: {
        name: 'Kam Leung',
        position: 'Cofounder and CEO',
        avatar:
          'https://ca.slack-edge.com/T0129C08QV8-U013SUTQB9A-ddd642397af2-512',
      },
    },
    {
      title: 'Hacktoberfest',
      date: 'October 1, 2020',
      href: '/blog/hacktoberfest',
      snippet:
        'The month of October happens to be “Hacktoberfest”, so we decided that for the next 31 days, our primary focus will be on the developer community around Papercups.',
      author: {
        name: 'Alex Reichert',
        position: 'Cofounder and CTO',
        avatar: 'https://i.imgur.com/dNy8biD.jpg',
      },
    },
    {
      title: 'Coming to Elixir from TypeScript',
      date: 'September 17, 2020',
      href: '/blog/elixir-noob',
      snippet:
        "We've been working with Elixir for about 2 months so far, and it's been quite fun. Coming from a background in mostly TypeScript/JavaScript and Ruby, I wasn't sure how approachable I would find it.",
      author: {
        name: 'Alex Reichert',
        position: 'Cofounder and CTO',
        avatar: 'https://i.imgur.com/dNy8biD.jpg',
      },
    },
    {
      title: 'Lessons from the launch',
      date: 'September 14, 2020',
      href: '/blog/launch',
      snippet:
        'We launched Papercups on Hacker News recently. In the YC community the Hacker News launch is a rite of passage following in the footsteps of companies like Dropbox and Gitlab. Originally we were worried about how it would be received but at the same time was excited about being able to show our product to a lot of like minded developers. We were very grateful for the feedback and wanted to share what we did and the lessons that we have learned.',
      author: {
        name: 'Kam Leung',
        position: 'Cofounder and CEO',
        avatar:
          'https://ca.slack-edge.com/T0129C08QV8-U013SUTQB9A-ddd642397af2-512',
      },
    },
    {
      title: 'Our Story',
      date: 'August 10, 2020',
      href: '/blog/story',
      snippet:
        'Kam and I met in SF around 6 years ago, and have been hacking on small projects together for the past couple years. Before Covid, we would spend many Sunday afternoons in coffee shops building prototypes of whatever our latest and greatest idea was… most of these fizzled out after a few weeks or so.',
      author: {
        name: 'Alex Reichert',
        position: 'Cofounder and CTO',
        avatar: 'https://i.imgur.com/dNy8biD.jpg',
      },
    },
  ];
}

export default Blog;
