// web/vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',       // browser-like DOM
    globals: true,              // makes expect/test/describe global
    setupFiles: './src/test/setup.ts',
    css: true,                  // allow importing CSS in tests (optional)
  },
})
