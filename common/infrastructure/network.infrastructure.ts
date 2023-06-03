import { networkInterfaces } from 'os';
import { isEmpty } from 'radash';

import { NetworkDefaultAdapter } from '../enum';

export const NETWORK = (
  adapterName: NetworkDefaultAdapter | string = NetworkDefaultAdapter.LOOPBACK,
  family: 'IPv4' | 'IPv6' = 'IPv4',
) => {
  const networkInterface = networkInterfaces()[adapterName]?.find((adapter) => adapter.family === family);

  if (isEmpty(networkInterface))
    throw new Error(`No network interface found with given adapter: ${adapterName}`);
  return networkInterface;
};
