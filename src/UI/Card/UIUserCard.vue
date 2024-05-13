<script setup>
defineProps({
    name: {
        type: String,
        default: 'Bret'
    },
    email: {
        type: String,
        default: 'Sincere@april.biz'
    },
    isActive: {
        type: Boolean,
        default: false
    },
    to: {
        type: [String, Number],
        default: '/users'
    }
})
</script>

<template>
    <article class="ui-user-card">
        <div class="ui-user-card__image-wrapper">
            <img
                src="@/assets/img/img-empty-small.jpg"
                alt="User Avatar"
                class="ui-user-card__image"
            >
        </div>
        <div class="ui-user-card__info">
            <h4 class="ui-user-card__label">
                <router-link
                    class="ui-user-card__link"
                    :to="to"
                >
                    {{ name }}
                </router-link>
            </h4>
            <p class="ui-user-card__email">
                {{ email }}
            </p>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.ui-user-card {
    position: relative;
    display: flex;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 0 10px 0 rgba(#000, 10%);

    &__link {
        &::before {
            position: absolute;
            top: 0;
            inset: 0;
            content: "";
        }

        &.router-link-active {
            &::before {
                z-index: -1;
                background-color: rgba(#E0E0E0, 0.5);
                border-radius: 1rem;
            }
        }
    }

    &__image-wrapper {
        width: 7rem;
        height: 7rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }

    &__info {
        display: flex;
        flex-direction: column;
        padding: 1.5rem 1.8rem;
        border-left: 1px solid var(--color-border);
    }

    &__label {
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    &__email {
        color: var(--color-grey);
    }
}
</style>