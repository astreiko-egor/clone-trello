// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/scss/main.scss',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/_variables.scss";',
                },
            },
        },
    },
    typescript: {
        strict: true
    },
    modules: [
        'vite-plugin-vue-type-imports/nuxt'
    ],
    plugins: [
        '@/plugins/onClickOutside.ts'
    ]
})
