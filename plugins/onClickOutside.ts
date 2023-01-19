import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('on-click-outside', {
        beforeMount(el: any, binding: any) {
            el.addEventListener('click', (e: any) => e.stopPropagation())
            document.body.addEventListener('click', binding.value)
        },
        unmounted(_, binding: any) {
            document.body.removeEventListener('click', binding.value)
        },
    })
})