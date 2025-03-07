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
import { Icon } from './'
import type { UiBtnProps } from '@/libs/types';

const emit = defineEmits(['click'])

const props = withDefaults(defineProps<UiBtnProps>(), {
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
  @apply duration-200 font-bold px-2 rounded;
  &.bordered {
    @apply border;
  }
}
</style>
