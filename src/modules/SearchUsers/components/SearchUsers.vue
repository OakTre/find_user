<script setup>
import { ref } from "vue"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import debounce from 'lodash.debounce'

import UsersLIst from './UsersLIst.vue'
import UIInput from '@/UI/Input/index.js'

const query = ref('')
const store = useStore()
const router = useRouter()

const searchUsers = debounce(() => {
    store.dispatch('users/getUsers', {
        username: query.value.split(/[\s,]+/)
    })
}, 1000)

function onSearchUsers() {
    store.commit('users/setLoading', true)
    store.commit('users/setMessage', '')

    if (query.value === '') {
        store.commit('users/clearState')

        router.push('/')

        return
    }

    searchUsers()
}
</script>

<template>
    <div class="search-users">
        <h3 class="search-users__heading">
            Поиск сотрудников
        </h3>

        <UIInput
            v-model="query"
            placeholder="Введите username"
            name="query"
            class="search-users__control"
            @input="onSearchUsers"
        />

        <h3 class="search-users__label">
            Результаты
        </h3>

        <UsersLIst />
    </div>
</template>

<style scoped lang="scss">
.search-users {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2.7rem 3.6rem;
    height: 100%;

    &__heading {
        font: var(--font-h3);
        margin-bottom: 2.2rem;
    }

    &__label {
        font: var(--font-h3);
        margin-bottom: 1rem;
    }

    &__control {
        margin-bottom: 2.2rem;
    }

    &__text {
        color: var(--color-grey);
    }
}

</style>