import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 7000
    },
    plugins: [react()],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    'primary-color': '#095eab',
                    'link-color': '#095eab',
                    'menu-dark-bg': '#192a5e',
                    'menu-dark-inline-submenu-bg': '#122150',
                    'menu-dark-item-hover-bg': '#0a1949',
                    'menu-dark-item-active-bg': '#0a1949',
                    'menu-dark-selected-item-icon-color': '#3963bc',
                    'menu-dark-selected-item-text-color': '#3963bc',
                    'menu-dark-highlight-color': '#3963bc',
                },

            }
        }
    }
})
