<script setup>

</script>

<template>
    <div class="spinner">
        <img
            class="spinner__svg"
            src="/svg/spinner-icon.svg"
            alt="Spinner SVG"
        >
    </div>
</template>

<style lang="scss" scoped>
.spinner {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding-top: 1rem;

    &__svg {
        display: block;
        width: 3rem;
        height: 3rem;
        object-fit: cover;
        animation: rotateSpinner infinite linear 0.8s;
    }
}

@keyframes rotateSpinner {
    to  {
        transform: rotate(360deg);
    }
}
</style>