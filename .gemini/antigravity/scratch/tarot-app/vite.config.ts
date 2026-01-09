import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [react()],
    base: '/tarot-app/', // 先ほど決めた名前（例: '/tarot-app/'）
})