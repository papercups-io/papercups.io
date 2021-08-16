import {PropsWithChildren} from 'react';

import Button from 'antd/lib/button';
import Carousel from 'antd/lib/carousel';
import Divider from 'antd/lib/divider';
import Input from 'antd/lib/input';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Modal from 'antd/lib/modal';
import Select from 'antd/lib/select';
import Spin from 'antd/lib/spin';
import Table from 'antd/lib/table';
import Tooltip from 'antd/lib/tooltip';
import Typography from 'antd/lib/typography';

import {blue, green, red, gold, grey} from '@ant-design/colors';

const {Title, Text, Paragraph} = Typography;
const {Header, Content, Footer, Sider} = Layout;

export const colors = {
  white: '#fff',
  black: '#000',
  primary: blue[5],
  green: green[5],
  red: red[5],
  gold: gold[5],
  blue: blue, // expose all blues
  gray: grey, // expose all grays
};

export const H1 = ({
  children,
  className = '',
}: PropsWithChildren<{className?: string}>) => {
  return <h1 className={`text-5xl font-bold mb-4 ${className}`}>{children}</h1>;
};

export const H2 = ({
  children,
  className = '',
}: PropsWithChildren<{className?: string}>) => {
  return <h2 className={`text-3xl font-bold mb-4 ${className}`}>{children}</h2>;
};

export const H3 = ({
  children,
  className = '',
}: PropsWithChildren<{className?: string}>) => {
  return <h3 className={`text-2xl font-bold mb-4 ${className}`}>{children}</h3>;
};

export const P = ({
  children,
  className = '',
}: PropsWithChildren<{className?: string}>) => {
  return <p className={`text-base mb-4 ${className}`}>{children}</p>;
};

export {
  // Typography
  Title,
  Text,
  Paragraph,
  // Layout
  Content,
  Footer,
  Layout,
  Header,
  Sider,
  // Components
  Button,
  Carousel,
  Divider,
  Input,
  Menu,
  Modal,
  Select,
  Spin,
  Table,
  Tooltip,
};
