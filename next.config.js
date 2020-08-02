// @ts-check

const rehypePrism = require('@mapbox/rehype-prism');
const emoji = require('remark-emoji');
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [emoji],
    rehypePlugins: [rehypePrism],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
