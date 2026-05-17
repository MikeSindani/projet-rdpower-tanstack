import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    netlify(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        // Switch to true to enable prerendering
        enabled: true,
      },
      sitemap: {
        enabled: true,
        host: "https://repower-rdc.com",
      },
    }),
    viteReact(),
  ],
})

export default config
