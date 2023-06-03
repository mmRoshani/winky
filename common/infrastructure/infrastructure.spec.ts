import { NetworkDefaultAdapter } from '../enum';
import { NETWORK } from './network.infrastructure';

describe('infrastructure', () => {
  test('NETWORK-IPv4', () => {
    const { family, internal } = NETWORK(NetworkDefaultAdapter.LOOPBACK, 'IPv4');

    expect(internal).toBe(true);
    expect(family).toBe('IPv4');
  });

  test('NETWORK-IPv6', () => {
    const { family, internal } = NETWORK(NetworkDefaultAdapter.LOOPBACK, 'IPv6');

    expect(internal).toBe(true);
    expect(family).toBe('IPv6');
  });
});
