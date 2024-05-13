<script setup>
defineProps({
    isError: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <header class="header">
        <div class="app-container header__container">
            <RouterLink to="/" class="header__logo">
                Жилфонд
            </RouterLink>
            <p class="header__text">
                {{ isError ? 'Ошибочка...' : 'Пользователь' }}
            </p>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    padding-top: 5rem;
    padding-bottom: 4.5rem;

    &__container {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    &__logo {
        font: var(--font-h1);
        color: var(--color-red);
    }

    &__text {
        font: var(--font-h3);
    }
}
</style>