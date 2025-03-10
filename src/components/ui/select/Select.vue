<template>
<div class="input-select">
  <input
    ref="inputSelect"
    type="text"
    :class="rounded"
    @focus="isOpen = true"
    @blur="blurSelect"
    v-model="model" readonly>
  <Icon :icon="isOpen ? 'arrowUp' : 'arrowDown'" @click-icon="isOpen = !isOpen" is-absolute />
  <div class="options" :class="{ 'open shadow-md' : isOpen }">
    <Item
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :value="option.value"
      @change="onChange" />
  </div>
</div>
</template>

<script setup lang='ts'>
import { computed, nextTick, ref, watch } from 'vue';
import Item from './selectItem.vue';
import { Icon } from '../';
import type { UiSelectProps } from '@/libs/types';

defineProps<{ options: UiSelectProps[]}>()

const model = defineModel();
const isOpen = ref<boolean>()
const inputSelect = ref()

const onChange = (value: any): void => {
  model.value = value;
}

const rounded = computed<string>(() => {
  if (isOpen.value) {
    return 'rounded-t-lg'
  }
  return 'rounded-lg'
})

const blurSelect = (): void => {
  setTimeout(() => {
    isOpen.value = false
  }, 200)
}

watch(isOpen, async (newValue) => {
  if (newValue) {
    await nextTick();
    inputSelect.value?.focus();
  }
});

</script>

<style lang='scss' scoped>
.input-select {
  @apply relative;
  input {
    @apply outline-none duration-200 px-1 cursor-pointer
      py-2 pl-2 w-full border border-gray-300 focus:border-gray-400 border-r;
  }

  .options {
    display: none;
    top: 2.64rem;
    @apply absolute z-20 bg-white;
    &.open {
      @apply flex flex-col w-full border-r border-l border-b border-gray-400;
    }

  }
}
</style>
