<template>
  <button
    @click="$emit('click')"
    :class="classNames"
    :disabled="disabled"
  >
    <slot />
    <Icon v-if="icon" :icon-text-color="iconTextColor" :icon="icon" />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import Icon from './Icon.vue'

interface Props {
  icon?: string
  disabled?: boolean
  filling?: boolean
  bordered?: boolean
  btnColor?: string
}

const emit = defineEmits(['click'])

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  btnColor: 'blue'
})

const iconTextColor = computed<string>(() => props.filling ? 'text-white' : 'text-gray')

const classNames = computed<string>(() => {
  if (!props.bordered && !props.filling) return 'button text-gray-400 hover:text-gray-500'
  if (props.bordered && props.filling) return 'button text-gray-400 hover:text-gray-500'
  return [`button`,
    props.filling ?
      `filling hover:bg-${props.btnColor}-500 text-white bg-${props.btnColor}-500` : '',
    props.bordered ?
      `bordered hover:bg-${props.btnColor}-500
      text-${props.btnColor}-500
      hover:text-white
      border-${props.btnColor}-500` : '']
    .filter(Boolean)
    .join(' ')
})

</script>

<style lang="scss" scoped>
.button {
  @apply duration-200 font-bold py-2 px-4 rounded;

  &.filling {
    @apply bg-blue-500 hover:bg-blue-700;
  }

  &.bordered {
    @apply border;
  }
}
</style>
