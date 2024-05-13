<script setup>
import ComponentHeader from '@/components/ComponentHeader.vue'
import ComponentFooter from '@/components/ComponentFooter.vue'
</script>

<template>
    <ComponentHeader
        :isError="true"
    />
    <main class="app-error app-container">
        <slot />
    </main>
    <ComponentFooter />
</template>

<style scoped lang="scss">
.app-error {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
