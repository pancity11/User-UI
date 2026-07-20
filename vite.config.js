import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// App.jsx reads process.env.REACT_APP_API_BASE directly (Create-React-App
// style). Vite doesn't polyfill process.env by default, so `define` below
// replaces that exact expression at build time with whatever is in your
// .env file — no need to touch App.jsx at all.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.REACT_APP_API_BASE': JSON.stringify(env.REACT_APP_API_BASE || ''),
    },
  };
});
