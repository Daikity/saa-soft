<template>
  <div class="form-input" :class="{error : error}">
    <input
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
    />
    <Icon isAbsolute @click-icon="emit('click-icon')" v-if="icon" :icon="icon" />
    <span v-if="error">{{ error }}</span>
  </div>
</template>

<script setup lang='ts'>
import type { UiInputProps } from '@/libs/types';
import { Icon } from '@/components/ui';

const model = defineModel<string | null>()

const emit = defineEmits(['click-icon'])

withDefaults(defineProps<UiInputProps>(), {
  type: 'text',
  required: false,
  disabled: false
})

</script>

<style lang='scss' scoped>
.form-input {
  @apply relative flex flex-col relative gap-0.5 items-center z-0;

  span {
    @apply bottom-0 pl-2 text-red-500 text-sm -mt-1;
  }

  &.error {
    input {
      @apply text-red-500 border-red-400 focus:border-red-500;
    }
  }

  input {
    @apply outline-none duration-200 rounded-lg px-1
      py-2 pl-2 w-full border border-gray-300 focus:border-gray-500;
  }
}
</style>
