<template>
    <app-container>
        <h1>Index page</h1>
    </app-container>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'main-page',
});

const AppContainer = defineAsyncComponent(() => import('@/components/AppContainer/AppContainer.vue'));

</script>