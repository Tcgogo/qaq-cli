import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      // the proper extensions will be added
      fileName: (format) => `index.js`,
      formats: ['cjs'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['fs', 'events', 'child_process', 'path', 'process'],
      output: {
        // // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        // globals: {
        //   vue: 'Vue',
        // },
      },
    },
  },
});
