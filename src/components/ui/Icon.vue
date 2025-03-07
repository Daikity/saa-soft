<template>
<div class="icon"
  :class="`${iconTextColor}-400 hover:${iconTextColor}-500 ${isAbsolute ? 'absolute right-0 top-0': ''} `"
  @click="emit('click-icon')">
  <component :is="icons[icon]" />
</div>
</template>

<script setup lang='ts'>
import { icons } from '@/libs/icons'
import type { UiIconProps } from '@/libs/types';

withDefaults(defineProps<UiIconProps>(), {
  iconTextColor: 'text-gray',
  isAbsolute: false
})
const emit = defineEmits(['click-icon'])
</script>

<style lang='scss' scoped>
.icon {
  @apply z-10 w-10 h-10 flex duration-200
    items-center justify-center cursor-pointer;

  svg {
    @apply w-6;
  }
}
</style>
