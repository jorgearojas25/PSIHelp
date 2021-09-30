import Core from './Core';
import Configuration from './Configuration';
import History from './History';
import Orders from './Orders';
import Payment from './Payment';
import Privacy from './PrivacyPolicy';
import Support from './Support';

export const stackScreens = [
  {
    id: 1,
    name: 'Home',
    children: Core,
    showHeader: false,
  },
  {
    id: 2,
    name: 'Configuration',
    children: Configuration,
    showHeader: false,
  },
  {
    id: 3,
    name: 'History',
    children: History,
    showHeader: false,
  },
  {
    id: 4,
    name: 'Orders',
    children: Orders,
    showHeader: false,
  },
  {
    id: 5,
    name: 'Payment',
    children: Payment,
    showHeader: false,
  },
  {
    id: 6,
    name: 'Privacy',
    children: Privacy,
    showHeader: false,
  },
  {
    id: 7,
    name: 'Support',
    children: Support,
    showHeader: false,
  },
];
