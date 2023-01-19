<template>
    <div class="logo">
        <NuxtLink to="/" class="logo__link">
            <img src="@/assets/img/blue-logo.svg" alt="" class="logo__img">
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
    .logo__link {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .logo__img {
        width: 100%;
        max-width: 100%;
    }
</style>