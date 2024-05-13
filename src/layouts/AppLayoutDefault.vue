<script setup>
import ComponentHeader from '@/components/ComponentHeader.vue'
import ComponentFooter from '@/components/ComponentFooter.vue'
import { SearchUsers } from '@/modules/SearchUsers'
</script>

<template>
    <ComponentHeader />
    <main class="app-main app-container">
        <div class="app-content">
            <aside class="app-content__aside">
                <SearchUsers />
            </aside>
            <div class="app-content__main">
                <slot />
            </div>
        </div>
    </main>
    <ComponentFooter />
</template>

<style scoped lang="scss">
.app-content {
    display: flex;
    border-radius: 1rem;
    box-shadow: 0 0 10px 0 rgba(#000, 10%);
    flex-grow: 1;

    &__aside {
        flex-shrink: 0;
        width: 38.5rem;
        border-right: 1px solid var(--color-border);

        @media (max-width: 769px) {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid var(--color-border);
        }
    }

    &__main {
        flex-grow: 1;
        padding: 3rem;
    }

    @media (max-width: 769px) {
        flex-direction: column;
    }
}
</style>
