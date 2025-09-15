import { type Config } from '@react-router/dev/config';

export default {
  appDirectory: 'src',
  ssr: true,
  //ssr: false - turns off server rendering.
  routeDiscovery: {
    mode: 'lazy',
    manifestPath: '/__manifest',
  },
} satisfies Config;
