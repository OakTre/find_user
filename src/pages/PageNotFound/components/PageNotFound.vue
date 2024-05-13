<script setup>

</script>

<template>
<div class="page-not-found">
    <h1 class="page-not-found__label">
        К сожалению такой страницы не существует
    </h1>

    <RouterLink
        class="page-not-found__link"
        to="/"
    >
        На главную
    </RouterLink>
</div>
</template>

<style lang="scss" scoped>
.page-not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__label {
        font: var(--font-h1);
    }

    &__link {
        display: inline-block;
        margin-top: 4rem;
    }
}
</style>