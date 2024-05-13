<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

import UIUserCard from '@/UI/Card/UIUserCard.vue'
import ComponentLoader from '@/components/ComponentLoader.vue'

const store = useStore()
const users = computed(() => store.getters['users/getUsers'])
const message = computed(() => store.getters['users/getMessage'])
</script>

<template>
    <p class="search-users__text">
        {{ message }}
    </p>

    <ComponentLoader v-if="store.state.users.isLoading" />

    <ul
        v-else
        class="users-list"
    >
        <li
            v-for="user in users"
            :key="user.id"
            class="users-list__item"
        >
            <UIUserCard
                :name="user.name"
                :email="user.email"
                :to="`/user/${user.id}`"
            />
        </li>
    </ul>
</template>

<style scoped lang="scss">
.users-list {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
}
</style>