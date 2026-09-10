import react from '@vitejs/plugin-react';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const dirname = import.meta.dirname;
const libDir = path.join(dirname, 'src/lib');

// One entry per public component/module in src/lib, e.g. src/lib/BarChart.ts
// becomes the "BarChart" entry, built to dist/BarChart.js + dist/BarChart.d.ts.
const entries = Object.fromEntries(
  readdirSync(libDir)
    .filter((file) => file.endsWith('.ts'))
    .map((file) => [file.replace(/\.ts$/, ''), path.join(libDir, file)])
);

const externalDeps = [
  'react',
  'react-dom',
  'dayjs',
  '@emotion/react',
  '@emotion/styled',
  '@mui/material',
  '@mui/icons-material',
  '@mui/x-charts',
  '@mui/x-data-grid',
  '@mui/x-date-pickers',
  '@mui/x-tree-view',
  '@react-spring/web',
];

export default defineConfig({
  publicDir: false,
  plugins: [
    react(),
    dts({
      tsconfigPath: 'tsconfig.app.json',
      entryRoot: 'src',
      include: [
        'src/lib/**/*.ts',
        'src/components/calendar/**/*.{ts,tsx}',
        'src/components/cards/**/*.{ts,tsx}',
        'src/components/charts/**/*.{ts,tsx}',
        'src/components/labels/**/*.{ts,tsx}',
        'src/components/progress/**/*.{ts,tsx}',
        'src/components/select/**/*.{ts,tsx}',
        'src/components/tabs/**/*.{ts,tsx}',
        'src/internals/components/CustomIcons.tsx',
        'src/theme/AppTheme.tsx',
        'src/theme/ColorModeIconDropdown.tsx',
        'src/theme/ColorModeSelect.tsx',
        'src/theme/themePrimitives.ts',
        'src/theme/customizations/**/*.{ts,tsx}',
      ],
      exclude: ['**/*.stories.tsx', '**/*.stories-hide.tsx'],
      outDir: 'dist',
      bundleTypes: true,
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: entries,
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: (id) =>
        externalDeps.some((dep) => id === dep || id.startsWith(`${dep}/`)),
      output: {
        preserveModules: false,
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
  },
});
