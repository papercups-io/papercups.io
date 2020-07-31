import Button from 'antd/lib/button';
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
  Divider,
  Input,
  Menu,
  Modal,
  Select,
  Spin,
  Table,
  Tooltip,
};
