<template>
  <div class="alert-container" :class="`bg-${color}-100`">
    <slot class="text-md" />
  </div>
</template>

<script setup lang='ts'>
import type { UiAlertProps } from '@/libs/types';

withDefaults(defineProps<UiAlertProps>(), {
  color: 'blue'
})
</script>

<style lang='scss' scoped>
.alert-container {
  @apply rounded-lg py-2 px-4 flex gap-1 items-center shadow-sm;
}
</style>
