<script setup>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed, onUnmounted, watch } from 'vue'

import ComponentLoader from '@/components/ComponentLoader.vue'
import ProfileInfo from './ProfileInfo.vue'

const store = useStore()
const router = useRoute()
const profile = computed(() => store.getters['profile/getUserProfile'])

watch(() => router.params.id, () => {
    store.dispatch('profile/getInfo', {
        id: router.params.id
    })
}, { immediate: true })

onUnmounted(() => {
    store.commit('profile/setUserProfile', {})
})
</script>

<template>
    <ComponentLoader v-if="store.state.profile.isLoading" />

    <ProfileInfo
        v-else
        :profile
    />
</template>

<style lang="scss" scoped></style>
