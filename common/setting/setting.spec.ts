import { MicroName } from '../enum';
import { MicroserviceSetting } from './microservice.setting';

describe('setting', () => {
  test('MICROSERVICE', () => {
    const { IPv4, IPv6, httpPort, rpcPort, urls } = MicroserviceSetting(MicroName.BFF);

    expect(IPv4).toBeDefined();
    expect(IPv6).toBeDefined();
    expect(httpPort).toBeDefined();
    expect(rpcPort).toBeDefined();
    expect(urls).toHaveLength(2);
  });
});
