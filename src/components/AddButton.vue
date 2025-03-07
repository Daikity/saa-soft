<template>
  <button
    @click="$emit('click')"
    class="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {{ texts.addButton }}
  </button>
</template>

<script lang="ts" setup>
import { texts } from '../libs/i18n';
</script>

<style scoped>
</style>
