<template>
  <div class="mb-4">
    <label for="login" class="block text-sm font-medium text-gray-700">{{ texts.login }}</label>
    <input
      id="login"
      type="text"
      v-model="login"
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      maxlength="100"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { texts } from '../libs/i18n';

interface Props {
  modelValue: string
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const login = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});
</script>

<style scoped>
</style>
