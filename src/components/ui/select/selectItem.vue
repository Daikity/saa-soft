<template>
  <div
    class="item"
    @click="emit('change', value)">
      <span>{{ label }}</span>
  </div>
</template>

<script setup lang='ts'>
import type { UiSelectProps } from '@/libs/types';

defineProps<UiSelectProps>()
const emit = defineEmits(['change'])
</script>

<style lang='scss' scoped>
.item {
  @apply p-2 border-b border-gray-400 hover:bg-gray-50 cursor-pointer duration-200;
  &:last-child {
    border-bottom: 0;
  }
}
</style>
