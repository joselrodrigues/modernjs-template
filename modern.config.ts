import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  dev: {
    port: 3000,
  },
  server: {
    // ssr: true,
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
    moduleFederationPlugin(),
  ],
});
