<template>

</template>

<script lang="ts" setup>
withDefaults(defineProps<{
    // Название иконки
    iconName?: string | null;
}>(),
    {
        iconName: null,
    }
)
</script>