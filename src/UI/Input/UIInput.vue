<script setup>
import { computed } from 'vue'

const props = defineProps({
    modelValue: {
        type: String
    },
    isDisabled: {
        type: Boolean,
        default: false
    },
    isError: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
    }
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
    get() {
        return props.modelValue
    },
    set(newValue) {
        emit('update:modelValue', newValue)
    }
})
</script>

<template>
    <input
        v-model="value"
        :type="type"
        :name="name"
        class="ui-input"
        :class="{
            'ui-input--is-disabled': isDisabled,
            'ui-input--is-error': isError
        }"
        :disabled="isDisabled"
        :placeholder="placeholder"
    />
</template>

<style scoped lang="scss">
.ui-input {
    --bc: #E9ECEF;
    --br: 0.8rem;
    --h: 4.9rem;

    width: 100%;
    height: var(--h);
    border: 1.5px solid var(--bc);
    border-radius: var(--br);
    font: var(--font-body);
    padding: 1.4rem;
    background-color: var(--color-white);
    transition: all var(--transition);

    @include placeholder() {
        font: var(--font-body);
        color: var(--color-grey);
    }

    &:focus-visible {
        outline: none;
    }

    &:focus {
        --bc: var(--color-dark);

        outline: none;
    }

    &--is-disabled {
        opacity: 0.7;
    }

    &--is-error {
        --bc: var(--color-red) !important;
    }
}
</style>
