import React from 'react';

import EthHashInfo from './index';
import { EllipsisMenuItem } from '../..';

export default {
  title: 'Ethereum/Eth hash Info',
  component: EthHashInfo,
  parameters: {
    componentSubtitle: 'Display Address/Tx information.',
  },
};

const hash = '0x69904ff6d6100799344E5C9A2806936318F6ba4f';

export const Address = (): React.ReactElement => <EthHashInfo hash={hash} />;

export const WithShortAddress = (): React.ReactElement => (
  <EthHashInfo hash={hash} shortenHash={4} />
);

export const WithName = (): React.ReactElement => (
  <EthHashInfo hash={hash} name="Owner 1" />
);

export const WithIdenticon = (): React.ReactElement => (
  <EthHashInfo hash={hash} showIdenticon shortenHash={4} />
);

export const WithButtons = (): React.ReactElement => (
  <EthHashInfo
    hash={hash}
    name="Owner 1"
    showIdenticon
    showCopyBtn
    showEtherscanBtn
    shortenHash={4}
  />
);

export const WithMenu = (): React.ReactElement => {
  const items: EllipsisMenuItem[] = [
    { label: 'Send again', disabled: true, onClick: console.log },
    { label: 'Edit Address book entry', onClick: console.log },
  ];
  return (
    <EthHashInfo
      hash={hash}
      name="Owner 1"
      showIdenticon
      showCopyBtn
      showEtherscanBtn
      menuItems={items}
      shortenHash={4}
    />
  );
};