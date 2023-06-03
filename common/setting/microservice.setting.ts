import { getEnv } from '@fullstacksjs/toolbox';
import { join } from 'path';

import type { MicroName } from '../enum';
import { NetworkDefaultAdapter } from '../enum';
import { NETWORK } from '../infrastructure';
import type { IMicroSetting } from '../interface';

export const MicroserviceSetting = (micro: MicroName): IMicroSetting => {
  const { address: v4address } = NETWORK();
  const { address: v6address } = NETWORK(NetworkDefaultAdapter.LOOPBACK, 'IPv6');
  const httpPort = parseInt(getEnv(`${micro}_HTTP_PORT`, '3000'), 10);
  const rpcPort = parseInt(getEnv(`${micro}_RPC_PORT`, '3001'), 10);
  const protoName = micro.toLowerCase();
  return {
    httpPort,
    IPv4: v4address,
    IPv6: v6address,
    protoName,
    protoPath: join(__dirname, `proto/${protoName}.proto`),
    rpcPort,
    urls: [`http://${v4address}:${httpPort}`, `http://${v6address}:${httpPort}`],
  };
};
