import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  server: {
    port: 9001, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    // 代理
    proxy: {
      // '/api': {
      //   target: 'http://API网关所在域名',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
    }
  }
})
