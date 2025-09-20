import { type Config } from '@react-router/dev/config';
import { vercelPreset } from '@vercel/react-router/vite';

export default {
  appDirectory: 'src',
  ssr: true,
  //ssr: false - turns off server rendering.
  presets: [vercelPreset()],
  routeDiscovery: {
    mode: 'lazy',
    manifestPath: '/__manifest',
  },
} satisfies Config;
