<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

defineProps({
    profile: {
        type: Object,
        default: () => ({})
    }
})

const store = useStore()
const isError = computed(() => store.getters['profile/getIsError'])
</script>

<template>
    <div
        v-if="!isError"
        class="profile-info"
    >
        <div class="profile-info__image-wrapper">
            <img
                src="@/assets/img/img-empty-big.jpg"
                alt="User Avatar"
            >
        </div>
        <div class="profile-info__info">
            <h1 class="profile-info__label">
                {{ profile.name }}
            </h1>
            <p class="profile-info__row">
                <span>username:</span> {{ profile.username }}
            </p>
            <p class="profile-info__row">
                <span>email:</span> {{ profile.email }}
            </p>
            <p class="profile-info__row">
                <span>phone:</span>  {{ profile.phone }}
            </p>

            <p class="profile-info__label profile-info__label--offset-top">
                О себе:
            </p>

            <p class="profile-info__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>

    <div
        v-else
        class="profile-info__error"
    >
        <h1 class="profile-info__label">
            Произошла ошибка, вернитесь на
            <RouterLink
                class="profile-info__link"
                to="/"
            >
                главную
            </RouterLink>
        </h1>
    </div>
</template>

<style lang="scss" scoped>
.profile-info {
    display: flex;
    align-items: flex-start;
    gap: 6.1rem;
    color: var(--color-grey);

    @media (max-width: 1200px) {
        flex-direction: column;
    }

    &__image-wrapper {
        flex-shrink: 0;
        width: 42.4rem;
        height: auto;

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }

        @media (max-width: 1200px) {
            width: 100%;
        }
    }

    &__label {
        font: var(--font-h3);
        margin-bottom: 1.4rem;
        color: var(--color-dark);

        &--offset-top {
            margin-top: 2rem;
        }
    }

    &__row {
        margin-bottom: 1rem;

        span {
            font: var(--font-h3);
            color: var(--color-dark);
        }
    }

    &__text {
        margin-top: 2rem;
    }

    &__link {
        text-decoration: underline;
        color: var(--color-grey);

        &:hover {
            text-decoration: none;
        }
    }
}
</style>
